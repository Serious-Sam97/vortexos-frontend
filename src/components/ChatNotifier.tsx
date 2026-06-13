import { useEffect, useRef } from "react";
import { getChatLog, subscribeChat } from "../system/chat";
import { getWinpopupMode, notify } from "../system/notifications";
import { useDialog } from "./Dialog/DialogProvider";

import WinpopupIcon from "/winpopup.svg";

/**
 * Delivers incoming Net Send messages. Mounted on the desktop so messages reach the user
 * whether or not the Messenger window is open. The delivery style is user-configurable
 * (Control Panel ▸ Sounds & Notifications): a non-blocking toast (default) that opens
 * WinPopup on click, or the classic blocking WinPopup dialog.
 */
const ChatNotifier: React.FC = () => {
    const { alert } = useDialog();
    const seen = useRef(0);

    useEffect(() => {
        seen.current = getChatLog().length; // don't replay history on mount
        return subscribeChat(() => {
            const log = getChatLog();
            for (let i = seen.current; i < log.length; i++) {
                const m = log[i];
                if (m.mine) continue;
                if (getWinpopupMode() === "classic") {
                    alert({ title: `Message from ${m.from}`, message: m.body, type: "info" });
                } else {
                    notify({
                        title: `Message from ${m.from}`,
                        body: m.body,
                        type: "info",
                        icon: WinpopupIcon,
                        action: { kind: "open-app", exec: "messenger", name: "WinPopup", icon: WinpopupIcon },
                    });
                }
            }
            seen.current = log.length;
        });
    }, [alert]);

    return null;
};

export default ChatNotifier;
