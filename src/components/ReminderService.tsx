import { useEffect } from "react";
import { listEvents, type CalEvent } from "../system/officeApi";
import { notify } from "../system/notifications";
import CalendarIcon from "/calendar.svg";

/**
 * Calendar reminders. Polls upcoming events every 30s and fires a desktop
 * notification when an event's reminder time arrives (reminderMinutes before its
 * start). Already-fired event ids are remembered so a reminder only pings once.
 * Mounted once on the desktop.
 */
const FIRED_KEY = "vortex.reminders.fired";

const ReminderService: React.FC = () => {
    useEffect(() => {
        let fired: Set<number>;
        try {
            fired = new Set(JSON.parse(localStorage.getItem(FIRED_KEY) || "[]"));
        } catch {
            fired = new Set();
        }
        let stopped = false;

        const check = async () => {
            const now = Date.now();
            let events: CalEvent[] = [];
            try {
                events = await listEvents(now - 60_000, now + 26 * 3_600_000);
            } catch {
                return; // offline / signed out — try again next tick
            }
            for (const e of events) {
                if (e.reminderMinutes < 0 || fired.has(e.id)) continue;
                const remindAt = e.start - e.reminderMinutes * 60_000;
                // Fire once the reminder time has passed but the event hasn't long gone.
                if (now >= remindAt && now <= e.start + 60_000) {
                    fired.add(e.id);
                    if (!stopped) localStorage.setItem(FIRED_KEY, JSON.stringify([...fired]));
                    const when = e.reminderMinutes === 0 ? "now" : `in ${e.reminderMinutes} min`;
                    notify({
                        title: "📅 Reminder",
                        body: `${e.title} — ${when}`,
                        type: "warning",
                        icon: CalendarIcon,
                        action: { kind: "open-app", exec: "calendar", name: "Calendar", icon: CalendarIcon },
                    });
                }
            }
        };

        void check();
        const iv = setInterval(check, 30_000);
        return () => {
            stopped = true;
            clearInterval(iv);
        };
    }, []);

    return null;
};

export default ReminderService;
