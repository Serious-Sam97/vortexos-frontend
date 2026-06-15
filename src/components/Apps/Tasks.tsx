import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Checkbox } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, Toolbar, ToolButton, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useDialog } from "../Dialog/DialogProvider";
import { notify } from "../../system/notifications";
import { listTasks, createTask, updateTask, deleteTask, type TaskItem } from "../../system/officeApi";

const PRIORITIES = [
    { value: 0, label: "Low" },
    { value: 1, label: "Normal" },
    { value: 2, label: "High" },
];

const PRIORITY_BADGE: Record<number, { label: string; color: string }> = {
    2: { label: "High", color: "#d40000" },
    1: { label: "Normal", color: "#0050c0" },
    0: { label: "Low", color: "#808080" },
};

const fmtDue = (ms: number) => "Due " + new Date(ms).toLocaleDateString([], { month: "short", day: "numeric" });

// Sort: not-done first, then higher priority, then sooner dueAt (nulls last), then newest createdAt.
const sortTasks = (a: TaskItem, b: TaskItem): number => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    if (a.priority !== b.priority) return b.priority - a.priority;
    if (a.dueAt !== b.dueAt) {
        if (a.dueAt == null) return 1;
        if (b.dueAt == null) return -1;
        return a.dueAt - b.dueAt;
    }
    return b.createdAt - a.createdAt;
};

const Tasks: React.FC = () => {
    const { confirm } = useDialog();
    const [tasks, setTasks] = useState<TaskItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [title, setTitle] = useState("");
    const [due, setDue] = useState("");
    const [priority, setPriority] = useState(1);
    const titleRef = useRef<HTMLInputElement>(null);

    const load = useCallback(async () => {
        setError(null);
        setLoading(true);
        try {
            setTasks(await listTasks());
        } catch {
            setError("Couldn't reach Tasks. Is the server running and are you signed in?");
            setTasks([]);
        }
        setLoading(false);
    }, []);

    useEffect(() => { void load(); }, [load]);

    const addTask = async () => {
        const t = title.trim();
        if (!t) return;
        try {
            await createTask({
                title: t,
                done: false,
                dueAt: due ? Date.parse(due) : null,
                priority,
                notes: "",
            });
            setTitle("");
            setDue("");
            setPriority(1);
            await load();
        } catch {
            notify({ title: "Tasks", body: "Couldn't add the task.", type: "error" });
        }
    };

    const toggleDone = async (task: TaskItem) => {
        try {
            await updateTask(task.id, {
                title: task.title,
                done: !task.done,
                dueAt: task.dueAt,
                priority: task.priority,
                notes: task.notes ?? "",
            });
            await load();
        } catch {
            notify({ title: "Tasks", body: "Couldn't update the task.", type: "error" });
        }
    };

    const removeTask = async (task: TaskItem) => {
        if (!(await confirm({ title: "Delete Task", message: `Delete "${task.title}"?` }))) return;
        try {
            await deleteTask(task.id);
            await load();
        } catch {
            notify({ title: "Tasks", body: "Couldn't delete the task.", type: "error" });
        }
    };

    const focusTitle = () => titleRef.current?.focus();

    const sorted = [...tasks].sort(sortTasks);
    const openCount = tasks.filter((t) => !t.done).length;
    const now = Date.now();

    return (
        <AppShell $minW={420} $minH={340}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); focusTitle(); }}>New</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); void load(); }}>Refresh</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Tasks — your to-do list</MenuItem></Menu>
            </MenuBar>
            <Toolbar>
                <ToolButton onClick={() => void load()}>⟳ Refresh</ToolButton>
            </Toolbar>
            <AppBody style={{ flexDirection: "column", padding: 0, background: "#fff" }}>
                {/* New Task row */}
                <div style={{ display: "flex", gap: 6, alignItems: "center", padding: 8, background: "#e7e7ee", borderBottom: "2px solid #808080", flexWrap: "wrap" }}>
                    <input
                        ref={titleRef}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); void addTask(); } }}
                        placeholder="New task…"
                        style={{ flex: 1, minWidth: 120 }}
                    />
                    <input type="date" value={due} onChange={(e) => setDue(e.target.value)} />
                    <select value={priority} onChange={(e) => setPriority(Number(e.target.value))}>
                        {PRIORITIES.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                    </select>
                    <Button onClick={() => void addTask()}>➕ Add</Button>
                </div>

                {/* Task list */}
                <div style={{ flex: 1, minHeight: 0, overflow: "auto" }}>
                    {loading ? (
                        <div style={{ padding: 16, color: "#888" }}>Loading…</div>
                    ) : error ? (
                        <div style={{ padding: 16, color: "#900" }}>{error}</div>
                    ) : sorted.length === 0 ? (
                        <div style={{ padding: 16, color: "#888" }}>No tasks yet. Add one above.</div>
                    ) : (
                        sorted.map((task) => {
                            const badge = PRIORITY_BADGE[task.priority];
                            const overdue = task.dueAt != null && task.dueAt < now && !task.done;
                            return (
                                <div
                                    key={task.id}
                                    style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderBottom: "1px solid #eee" }}
                                >
                                    <Checkbox checked={task.done} onChange={() => void toggleDone(task)} />
                                    <span
                                        style={{
                                            flex: 1,
                                            minWidth: 0,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            textDecoration: task.done ? "line-through" : "none",
                                            color: task.done ? "#999" : "#000",
                                        }}
                                    >
                                        {task.title}
                                    </span>
                                    {task.priority !== 0 && badge && (
                                        <span style={{ background: badge.color, color: "#fff", borderRadius: 3, padding: "0 6px", fontSize: 11, flexShrink: 0 }}>
                                            {badge.label}
                                        </span>
                                    )}
                                    {task.dueAt != null && (
                                        <span style={{ fontSize: 11, color: overdue ? "#d40000" : "#666", flexShrink: 0 }}>
                                            {fmtDue(task.dueAt)}
                                        </span>
                                    )}
                                    <Button size="sm" onClick={() => void removeTask(task)}>🗑</Button>
                                </div>
                            );
                        })
                    )}
                </div>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>{openCount} open</StatusPanel>
                <StatusPanel>{tasks.length} task{tasks.length === 1 ? "" : "s"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Tasks;
