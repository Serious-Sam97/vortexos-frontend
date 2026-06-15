import axios from "axios";

/**
 * Clients for the Office backend (Calendar, Contacts, Tasks). All owner-scoped
 * server-side; the auth token is attached by the global axios interceptor.
 */
const API = import.meta.env.VITE_API_URL ?? "";

/* ----------------------------------------------------------------- Calendar */
export interface CalEvent {
    id: number;
    title: string;
    start: number; // epoch ms
    endAt: number | null;
    allDay: boolean;
    notes: string | null;
    reminderMinutes: number; // -1 = none
}
export interface CalEventInput {
    title: string;
    start: number;
    endAt: number | null;
    allDay: boolean;
    notes: string;
    reminderMinutes: number;
}

export async function listEvents(from?: number, to?: number): Promise<CalEvent[]> {
    const params = from != null && to != null ? { from, to } : undefined;
    const { data } = await axios.get(`${API}/calendar`, { params });
    return Array.isArray(data) ? data : [];
}
export async function createEvent(e: CalEventInput): Promise<CalEvent> {
    const { data } = await axios.post(`${API}/calendar`, e);
    return data;
}
export async function updateEvent(id: number, e: CalEventInput): Promise<CalEvent> {
    const { data } = await axios.put(`${API}/calendar/${id}`, e);
    return data;
}
export async function deleteEvent(id: number): Promise<void> {
    await axios.delete(`${API}/calendar/${id}`);
}

/* ----------------------------------------------------------------- Contacts */
export interface Contact {
    id: number;
    name: string;
    email: string | null;
    phone: string | null;
    notes: string | null;
}
export interface ContactInput {
    name: string;
    email: string;
    phone: string;
    notes: string;
}

export async function listContacts(): Promise<Contact[]> {
    const { data } = await axios.get(`${API}/contacts`);
    return Array.isArray(data) ? data : [];
}
export async function createContact(c: ContactInput): Promise<Contact> {
    const { data } = await axios.post(`${API}/contacts`, c);
    return data;
}
export async function updateContact(id: number, c: ContactInput): Promise<Contact> {
    const { data } = await axios.put(`${API}/contacts/${id}`, c);
    return data;
}
export async function deleteContact(id: number): Promise<void> {
    await axios.delete(`${API}/contacts/${id}`);
}

/* -------------------------------------------------------------------- Tasks */
export interface TaskItem {
    id: number;
    title: string;
    done: boolean;
    dueAt: number | null;
    priority: number; // 0 low · 1 normal · 2 high
    notes: string | null;
    createdAt: number;
}
export interface TaskInput {
    title: string;
    done: boolean;
    dueAt: number | null;
    priority: number;
    notes: string;
}

export async function listTasks(): Promise<TaskItem[]> {
    const { data } = await axios.get(`${API}/tasks`);
    return Array.isArray(data) ? data : [];
}
export async function createTask(t: TaskInput): Promise<TaskItem> {
    const { data } = await axios.post(`${API}/tasks`, t);
    return data;
}
export async function updateTask(id: number, t: TaskInput): Promise<TaskItem> {
    const { data } = await axios.put(`${API}/tasks/${id}`, t);
    return data;
}
export async function deleteTask(id: number): Promise<void> {
    await axios.delete(`${API}/tasks/${id}`);
}
