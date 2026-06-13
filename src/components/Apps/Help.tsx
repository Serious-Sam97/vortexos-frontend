import { Frame, WindowContent } from "react95";
import w95 from "/w95.png";

const Help: React.FC = () => (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 440, minHeight: 360 }}>
        <WindowContent style={{ flex: 1, minHeight: 0, overflow: "auto", background: "#fff", padding: 16, lineHeight: 1.6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <img src={w95} alt="" style={{ height: 40 }} />
                <div>
                    <div style={{ fontSize: 20, fontWeight: "bold" }}>VortexOS 2.0</div>
                    <div style={{ fontSize: 12, color: "#444" }}>An experimental Windows 95 simulation</div>
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
        </WindowContent>
        <Frame variant="well" className="footer">
            VortexOS Help
        </Frame>
    </div>
);

export default Help;
