import { beforeEach, describe, expect, it } from "vitest";
import {
    notify,
    dismissToast,
    clearHistory,
    getActiveToasts,
    getNotificationHistory,
    getWinpopupMode,
    setWinpopupMode,
} from "../notifications";

describe("notifications store", () => {
    beforeEach(() => {
        clearHistory();
        getActiveToasts().forEach((t) => dismissToast(t.id));
        localStorage.clear();
    });

    it("raises a toast into both active and history", () => {
        const id = notify({ title: "Hi", body: "there", type: "info" });
        expect(getActiveToasts().map((t) => t.id)).toContain(id);
        expect(getNotificationHistory().map((t) => t.id)).toContain(id);
    });

    it("dismiss removes from active but keeps history", () => {
        const id = notify({ title: "Keep", body: "me", type: "warning" });
        dismissToast(id);
        expect(getActiveToasts().map((t) => t.id)).not.toContain(id);
        expect(getNotificationHistory().map((t) => t.id)).toContain(id);
    });

    it("clearHistory empties the center", () => {
        notify({ title: "a", body: "b", type: "info" });
        clearHistory();
        expect(getNotificationHistory()).toHaveLength(0);
    });

    it("WinPopup mode defaults to toast and persists", () => {
        expect(getWinpopupMode()).toBe("toast");
        setWinpopupMode("classic");
        expect(getWinpopupMode()).toBe("classic");
        expect(localStorage.getItem("vortex.notify.winpopup")).toBe("classic");
    });
});
