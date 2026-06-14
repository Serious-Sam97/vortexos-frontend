import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSys } from "../../kernel/react/useSys";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { basename } from "../../kernel/fs/path";

/**
 * Document Viewer — renders PDFs (and other browser-native docs) by handing the
 * file's bytes to the browser's built-in viewer via a blob URL. No PDF library.
 */
const Frame = styled.iframe`
    flex: 1;
    min-height: 320px;
    width: 100%;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    background: #525659;
`;
const Empty = styled.div`
    flex: 1;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #555;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`;

const TYPES: Record<string, string> = {
    pdf: "application/pdf",
    html: "text/html",
    htm: "text/html",
    txt: "text/plain",
};

const DocViewer: React.FC = () => {
    const sys = useSys();
    const [url, setUrl] = useState<string | null>(null);
    const [name, setName] = useState<string>("");
    const [status, setStatus] = useState("No document");

    useEffect(() => {
        let revoke: string | null = null;
        (async () => {
            const [arg] = await sys.argv();
            if (!arg) return;
            try {
                const bytes = await sys.readFile(arg);
                const ext = arg.split(".").pop()?.toLowerCase() ?? "";
                const blob = new Blob([bytes], { type: TYPES[ext] ?? "application/octet-stream" });
                const u = URL.createObjectURL(blob);
                revoke = u;
                setUrl(u);
                setName(basename(arg));
                setStatus(`${basename(arg)} — ${(bytes.length / 1024).toFixed(1)} KB`);
            } catch (e: any) {
                setStatus(`Could not open: ${e.code ?? e.message}`);
            }
        })();
        return () => {
            if (revoke) URL.revokeObjectURL(revoke);
        };
    }, [sys]);

    return (
        <AppShell $minW={520} $minH={420}>
            <MenuBar>
                <Menu label="File"><MenuItem $disabled>Open from Explorer</MenuItem></Menu>
                <Menu label="Help"><MenuItem $disabled>Document Viewer — VortexOS</MenuItem></Menu>
            </MenuBar>
            <AppBody style={{ padding: 3 }}>
                {url ? (
                    <Frame src={url} title={name} />
                ) : (
                    <Empty>
                        <div style={{ fontSize: 40 }}>📄</div>
                        <div>Open a PDF or document from Explorer to view it here.</div>
                    </Empty>
                )}
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>{name || "Document Viewer"}</StatusPanel>
                <StatusPanel>{status}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default DocViewer;
