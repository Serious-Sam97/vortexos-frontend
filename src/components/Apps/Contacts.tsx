import { useCallback, useEffect, useState } from "react";
import { Button } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useDialog } from "../Dialog/DialogProvider";
import { useProcessContext } from "../../contexts/ProcessContext";
import { notify } from "../../system/notifications";
import MailIcon from "/vortexmail.svg";
import {
    listContacts, createContact, updateContact, deleteContact,
    type Contact, type ContactInput,
} from "../../system/officeApi";

interface EditForm {
    id: number | null; // null = new contact
    name: string;
    email: string;
    phone: string;
    notes: string;
}

const blankForm = (): EditForm => ({ id: null, name: "", email: "", phone: "", notes: "" });

const formFromContact = (c: Contact): EditForm => ({
    id: c.id,
    name: c.name,
    email: c.email ?? "",
    phone: c.phone ?? "",
    notes: c.notes ?? "",
});

const Contacts: React.FC = () => {
    const { alert, confirm } = useDialog();
    const { addProcess } = useProcessContext();

    // Cross-app: open VortexMail composing to this contact (its email = Vortex handle).
    const mailTo = (recipient: string) => {
        if (!recipient.trim()) {
            void alert({ title: "Send Mail", message: "This contact has no email/handle to mail.", type: "warning" });
            return;
        }
        addProcess({ componentName: "vortexmail", name: "VortexMail", icon: MailIcon, argv: [recipient.trim()] } as never);
    };
    const [list, setList] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [form, setForm] = useState<EditForm | null>(null);

    const load = useCallback(async () => {
        setError(null);
        setLoading(true);
        try {
            setList(await listContacts());
        } catch {
            setError("Couldn't reach Contacts. Is the server running and are you signed in?");
            setList([]);
        }
        setLoading(false);
    }, []);

    useEffect(() => { void load(); }, [load]);

    const selectContact = (c: Contact) => {
        setSelectedId(c.id);
        setForm(formFromContact(c));
    };

    const startNew = () => {
        setSelectedId(null);
        setForm(blankForm());
    };

    const save = async () => {
        if (!form) return;
        if (!form.name.trim()) {
            await alert({ title: "Contacts", message: "Please enter a name.", type: "warning" });
            return;
        }
        const input: ContactInput = {
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            notes: form.notes,
        };
        try {
            if (form.id == null) {
                const created = await createContact(input);
                setSelectedId(created.id);
                setForm(formFromContact(created));
            } else {
                const updated = await updateContact(form.id, input);
                setForm(formFromContact(updated));
            }
            notify({ title: "Contacts", body: "Contact saved", type: "info" });
            void load();
        } catch (e: any) {
            await alert({ title: "Save failed", message: String(e?.message ?? e), type: "error" });
        }
    };

    const remove = async () => {
        if (!form || form.id == null) return;
        if (!(await confirm({ title: "Delete", message: `Delete "${form.name}"?` }))) return;
        try {
            await deleteContact(form.id);
            setSelectedId(null);
            setForm(null);
            notify({ title: "Contacts", body: "Contact deleted", type: "info" });
            void load();
        } catch (e: any) {
            await alert({ title: "Delete failed", message: String(e?.message ?? e), type: "error" });
        }
    };

    const fieldRow = (label: string, node: React.ReactNode) => (
        <label style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <span style={{ width: 64, flexShrink: 0, paddingTop: 4 }}>{label}</span>
            {node}
        </label>
    );

    return (
        <AppShell $minW={480} $minH={340}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); startNew(); }}>New</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); void load(); }}>Refresh</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Contacts — your address book</MenuItem></Menu>
            </MenuBar>
            <Toolbar>
                <ToolButton onClick={startNew}>👤 New</ToolButton>
                <ToolSep />
                <ToolButton onClick={() => void load()}>⟳ Refresh</ToolButton>
            </Toolbar>
            <AppBody style={{ padding: 0 }}>
                {/* contact list */}
                <div style={{ width: 176, flexShrink: 0, overflow: "auto", background: "#fff", borderRight: "2px solid #808080" }}>
                    {loading ? (
                        <div style={{ padding: 16, color: "#888" }}>Loading…</div>
                    ) : error ? (
                        <div style={{ padding: 16, color: "#900" }}>{error}</div>
                    ) : list.length === 0 ? (
                        <div style={{ padding: 16, color: "#888" }}>No contacts yet.</div>
                    ) : (
                        list.map((c) => (
                            <div
                                key={c.id}
                                onClick={() => selectContact(c)}
                                style={{
                                    padding: "6px 10px",
                                    cursor: "pointer",
                                    borderBottom: "1px solid #eee",
                                    background: selectedId === c.id ? "#000080" : "transparent",
                                    color: selectedId === c.id ? "#fff" : "#000",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                👤 {c.name}
                            </div>
                        ))
                    )}
                </div>
                {/* detail / edit pane */}
                <div style={{ flex: 1, minWidth: 0, overflow: "auto", background: "#fff", padding: 12 }}>
                    {form ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <div style={{ fontSize: 15, fontWeight: "bold", marginBottom: 4 }}>
                                {form.id == null ? "New Contact" : form.name || "(unnamed)"}
                            </div>
                            {fieldRow("Name:", (
                                <input
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Required"
                                    style={{ flex: 1 }}
                                />
                            ))}
                            {fieldRow("Email:", (
                                <input
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    style={{ flex: 1 }}
                                />
                            ))}
                            {fieldRow("Phone:", (
                                <input
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    style={{ flex: 1 }}
                                />
                            ))}
                            {fieldRow("Notes:", (
                                <textarea
                                    value={form.notes}
                                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                                    style={{ flex: 1, minHeight: 90, resize: "vertical", fontFamily: "inherit", fontSize: 13, padding: 6 }}
                                />
                            ))}
                            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                                <Button onClick={save}>💾 Save</Button>
                                {form.id != null && <Button onClick={() => mailTo(form.email)}>✉ Send Mail</Button>}
                                {form.id != null && <Button onClick={remove}>🗑 Delete</Button>}
                            </div>
                        </div>
                    ) : (
                        <div style={{ color: "#aaa", textAlign: "center", marginTop: 30 }}>Select a contact, or click New.</div>
                    )}
                </div>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>Contacts</StatusPanel>
                <StatusPanel>{list.length} contact{list.length === 1 ? "" : "s"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Contacts;
