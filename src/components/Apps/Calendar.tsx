import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Checkbox } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useDialog } from "../Dialog/DialogProvider";
import { notify } from "../../system/notifications";
import {
    listEvents, createEvent, updateEvent, deleteEvent,
    type CalEvent, type CalEventInput,
} from "../../system/officeApi";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const REMINDERS: { value: number; label: string }[] = [
    { value: -1, label: "None" },
    { value: 0, label: "At time of event" },
    { value: 5, label: "5 minutes before" },
    { value: 15, label: "15 minutes before" },
    { value: 60, label: "1 hour before" },
];

/* ---- date helpers (local time) ---- */
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
const sameDay = (a: number, b: number) => {
    const x = new Date(a), y = new Date(b);
    return x.getFullYear() === y.getFullYear() && x.getMonth() === y.getMonth() && x.getDate() === y.getDate();
};
const pad = (n: number) => String(n).padStart(2, "0");
const toDateInput = (ms: number) => { const d = new Date(ms); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const toTimeInput = (ms: number) => { const d = new Date(ms); return `${pad(d.getHours())}:${pad(d.getMinutes())}`; };
const fmtTime = (ms: number) => new Date(ms).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

interface EditState {
    id: number | null;
    title: string;
    date: string;   // yyyy-mm-dd
    time: string;   // hh:mm
    allDay: boolean;
    reminderMinutes: number;
    notes: string;
}

const Calendar: React.FC = () => {
    const { alert, confirm } = useDialog();
    const today = new Date();
    const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
    const [events, setEvents] = useState<CalEvent[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [selectedDay, setSelectedDay] = useState<number | null>(null); // epoch ms (start of day)
    const [edit, setEdit] = useState<EditState | null>(null);

    const monthStart = useMemo(() => new Date(view.getFullYear(), view.getMonth(), 1).getTime(), [view]);
    const monthEnd = useMemo(() => new Date(view.getFullYear(), view.getMonth() + 1, 1).getTime() - 1, [view]);

    const load = useCallback(async () => {
        setError(null);
        setLoading(true);
        try {
            setEvents(await listEvents(monthStart, monthEnd));
        } catch {
            setError("Couldn't reach Calendar. Is the server running and are you signed in?");
            setEvents([]);
        } finally {
            setLoading(false);
        }
    }, [monthStart, monthEnd]);

    useEffect(() => { void load(); }, [load]);

    /* ---- grid construction ---- */
    const firstWeekday = new Date(view.getFullYear(), view.getMonth(), 1).getDay(); // 0 Sun
    const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    const cells: (number | null)[] = []; // day-of-month or null for leading blanks
    for (let i = 0; i < firstWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);

    const eventsOnDay = useCallback((dayMs: number) => events.filter((e) => sameDay(e.start, dayMs)).sort((a, b) => a.start - b.start), [events]);

    const goPrev = () => { setSelectedDay(null); setView(new Date(view.getFullYear(), view.getMonth() - 1, 1)); };
    const goNext = () => { setSelectedDay(null); setView(new Date(view.getFullYear(), view.getMonth() + 1, 1)); };
    const goToday = () => { const n = new Date(); setSelectedDay(null); setView(new Date(n.getFullYear(), n.getMonth(), 1)); };

    /* ---- form ---- */
    const openNew = (dayMs?: number) => {
        const base = dayMs ?? Date.now();
        const now = new Date();
        setEdit({
            id: null,
            title: "",
            date: toDateInput(base),
            time: `${pad(now.getHours())}:00`,
            allDay: false,
            reminderMinutes: -1,
            notes: "",
        });
    };

    const openEdit = (ev: CalEvent) => {
        setEdit({
            id: ev.id,
            title: ev.title,
            date: toDateInput(ev.start),
            time: toTimeInput(ev.start),
            allDay: ev.allDay,
            reminderMinutes: ev.reminderMinutes,
            notes: ev.notes ?? "",
        });
    };

    const save = async () => {
        if (!edit) return;
        if (!edit.title.trim()) { await alert({ title: "Calendar", message: "Please enter a title for the event.", type: "warning" }); return; }
        const [y, m, d] = edit.date.split("-").map(Number);
        let start: number;
        if (edit.allDay) {
            start = new Date(y, (m || 1) - 1, d || 1, 0, 0, 0, 0).getTime();
        } else {
            const [hh, mm] = edit.time.split(":").map(Number);
            start = new Date(y, (m || 1) - 1, d || 1, hh || 0, mm || 0, 0, 0).getTime();
        }
        const input: CalEventInput = {
            title: edit.title.trim(),
            start,
            endAt: null,
            allDay: edit.allDay,
            notes: edit.notes,
            reminderMinutes: edit.reminderMinutes,
        };
        try {
            if (edit.id != null) await updateEvent(edit.id, input);
            else await createEvent(input);
            setEdit(null);
            setSelectedDay(startOfDay(new Date(start)));
            await load();
            notify({ title: "Calendar", body: "Event saved", type: "info" });
        } catch (e: any) {
            await alert({ title: "Save failed", message: String(e?.message ?? e), type: "error" });
        }
    };

    const remove = async (ev: CalEvent) => {
        if (!(await confirm({ title: "Delete event", message: `Delete "${ev.title}"?` }))) return;
        try {
            await deleteEvent(ev.id);
            await load();
        } catch (e: any) {
            await alert({ title: "Delete failed", message: String(e?.message ?? e), type: "error" });
        }
    };

    const monthLabel = `${MONTHS[view.getMonth()]} ${view.getFullYear()}`;
    const dayPanelEvents = selectedDay != null ? eventsOnDay(selectedDay) : [];

    return (
        <AppShell $minW={520} $minH={400}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); openNew(); }}>New Event</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); void load(); }}>Refresh</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Calendar — events &amp; reminders</MenuItem></Menu>
            </MenuBar>
            <Toolbar>
                <ToolButton onClick={() => void load()}>⟳ Refresh</ToolButton>
                <ToolSep />
                <ToolButton onClick={() => openNew()}>➕ New Event</ToolButton>
            </Toolbar>
            <AppBody style={{ padding: 0 }}>
                {/* ---- month grid ---- */}
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", background: "#fff" }}>
                    {/* header */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "6px 8px", background: "#e7e7ee", borderBottom: "1px solid #aaa" }}>
                        <Button size="sm" onClick={goPrev}>◀</Button>
                        <div style={{ minWidth: 150, textAlign: "center", fontWeight: "bold" }}>{monthLabel}</div>
                        <Button size="sm" onClick={goNext}>▶</Button>
                        <Button size="sm" onClick={goToday} style={{ marginLeft: 8 }}>Today</Button>
                    </div>
                    {/* weekday header */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", background: "#000080", color: "#fff" }}>
                        {WEEKDAYS.map((w) => (
                            <div key={w} style={{ textAlign: "center", fontSize: 11, fontWeight: "bold", padding: "3px 0" }}>{w}</div>
                        ))}
                    </div>
                    {/* error / loading / grid */}
                    {error ? (
                        <div style={{ padding: 16, color: "#900" }}>{error}</div>
                    ) : loading && events.length === 0 ? (
                        <div style={{ padding: 16, color: "#888" }}>Loading…</div>
                    ) : (
                        <div style={{ flex: 1, minHeight: 0, display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gridAutoRows: "1fr", overflow: "auto" }}>
                            {cells.map((day, i) => {
                                if (day == null) {
                                    return <div key={`b${i}`} style={{ background: "#f0f0f0", border: "1px solid #ddd" }} />;
                                }
                                const dayMs = new Date(view.getFullYear(), view.getMonth(), day).getTime();
                                const isToday = sameDay(dayMs, Date.now());
                                const isSelected = selectedDay != null && sameDay(dayMs, selectedDay);
                                const dayEvents = eventsOnDay(dayMs);
                                return (
                                    <div
                                        key={day}
                                        onClick={() => setSelectedDay(dayMs)}
                                        style={{
                                            border: isToday ? "2px solid #000080" : "1px solid #ddd",
                                            background: isSelected ? "#cfe0ff" : "#fff",
                                            padding: 2,
                                            minHeight: 52,
                                            cursor: "pointer",
                                            overflow: "hidden",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <div style={{ fontSize: 11, fontWeight: isToday ? "bold" : "normal", textAlign: "right", color: "#333" }}>{day}</div>
                                        {dayEvents.slice(0, 3).map((ev) => (
                                            <div
                                                key={ev.id}
                                                title={ev.title}
                                                style={{ fontSize: 10, lineHeight: 1.3, background: "#000080", color: "#fff", borderRadius: 2, padding: "0 3px", marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                                            >
                                                {ev.title}
                                            </div>
                                        ))}
                                        {dayEvents.length > 3 && (
                                            <div style={{ fontSize: 9, color: "#666", marginTop: 1 }}>+{dayEvents.length - 3} more</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* ---- right column: day panel / form ---- */}
                {(selectedDay != null || edit != null) && (
                    <div style={{ width: 220, flexShrink: 0, background: "#e7e7ee", borderLeft: "1px solid #aaa", display: "flex", flexDirection: "column", overflow: "auto" }}>
                        {edit != null ? (
                            <div style={{ padding: 10, display: "flex", flexDirection: "column", gap: 8 }}>
                                <div style={{ fontWeight: "bold" }}>{edit.id != null ? "Edit Event" : "New Event"}</div>
                                <label style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 12 }}>
                                    Title
                                    <input value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} />
                                </label>
                                <label style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 12 }}>
                                    Date
                                    <input type="date" value={edit.date} onChange={(e) => setEdit({ ...edit, date: e.target.value })} />
                                </label>
                                <Checkbox checked={edit.allDay} onChange={() => setEdit({ ...edit, allDay: !edit.allDay })} label="All-day" />
                                {!edit.allDay && (
                                    <label style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 12 }}>
                                        Time
                                        <input type="time" value={edit.time} onChange={(e) => setEdit({ ...edit, time: e.target.value })} />
                                    </label>
                                )}
                                <label style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 12 }}>
                                    Reminder
                                    <select value={edit.reminderMinutes} onChange={(e) => setEdit({ ...edit, reminderMinutes: Number(e.target.value) })}>
                                        {REMINDERS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                                    </select>
                                </label>
                                <label style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 12 }}>
                                    Notes
                                    <textarea value={edit.notes} onChange={(e) => setEdit({ ...edit, notes: e.target.value })} rows={4} style={{ resize: "none", fontFamily: "inherit", fontSize: 12 }} />
                                </label>
                                <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
                                    <Button onClick={() => void save()}>💾 Save</Button>
                                    <Button onClick={() => setEdit(null)}>Cancel</Button>
                                </div>
                            </div>
                        ) : (
                            <div style={{ padding: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div style={{ fontWeight: "bold", fontSize: 13 }}>{new Date(selectedDay!).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}</div>
                                    <span onClick={() => setSelectedDay(null)} style={{ cursor: "pointer", color: "#555", fontSize: 13 }} title="Close">✕</span>
                                </div>
                                {dayPanelEvents.length === 0 ? (
                                    <div style={{ color: "#888", fontSize: 12 }}>No events.</div>
                                ) : (
                                    dayPanelEvents.map((ev) => (
                                        <div key={ev.id} style={{ background: "#fff", border: "1px solid #bbb", borderRadius: 3, padding: 6 }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", gap: 6 }}>
                                                <div onClick={() => openEdit(ev)} style={{ cursor: "pointer", flex: 1, minWidth: 0 }}>
                                                    <div style={{ fontWeight: "bold", fontSize: 12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ev.title}</div>
                                                    <div style={{ fontSize: 11, color: "#555" }}>{ev.allDay ? "All day" : fmtTime(ev.start)}</div>
                                                </div>
                                                <span onClick={() => void remove(ev)} style={{ cursor: "pointer", color: "#900" }} title="Delete">🗑</span>
                                            </div>
                                        </div>
                                    ))
                                )}
                                <Button onClick={() => openNew(selectedDay!)} style={{ marginTop: 4 }}>➕ New Event</Button>
                            </div>
                        )}
                    </div>
                )}
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>{monthLabel}</StatusPanel>
                <StatusPanel>{events.length} event{events.length === 1 ? "" : "s"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Calendar;
