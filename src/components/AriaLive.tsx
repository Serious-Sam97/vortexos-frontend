import { useEffect, useRef, useState } from "react";
import { subscribeNotifications, getNotificationHistory } from "../system/notifications";

/**
 * A polite ARIA live region: every new toast/notification is mirrored here so
 * screen readers announce it (toasts are otherwise purely visual). Visually
 * hidden via .sr-only.
 */
const AriaLive: React.FC = () => {
    const [msg, setMsg] = useState("");
    const lastId = useRef<number | null>(null);

    useEffect(() => {
        const update = () => {
            const history = getNotificationHistory();
            const latest = history[history.length - 1];
            if (latest && latest.id !== lastId.current) {
                lastId.current = latest.id;
                setMsg(`${latest.title}. ${latest.body}`);
            }
        };
        update();
        return subscribeNotifications(update);
    }, []);

    return (
        <div className="sr-only" aria-live="polite" aria-atomic="true" role="status">
            {msg}
        </div>
    );
};

export default AriaLive;
