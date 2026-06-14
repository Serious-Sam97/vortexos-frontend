import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import ContextMenu, { type CtxItem } from "./ContextMenu";

/**
 * A reusable Cut/Copy/Paste/Delete/Select-All/Undo right-click menu for any text
 * editor — `<input>`, `<textarea>` (controlled), or a `contentEditable` element.
 *
 * Usage:
 *   const { openEditMenu, editMenu } = useEditMenu();
 *   <textarea onContextMenu={openEditMenu} ... />
 *   {editMenu}
 *
 * Pass `extra` to append app-specific items (e.g. a Terminal "Clear").
 */

type Field = HTMLInputElement | HTMLTextAreaElement;
type Editable = Field | HTMLElement;
type SavedSel = { start: number; end: number } | Range | null;

const isField = (el: Editable): el is Field =>
    el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;

/** Set a controlled field's value so React's onChange fires. */
function setFieldValue(el: Field, value: string, caret: number) {
    const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, "value")!.set!.call(el, value);
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.setSelectionRange(caret, caret);
}

function restore(el: Editable, sel: SavedSel) {
    el.focus();
    if (isField(el)) {
        if (sel && "start" in sel) el.setSelectionRange(sel.start, sel.end);
    } else if (sel instanceof Range) {
        const s = window.getSelection();
        s?.removeAllRanges();
        s?.addRange(sel);
    }
}

function selectedText(el: Editable, sel: SavedSel): string {
    if (isField(el) && sel && "start" in sel) return el.value.slice(sel.start, sel.end);
    if (sel instanceof Range) return sel.toString();
    return "";
}

export interface EditMenuOptions {
    extra?: CtxItem[]; // appended after a separator
}

export function useEditMenu(opts: EditMenuOptions = {}) {
    const [menu, setMenu] = useState<{ x: number; y: number; el: Editable } | null>(null);
    const selRef = useRef<SavedSel>(null);

    const openEditMenu = (e: ReactMouseEvent) => {
        e.preventDefault();
        const el = e.currentTarget as unknown as Editable;
        if (isField(el)) {
            selRef.current = { start: el.selectionStart ?? 0, end: el.selectionEnd ?? 0 };
        } else {
            const s = window.getSelection();
            selRef.current = s && s.rangeCount ? s.getRangeAt(0).cloneRange() : null;
        }
        setMenu({ x: e.clientX, y: e.clientY, el });
    };

    // Close on any outside click.
    useEffect(() => {
        if (!menu) return;
        const close = () => setMenu(null);
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, [menu]);

    let editMenu: React.ReactNode = null;
    if (menu) {
        const el = menu.el;
        const sel = selRef.current;
        const hasSel = isField(el)
            ? !!sel && "start" in sel && sel.start !== sel.end
            : sel instanceof Range && !sel.collapsed;
        const editable = isField(el) ? !el.readOnly && !el.disabled : el.isContentEditable;

        const doCopy = () => {
            const text = selectedText(el, sel);
            if (text) void navigator.clipboard?.writeText(text).catch(() => {});
        };
        const doDelete = () => {
            if (isField(el) && sel && "start" in sel) {
                setFieldValue(el, el.value.slice(0, sel.start) + el.value.slice(sel.end), sel.start);
            } else {
                restore(el, sel);
                document.execCommand("delete");
            }
        };
        const doPaste = () => {
            void navigator.clipboard?.readText().then((text) => {
                if (!text) return;
                if (isField(el) && sel && "start" in sel) {
                    const v = el.value.slice(0, sel.start) + text + el.value.slice(sel.end);
                    setFieldValue(el, v, sel.start + text.length);
                } else {
                    restore(el, sel);
                    document.execCommand("insertText", false, text);
                }
            }).catch(() => {});
        };
        const items: CtxItem[] = [
            { label: "Undo", shortcut: "Ctrl+Z", disabled: !editable, onClick: () => { el.focus(); document.execCommand("undo"); } },
            { separator: true },
            { label: "Cut", shortcut: "Ctrl+X", disabled: !hasSel || !editable, onClick: () => { doCopy(); doDelete(); } },
            { label: "Copy", shortcut: "Ctrl+C", disabled: !hasSel, onClick: doCopy },
            { label: "Paste", shortcut: "Ctrl+V", disabled: !editable, onClick: doPaste },
            { label: "Delete", shortcut: "Del", disabled: !hasSel || !editable, onClick: doDelete },
            { separator: true },
            { label: "Select All", shortcut: "Ctrl+A", onClick: () => { el.focus(); if (isField(el)) el.select(); else document.execCommand("selectAll"); } },
            ...(opts.extra?.length ? [{ separator: true } as CtxItem, ...opts.extra] : []),
        ];

        editMenu = <ContextMenu x={menu.x} y={menu.y} items={items} onClose={() => setMenu(null)} />;
    }

    return { openEditMenu, editMenu };
}
