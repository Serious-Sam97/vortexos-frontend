import React from "react";
import { logCrash } from "../system/crashlog";

/**
 * Dr. Watson — the per-application error boundary. When an app's React subtree throws,
 * the OS doesn't white-screen: this catches it and shows the authentic Windows 9x
 * "This program has performed an illegal operation" dialog inside the offending window,
 * while the desktop and every other window keep running.
 *
 * Close → terminate just this process. Ignore → reset and try to re-render. Details →
 * the Dr. Watson log (stack + process info).
 */
interface Props {
    appName: string;
    pid: string | null;
    onClose: () => void;
    children: React.ReactNode;
}
interface State {
    error: Error | null;
    details: boolean;
    stack: string;
}

export class DrWatson extends React.Component<Props, State> {
    state: State = { error: null, details: false, stack: "" };

    static getDerivedStateFromError(error: Error): Partial<State> {
        return { error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        const stack = `${error.stack ?? error.message}\n\nComponent stack:${info.componentStack ?? ""}`;
        this.setState({ stack });
        logCrash({ app: this.props.appName, pid: this.props.pid, message: error.message, stack });
    }

    render() {
        if (!this.state.error) return this.props.children;
        const { appName } = this.props;
        return (
            <div style={{ padding: 16, background: "#c0c0c0", height: "100%", boxSizing: "border-box", overflow: "auto", color: "#000" }}>
                <div
                    style={{
                        background: "#c0c0c0",
                        border: "2px solid",
                        borderColor: "#ffffff #808080 #808080 #ffffff",
                        boxShadow: "2px 2px 0 rgba(0,0,0,0.4)",
                        maxWidth: 380,
                        margin: "0 auto",
                    }}
                >
                    <div
                        style={{
                            background: "linear-gradient(90deg, #000080, #1084d0)",
                            color: "#fff",
                            fontWeight: "bold",
                            padding: "2px 4px",
                            fontSize: 12,
                        }}
                    >
                        {appName}
                    </div>
                    <div style={{ padding: 14, fontSize: 12, lineHeight: 1.5 }}>
                        <p style={{ margin: 0 }}>
                            This program has performed an illegal operation and will be shut down.
                        </p>
                        <p style={{ margin: "8px 0 0" }}>If the problem persists, contact the program vendor.</p>

                        {this.state.details && (
                            <pre
                                style={{
                                    marginTop: 12,
                                    padding: 8,
                                    background: "#fff",
                                    border: "1px solid #808080",
                                    borderColor: "#808080 #fff #fff #808080",
                                    fontSize: 10,
                                    fontFamily: "monospace",
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                    maxHeight: 160,
                                    overflow: "auto",
                                }}
                            >
                                DR. WATSON — application fault{"\n"}
                                App: {appName}  PID: {this.props.pid?.slice(0, 8) ?? "—"}
                                {"\n"}
                                {this.state.error.message}
                                {"\n\n"}
                                {this.state.stack}
                            </pre>
                        )}

                        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 16 }}>
                            <DialogButton onClick={this.props.onClose}>Close</DialogButton>
                            <DialogButton onClick={() => this.setState({ error: null, details: false })}>Ignore</DialogButton>
                            <DialogButton onClick={() => this.setState((s) => ({ details: !s.details }))}>
                                Details {this.state.details ? "<<" : ">>"}
                            </DialogButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const DialogButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        style={{
            minWidth: 75,
            height: 23,
            fontSize: 12,
            background: "#c0c0c0",
            border: "2px solid",
            borderColor: "#ffffff #808080 #808080 #ffffff",
            cursor: "pointer",
        }}
        onMouseDown={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#808080 #ffffff #ffffff #808080";
        }}
        onMouseUp={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#ffffff #808080 #808080 #ffffff";
        }}
    >
        {children}
    </button>
);

export default DrWatson;
