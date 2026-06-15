import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useSettings } from "../system/settings";
import { useViewport, useMobileShell, taskbarHeight } from "../system/viewport";
import { useOskVisible, setOskVisible } from "../system/osk";
import { playClick } from "../system/sounds";

/**
 * VortexOS On-Screen Keyboard — a Win-style touch keyboard. Auto-pops for text
 * fields on the touch shell (policy in settings.osk), or pin it from the tray.
 * Keys preventDefault on pointer-down so the focused field never blurs, then
 * type into it via the same controlled-input path the edit menus use
 * (native value setter + input event for input/textarea; execCommand for
 * contentEditable). No native keyboard fights it: focused fields get
 * inputmode="none" while the OSK is the active input method.
 */

const Panel = styled.div<{ $bottom: number }>`
    position: fixed;
    left: 0;
    right: 0;
    bottom: ${({ $bottom }) => $bottom}px;
    z-index: 1000004;
    background: #c0c0c0;
    border-top: 2px solid #ffffff;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.35);
    padding: 6px;
    padding-bottom: calc(6px + env(safe-area-inset-bottom, 0px));
    display: flex;
    flex-direction: column;
    gap: 5px;
    user-select: none;
    touch-action: none;
`;

const Row = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
`;

const Key = styled.button<{ $flex?: number; $active?: boolean }>`
    flex: ${({ $flex }) => $flex ?? 1} 1 0;
    min-width: 0;
    height: var(--osk-key-h, 42px);
    font-family: "ms_sans_serif", "MS Sans Serif", sans-serif;
    font-size: 15px;
    color: #000;
    background: ${({ $active }) => ($active ? "#000080" : "#c0c0c0")};
    ${({ $active }) => ($active ? "color: #fff;" : "")}
    border: 2px solid;
    border-color: ${({ $active }) => ($active ? "#808080 #ffffff #ffffff #808080" : "#ffffff #808080 #808080 #ffffff")};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
        border-color: #808080 #ffffff #ffffff #808080;
    }
`;

const LETTERS = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
];
const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const SYMBOLS = [
    ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
    ["-", "_", "=", "+", "[", "]", "{", "}", ";", ":"],
    ["'", '"', "/", "\\", "|", "<", ">", "?", "~", "`"],
];

function isEditable(el: EventTarget | null): el is HTMLElement {
    if (!el || !(el instanceof HTMLElement)) return false;
    if (el.tagName === "TEXTAREA") return true;
    if (el.tagName === "INPUT") {
        const t = (el as HTMLInputElement).type;
        return ["text", "search", "url", "email", "tel", "password", "number", ""].includes(t);
    }
    return el.isContentEditable;
}

function insertText(el: HTMLElement, text: string) {
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
        const start = el.selectionStart ?? el.value.length;
        const end = el.selectionEnd ?? el.value.length;
        const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        const setter = Object.getOwnPropertyDescriptor(proto, "value")!.set!;
        setter.call(el, el.value.slice(0, start) + text + el.value.slice(end));
        const caret = start + text.length;
        el.setSelectionRange?.(caret, caret);
        el.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
        el.focus();
        document.execCommand("insertText", false, text);
    }
}

function backspace(el: HTMLElement) {
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
        const start = el.selectionStart ?? 0;
        const end = el.selectionEnd ?? 0;
        const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        const setter = Object.getOwnPropertyDescriptor(proto, "value")!.set!;
        if (start === end) {
            if (start === 0) return;
            setter.call(el, el.value.slice(0, start - 1) + el.value.slice(end));
            el.setSelectionRange?.(start - 1, start - 1);
        } else {
            setter.call(el, el.value.slice(0, start) + el.value.slice(end));
            el.setSelectionRange?.(start, start);
        }
        el.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
        el.focus();
        document.execCommand("delete");
    }
}

function pressEnter(el: HTMLElement) {
    if (el instanceof HTMLTextAreaElement) {
        insertText(el, "\n");
    } else if (el.isContentEditable) {
        el.focus();
        document.execCommand("insertParagraph");
    } else {
        // single-line input → fire Enter so Terminal/Run/search forms submit
        el.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", bubbles: true, cancelable: true }));
        el.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter", code: "Enter", bubbles: true }));
    }
}

const OnScreenKeyboard: React.FC = () => {
    const settings = useSettings();
    const mobile = useMobileShell();
    const vp = useViewport();
    const coarse = vp.coarse;
    const visible = useOskVisible();
    const policy = settings.osk;
    // Shorter keys on a short (landscape phone) viewport so the keyboard doesn't eat the screen.
    const keyH = vp.height < 520 ? "34px" : "42px";

    const [shift, setShift] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const target = useRef<HTMLElement | null>(null);

    const autoEligible = policy === "on" || (policy === "auto" && (mobile || coarse));

    // Lift the focused field above the keyboard so it's never hidden behind it.
    const scrollTargetIntoView = () => {
        const t = target.current;
        if (!t) return;
        window.setTimeout(() => {
            const r = t.getBoundingClientRect();
            const kbTop = window.innerHeight * 0.5; // the keyboard occupies roughly the lower half
            if (r.bottom > kbTop) t.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 60);
    };

    // Pin/unpin based on the policy.
    useEffect(() => {
        if (policy === "on") setOskVisible(true);
        if (policy === "off") setOskVisible(false);
    }, [policy]);

    // When the keyboard appears, make sure the focused field is visible above it.
    useEffect(() => {
        if (visible) scrollTargetIntoView();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    // Track the focused editable; auto-show on the touch shell, auto-hide on blur.
    useEffect(() => {
        if (policy === "off") return;
        const onFocusIn = (e: FocusEvent) => {
            if (!isEditable(e.target)) return;
            target.current = e.target;
            if (autoEligible) {
                e.target.setAttribute("inputmode", "none"); // suppress the device keyboard
                if (policy !== "on") setOskVisible(true);
                scrollTargetIntoView();
            }
        };
        const onFocusOut = (e: FocusEvent) => {
            (e.target as HTMLElement | null)?.removeAttribute?.("inputmode");
            if (policy === "on") return; // pinned open
            window.setTimeout(() => {
                if (!isEditable(document.activeElement)) setOskVisible(false);
            }, 120);
        };
        document.addEventListener("focusin", onFocusIn);
        document.addEventListener("focusout", onFocusOut);
        return () => {
            document.removeEventListener("focusin", onFocusIn);
            document.removeEventListener("focusout", onFocusOut);
        };
    }, [policy, autoEligible]);

    if (!visible) return null;

    const el = () => {
        const a = document.activeElement as HTMLElement | null;
        return isEditable(a) ? a : target.current;
    };
    const withTarget = (fn: (el: HTMLElement) => void) => {
        const t = el();
        if (t) fn(t);
        playClick();
    };
    const tap = (ch: string) => withTarget((t) => insertText(t, shift ? ch.toUpperCase() : ch));

    // Stop pointer-down from blurring the focused field (keeps the caret put).
    const keep = (e: React.PointerEvent | React.MouseEvent) => e.preventDefault();

    const letterRows = symbols ? SYMBOLS : LETTERS;

    return createPortal(
        <Panel $bottom={taskbarHeight(mobile)} style={{ ["--osk-key-h" as string]: keyH } as React.CSSProperties} onPointerDown={keep} role="group" aria-label="On-Screen Keyboard">
            <Row>
                {NUMS.map((n) => (
                    <Key key={n} onPointerDown={keep} onClick={() => tap(n)} aria-label={n}>
                        {n}
                    </Key>
                ))}
                <Key $flex={1.6} onPointerDown={keep} onClick={() => withTarget(backspace)} aria-label="Backspace">
                    ⌫
                </Key>
            </Row>
            {letterRows.map((row, i) => (
                <Row key={i}>
                    {i === letterRows.length - 1 && (
                        <Key
                            $flex={1.6}
                            $active={shift}
                            onPointerDown={keep}
                            onClick={() => setShift((s) => !s)}
                            aria-label="Shift"
                            aria-pressed={shift}
                        >
                            ⇧
                        </Key>
                    )}
                    {row.map((ch) => (
                        <Key key={ch} onPointerDown={keep} onClick={() => tap(ch)} aria-label={ch}>
                            {shift && !symbols ? ch.toUpperCase() : ch}
                        </Key>
                    ))}
                    {i === letterRows.length - 1 && (
                        <Key $flex={1.6} onPointerDown={keep} onClick={() => withTarget(backspace)} aria-label="Backspace">
                            ⌫
                        </Key>
                    )}
                </Row>
            ))}
            <Row>
                <Key $flex={1.6} $active={symbols} onPointerDown={keep} onClick={() => setSymbols((s) => !s)} aria-label="Toggle symbols">
                    {symbols ? "abc" : "?123"}
                </Key>
                <Key onPointerDown={keep} onClick={() => tap(",")} aria-label="comma">
                    ,
                </Key>
                <Key $flex={5} onPointerDown={keep} onClick={() => withTarget((t) => insertText(t, " "))} aria-label="Space">
                    {" "}
                </Key>
                <Key onPointerDown={keep} onClick={() => tap(".")} aria-label="period">
                    .
                </Key>
                <Key $flex={1.8} onPointerDown={keep} onClick={() => withTarget(pressEnter)} aria-label="Enter">
                    ⏎
                </Key>
                <Key $flex={1.4} onPointerDown={keep} onClick={() => setOskVisible(false)} aria-label="Hide keyboard">
                    ⌄
                </Key>
            </Row>
        </Panel>,
        document.body,
    );
};

export default OnScreenKeyboard;
