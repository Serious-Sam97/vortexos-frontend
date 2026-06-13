import { useEffect, useRef } from "react";
import { getChatLog, subscribeChat } from "../system/chat";
import { useDialog } from "./Dialog/DialogProvider";

/**
 * Pops a WinPopup-style dialog for each incoming Net Send message. Mounted on the desktop so
 * messages reach the user whether or not the Messenger window is open.
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
                if (!m.mine) alert({ title: `Message from ${m.from}`, message: m.body, type: "info" });
            }
            seen.current = log.length;
        });
    }, [alert]);

    return null;
};

export default ChatNotifier;
