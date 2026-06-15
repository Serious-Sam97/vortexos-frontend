import { useEffect } from "react";
import { subscribeMail } from "../system/chat";
import { notify } from "../system/notifications";
import MailIcon from "/vortexmail.svg";

/**
 * Pops a toast when new mail arrives over the WebSocket (server "mail" frame).
 * Clicking it opens VortexMail. Mounted once on the desktop, like ChatNotifier.
 */
const MailNotifier: React.FC = () => {
    useEffect(
        () =>
            subscribeMail((m) => {
                notify({
                    title: `New mail from ${m.from}`,
                    body: m.subject || "(no subject)",
                    type: "info",
                    icon: MailIcon,
                    action: { kind: "open-app", exec: "vortexmail", name: "VortexMail", icon: MailIcon },
                });
            }),
        [],
    );
    return null;
};

export default MailNotifier;
