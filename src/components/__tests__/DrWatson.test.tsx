import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { DrWatson } from "../DrWatson";
import { getCrashLog } from "../../system/crashlog";

function Boom({ when }: { when: boolean }): React.ReactElement {
    if (when) throw new Error("kaboom");
    return <div>app content</div>;
}

describe("Dr. Watson application error boundary", () => {
    // React logs caught errors to console.error; silence it for clean test output.
    beforeEach(() => vi.spyOn(console, "error").mockImplementation(() => {}));
    afterEach(() => vi.restoreAllMocks());

    it("renders children normally when nothing throws", () => {
        render(
            <DrWatson appName="Notes" pid="abc12345" onClose={() => {}}>
                <Boom when={false} />
            </DrWatson>,
        );
        expect(screen.getByText("app content")).toBeTruthy();
    });

    it("catches a render fault and shows the illegal-operation dialog", () => {
        render(
            <DrWatson appName="Notes" pid="abc12345" onClose={() => {}}>
                <Boom when={true} />
            </DrWatson>,
        );
        expect(screen.getByText(/performed an illegal operation/i)).toBeTruthy();
        expect(screen.queryByText("app content")).toBeNull();
    });

    it("Close terminates the process via onClose", () => {
        const onClose = vi.fn();
        render(
            <DrWatson appName="Notes" pid="abc12345" onClose={onClose}>
                <Boom when={true} />
            </DrWatson>,
        );
        fireEvent.click(screen.getByText("Close"));
        expect(onClose).toHaveBeenCalledOnce();
    });

    it("Details reveals the Dr. Watson fault log", () => {
        render(
            <DrWatson appName="Paint" pid="deadbeef" onClose={() => {}}>
                <Boom when={true} />
            </DrWatson>,
        );
        expect(screen.queryByText(/DR\. WATSON/)).toBeNull();
        fireEvent.click(screen.getByText(/Details/));
        expect(screen.getByText(/DR\. WATSON/)).toBeTruthy();
    });

    it("writes the fault to the crash log", () => {
        render(
            <DrWatson appName="Calculator" pid="cafe0001" onClose={() => {}}>
                <Boom when={true} />
            </DrWatson>,
        );
        const last = getCrashLog().at(-1);
        expect(last?.app).toBe("Calculator");
        expect(last?.message).toBe("kaboom");
        expect(last?.kind).toBe("app");
    });
});
