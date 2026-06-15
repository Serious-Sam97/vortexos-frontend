import { useCallback, useEffect, useState } from "react";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useProcessContext } from "../../contexts/ProcessContext";
import { getSession } from "../../system/session";
import { listEvents, listTasks, type CalEvent, type TaskItem } from "../../system/officeApi";
import { unreadCount } from "../../system/mailApi";
import MailIcon from "/vortexmail.svg";
import CalendarIcon from "/calendar.svg";
import ContactsIcon from "/contacts.svg";
import TasksIcon from "/tasks.svg";

/**
 * The Office hub — a "Today" agenda (today's events, due/overdue tasks, unread mail)
 * over a launcher for VortexMail · Calendar · Contacts · Tasks. The integrated front
 * door to the suite.
 */
const APPS = [
    { exec: "vortexmail", name: "VortexMail", icon: MailIcon },
    { exec: "calendar", name: "Calendar", icon: CalendarIcon },
    { exec: "contacts", name: "Contacts", icon: ContactsIcon },
    { exec: "tasks", name: "Tasks", icon: TasksIcon },
];

const fmtTime = (ms: number) => new Date(ms).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const fmtDay = (ms: number) => new Date(ms).toLocaleDateString([], { month: "short", day: "numeric" });

const Office: React.FC = () => {
    const { addProcess } = useProcessContext();
    const [events, setEvents] = useState<CalEvent[]>([]);
    const [tasks, setTasks] = useState<TaskItem[]>([]);
    const [unread, setUnread] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        setError(false);
        try {
            const now = new Date();
            const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
            const dayEnd = dayStart + 86_400_000;
            const [ev, ts, un] = await Promise.all([listEvents(dayStart, dayEnd), listTasks(), unreadCount()]);
            setEvents(ev);
            setTasks(ts);
            setUnread(un);
        } catch {
            setError(true);
        }
        setLoading(false);
    }, []);

    useEffect(() => { void load(); }, [load]);

    const open = (exec: string, name: string, icon: string) => addProcess({ componentName: exec, name, icon } as never);

    const user = getSession()?.username ?? "there";
    const hour = new Date().getHours();
    const greet = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
    const todayEnd = new Date().setHours(23, 59, 59, 999);
    const dueTasks = tasks.filter((t) => !t.done && t.dueAt != null && t.dueAt <= todayEnd).sort((a, b) => (a.dueAt ?? 0) - (b.dueAt ?? 0));

    const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
        <div style={{ background: "#fff", border: "2px solid", borderColor: "#808080 #ffffff #ffffff #808080", padding: 10, flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: "bold", color: "#000080", marginBottom: 6, borderBottom: "1px solid #ddd", paddingBottom: 3 }}>{title}</div>
            {children}
        </div>
    );

    return (
        <AppShell $minW={520} $minH={400}>
            <MenuBar>
                <Menu label="File"><MenuItem onMouseDown={(e) => { e.preventDefault(); void load(); }}>Refresh</MenuItem></Menu>
                <Menu label="Help"><MenuItem $disabled>Vortex Office — your day at a glance</MenuItem></Menu>
            </MenuBar>
            <AppBody style={{ flexDirection: "column", padding: 12, gap: 12, background: "#d9d6ec", overflow: "auto" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#3a2a6a" }}>{greet}, {user} 👋</div>

                {error ? (
                    <div style={{ color: "#900" }}>Couldn't reach the Office server. Is it running and are you signed in?</div>
                ) : loading ? (
                    <div style={{ color: "#555" }}>Loading your day…</div>
                ) : (
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Card title={`📅 Today's events (${events.length})`}>
                            {events.length === 0 ? <div style={{ color: "#888" }}>Nothing scheduled.</div> : events.map((e) => (
                                <div key={e.id} style={{ display: "flex", justifyContent: "space-between", gap: 8, padding: "2px 0" }}>
                                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.title}</span>
                                    <span style={{ color: "#666", flexShrink: 0 }}>{e.allDay ? "all day" : fmtTime(e.start)}</span>
                                </div>
                            ))}
                        </Card>
                        <Card title={`✅ Due tasks (${dueTasks.length})`}>
                            {dueTasks.length === 0 ? <div style={{ color: "#888" }}>All caught up!</div> : dueTasks.map((t) => {
                                const overdue = (t.dueAt ?? 0) < Date.now();
                                return (
                                    <div key={t.id} style={{ display: "flex", justifyContent: "space-between", gap: 8, padding: "2px 0" }}>
                                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.title}</span>
                                        <span style={{ color: overdue ? "#c0392b" : "#666", flexShrink: 0 }}>{overdue ? "overdue" : fmtDay(t.dueAt!)}</span>
                                    </div>
                                );
                            })}
                        </Card>
                        <Card title="✉ Mail">
                            <div style={{ fontSize: 28, fontWeight: 800, color: unread > 0 ? "#c0392b" : "#2e8b2e" }}>{unread}</div>
                            <div style={{ color: "#666" }}>unread message{unread === 1 ? "" : "s"}</div>
                        </Card>
                    </div>
                )}

                <div>
                    <div style={{ fontWeight: "bold", color: "#3a2a6a", marginBottom: 6 }}>Open an app</div>
                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        {APPS.map((a) => (
                            <button key={a.exec} onClick={() => open(a.exec, a.name, a.icon)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, width: 80, padding: 8, background: "#fff", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", cursor: "pointer" }}>
                                <img src={a.icon} alt="" style={{ width: 36, height: 36 }} />
                                <span style={{ fontSize: 12 }}>{a.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </AppBody>
            <StatusBar><StatusPanel $flex={1}>Vortex Office</StatusPanel><StatusPanel>{events.length} event(s) · {dueTasks.length} due · {unread} unread</StatusPanel></StatusBar>
        </AppShell>
    );
};

export default Office;
