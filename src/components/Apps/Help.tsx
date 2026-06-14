import w95 from "/w95.png";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";

const Help: React.FC = () => (
    <AppShell $minW={440} $minH={360}>
        <MenuBar>
            <Menu label="File"><MenuItem $disabled>Print Topic</MenuItem></Menu>
            <Menu label="Help"><MenuItem $disabled>About VortexOS</MenuItem></Menu>
        </MenuBar>
        <AppBody style={{ padding: 3 }}>
        <div style={{ flex: 1, minHeight: 0, overflow: "auto", background: "#fff", padding: 16, lineHeight: 1.6, border: "2px solid", borderColor: "#808080 #ffffff #ffffff #808080" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <img src={w95} alt="" style={{ height: 40 }} />
                <div>
                    <div style={{ fontSize: 20, fontWeight: "bold" }}>VortexOS 2.0</div>
                    <div style={{ fontSize: 12, color: "#444" }}>An experimental Windows 98 simulation</div>
                </div>
            </div>

            <p style={{ fontWeight: "bold" }}>About</p>
            <p>
                VortexOS is a desktop operating system that runs in your browser, built on a real microkernel: an in-memory
                virtual filesystem, a process model, a command shell, and a window manager.
            </p>

            <p style={{ fontWeight: "bold", marginTop: 12 }}>Getting started</p>
            <ul style={{ margin: "4px 0 0 18px" }}>
                <li><b>Explorer</b> — browse, create, rename, and delete files; right-click for the menu.</li>
                <li><b>Terminal</b> — type <code>help</code> for commands, or <code>ls</code>, <code>cat</code>, <code>ps</code>.</li>
                <li><b>Notes</b> &amp; <b>Paint</b> — create real files saved to the filesystem.</li>
                <li><b>Find</b> — search the filesystem from the Start menu.</li>
                <li><b>Control Panel</b> — change the wallpaper, sound volume, and the CRT effect.</li>
                <li>Drag desktop icons anywhere; deleted files go to the <b>Recycle Bin</b>.</li>
            </ul>

            <p style={{ marginTop: 12, color: "#444", fontSize: 12 }}>Registered to: Serious Sam</p>
        </div>
        </AppBody>
        <StatusBar>
            <StatusPanel $flex={1}>VortexOS Help</StatusPanel>
        </StatusBar>
    </AppShell>
);

export default Help;
