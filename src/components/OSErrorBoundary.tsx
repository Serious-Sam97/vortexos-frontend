import React from "react";
import { useKernel } from "../kernel/react/KernelProvider";

/**
 * The OS-chrome safety net. If the desktop shell itself (Desktop / WindowManager / taskbar)
 * throws during render — not an app, which Dr. Watson handles — this catches it and raises a
 * non-recoverable kernel panic, so the user sees the Blue Screen of Death instead of a blank
 * white page. Recovery from a dead chrome subtree is a reboot.
 */
class Inner extends React.Component<{ onFatal: (e: Error, stack: string) => void; children: React.ReactNode }, { dead: boolean }> {
    state = { dead: false };
    static getDerivedStateFromError(): { dead: boolean } {
        return { dead: true };
    }
    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        this.props.onFatal(error, `${error.stack ?? error.message}\n${info.componentStack ?? ""}`);
    }
    render() {
        // When dead, render nothing — the BSOD overlay (driven by the panic state) covers the screen.
        return this.state.dead ? null : this.props.children;
    }
}

const OSErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const kernel = useKernel();
    return (
        <Inner onFatal={(e, stack) => kernel.panic({ message: e.message, stack, recoverable: false })}>
            {children}
        </Inner>
    );
};

export default OSErrorBoundary;
