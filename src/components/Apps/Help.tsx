import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { VortexLogo } from "../VortexLogo";
import { openWelcome, openTips } from "../../system/welcome";
import { setAssistantEnabled } from "../../system/assistant";

const Help: React.FC = () => (
    <AppShell $minW={460} $minH={380}>
        <MenuBar>
            <Menu label="File"><MenuItem $disabled>Print Topic</MenuItem></Menu>
            <Menu label="Help">
                <MenuItem onClick={openWelcome}>Welcome Tour…</MenuItem>
                <MenuItem onClick={openTips}>Tip of the Day…</MenuItem>
                <MenuItem onClick={() => setAssistantEnabled(true)}>Show Vortex Assistant</MenuItem>
            </Menu>
        </MenuBar>
        <AppBody style={{ padding: 3 }}>
        <div style={{ flex: 1, minHeight: 0, overflow: "auto", background: "#fff", padding: 16, lineHeight: 1.6, border: "2px solid", borderColor: "#808080 #ffffff #ffffff #808080" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <VortexLogo size={48} vapor spinning={false} />
                <div>
                    <div style={{ fontSize: 20, fontWeight: "bold" }}>VortexOS 2.0</div>
                    <div style={{ fontSize: 12, color: "#444" }}>Experimental Edition — a creation by Serious Sam</div>
                </div>
            </div>

            <p style={{ fontWeight: "bold" }}>About</p>
            <p>
                VortexOS is a desktop operating system that runs in your browser, built on a real microkernel: an
                in-memory virtual filesystem persisted to OPFS, a process model with a syscall ABI, a command shell, a
                window manager, and multi-user networking. No emulator, no clone.
            </p>

            <p style={{ fontWeight: "bold", marginTop: 12 }}>Getting started</p>
            <ul style={{ margin: "4px 0 0 18px" }}>
                <li><b>Command Palette</b> — press <code>Ctrl+Space</code> to fuzzy-launch any app or action.</li>
                <li><b>Explorer</b> &amp; <b>Terminal</b> — browse a real filesystem, or type <code>ls</code>, <code>cat</code>, <code>ps</code>, even <code>.sh</code> scripts.</li>
                <li><b>Notes</b>, <b>WordPad</b>, <b>Paint</b>, <b>Calculator</b> — real apps that save real files.</li>
                <li><b>Games</b> — Solitaire, FreeCell, Minesweeper and Snake, with per-user high scores.</li>
                <li><b>Network Neighborhood</b> &amp; <b>WinPopup</b> — share files and chat with other users.</li>
                <li><b>Control Panel</b> — wallpaper, themes, screensavers, and the Serious Sam Style toggle.</li>
                <li>Drag desktop icons anywhere; deleted files go to the <b>Recycle Bin</b>.</li>
            </ul>

            <p style={{ marginTop: 12 }}>
                New here? Open <b>Help ▸ Welcome Tour</b> for the guided introduction, or <b>Tip of the Day</b> for a
                quick hint.
            </p>

            <p style={{ marginTop: 12, color: "#444", fontSize: 12 }}>Registered to: Serious Sam</p>
        </div>
        </AppBody>
        <StatusBar>
            <StatusPanel $flex={1}>VortexOS Help</StatusPanel>
        </StatusBar>
    </AppShell>
);

export default Help;
