import { useSyncExternalStore } from "react";
import { getSession } from "./session";

/**
 * THE TIME MACHINE — OS Eras.
 *
 * An "era" is a complete look-and-feel pack: window/taskbar chrome (projected as
 * --vx-* CSS custom properties onto :root), a synthesized sound scheme, a boot/
 * shutdown configuration, a default desktop background and pointer scheme. Switch
 * the active era and the whole OS transforms — Windows 95 → 98 → 2000 → XP → Aero,
 * a deep-retro DOS/NT4 end, and our own Vortex-future era.
 *
 * Phase 24 · M1 ships the engine with Windows 98 as the only registered era, so
 * the OS stays pixel-identical; later milestones register the rest.
 */

export type EraId =
    | "dos"
    | "nt4"
    | "win95"
    | "win98"
    | "win2000"
    | "winxp"
    | "vista"
    | "win7"
    | "vortex";

/** Visual chrome tokens — each maps to a `--vx-*` CSS custom property on :root. */
export interface EraChrome {
    titleActive: string; // active window/dialog title-bar background
    titleInactive: string; // inactive title-bar background
    titleText: string; // active title text colour
    titleTextInactive: string; // inactive title text colour
    titleRadius: string; // window corner radius ("0" classic, "6px" XP/Aero)
    accent: string; // selection / highlight colour
    accentText: string; // text drawn on the accent colour
    face: string; // 3D control face colour
    faceText: string; // text on a control face
    light: string; // bevel highlight edge
    shadow: string; // bevel shadow edge
    taskbar: string; // taskbar background
    taskbarText?: string; // tray text/icon colour (default #000; light for dark/glass taskbars)
    startBanner: string; // Start-menu vertical banner background
    desktop: string; // default desktop background (when no wallpaper)
    font: string; // UI font stack
    // Optional: a styled Start button (XP green orb, Aero glass). When set, WMenu
    // renders the Start button with this background + white bold text + rounding.
    startButton?: string;
    startButtonRadius?: string; // Start button corner radius (XP/Aero; "50%" = round orb)
    /** Optional: a Start-button image (the glossy Aero orb). Read directly by WMenu. */
    startOrbImage?: string;
    // Optional: Aero glass — a backdrop-filter applied to the title bar / taskbar so
    // the desktop blurs through (e.g. "blur(12px) saturate(1.5)").
    titleBlur?: string;
    taskbarBlur?: string;
}

/** Which synthesized sound scheme (see system/sounds.ts) the era plays. */
export type SoundSchemeId = "vortex" | "pcspeaker" | "chimes9x" | "luna" | "aero";

/** The boot / shutdown screen content for an era. */
export interface EraBoot {
    /** Visual style of the boot flow. The renderer (Intro) maps this to a look. */
    style: "vortex" | "classic" | "luna" | "aero" | "dos";
    /** POST screen lines (use the literal {cores} token for the CPU core count). */
    postLines: Array<{ label: string; status?: string }>;
    /** Wordmark shown on the logo + shutdown screens. */
    wordmark: string;
    /** Edition / version sub-label. */
    edition: string;
}

/** A complete era look-and-feel pack. */
export interface EraPack {
    id: EraId;
    name: string; // "Windows 98"
    short: string; // "98"
    year: string; // "1998"
    blurb: string; // one-liner for the Time Machine picker
    chrome: EraChrome;
    sound: SoundSchemeId;
    boot: EraBoot;
    /** Default wallpaper path under public/ (overrides chrome.desktop when set). */
    wallpaper?: string;
    /** Pointer scheme file in /win-cursor/. */
    cursor?: string;
}

/* ----------------------------------------------------------------- the packs */

/**
 * Windows 98 — the current VortexOS look, captured verbatim so the engine is a
 * no-op until another era is selected. Every value here equals what was previously
 * hardcoded in win98.ts / WMenu / AppContent / Intro.
 */
const WIN98: EraPack = {
    id: "win98",
    name: "Windows 98",
    short: "98",
    year: "1998",
    blurb: "Gradient title bars, the teal desktop, classic chimes.",
    chrome: {
        titleActive: "linear-gradient(90deg, #000080 0%, #1084d0 100%)",
        titleInactive: "linear-gradient(90deg, #808080 0%, #b5b5b5 100%)",
        titleText: "#ffffff",
        titleTextInactive: "#dfdfdf",
        titleRadius: "0",
        accent: "#000080",
        accentText: "#ffffff",
        face: "#c0c0c0",
        faceText: "#000000",
        light: "#ffffff",
        shadow: "#808080",
        taskbar: "#c0c0c0",
        startBanner: "linear-gradient(180deg, #00007a 0%, #000033 100%)",
        desktop: "#008080",
        font: "'ms_sans_serif', 'MS Sans Serif', Tahoma, sans-serif",
    },
    sound: "vortex",
    boot: {
        style: "vortex",
        postLines: [
            { label: "VortexOS BIOS v2.0  —  Experimental Edition" },
            { label: "(c) Serious Sam.  All rights reserved." },
            { label: "" },
            { label: "Detecting processor cores ........ {cores}" },
            { label: "Microkernel .......................", status: "OK" },
            { label: "Syscall ABI .......................", status: "OK" },
            { label: "Virtual File System (OPFS) ........", status: "OK" },
            { label: "Process scheduler .................", status: "OK" },
            { label: "" },
            { label: "Starting VortexOS ..." },
        ],
        wordmark: "VortexOS",
        edition: "Version 2.0 · Experimental Edition",
    },
};

/**
 * MS-DOS — the deep-retro end. A text-mode skin: black screen, monospace, flat
 * DOS-blue title bars (no gradient/bevel theatrics), a dark task strip, and a
 * real-mode boot. PC-speaker beeps for sound.
 */
const DOS: EraPack = {
    id: "dos",
    name: "MS-DOS",
    short: "DOS",
    year: "1994",
    blurb: "Black screen, monospace, PC-speaker beeps. Real mode.",
    chrome: {
        titleActive: "#0000aa",
        titleInactive: "#3a3a3a",
        titleText: "#ffffff",
        titleTextInactive: "#bcbcbc",
        titleRadius: "0",
        accent: "#00aaaa",
        accentText: "#000000",
        face: "#aaaaaa",
        faceText: "#000000",
        light: "#ffffff",
        shadow: "#555555",
        taskbar: "#0a0a0a",
        taskbarText: "#cfcfcf",
        startBanner: "#0000aa",
        desktop: "#000000",
        font: "'Courier New', 'Consolas', monospace",
    },
    sound: "pcspeaker",
    boot: {
        style: "dos",
        postLines: [
            { label: "VortexOS/DOS  Version 6.22" },
            { label: "(C) Serious Sam 1994.  All rights reserved." },
            { label: "" },
            { label: "HIMEM is testing extended memory ... done." },
            { label: "Detecting processor cores ........ {cores}" },
            { label: "Microkernel ...................... loaded" },
            { label: "Virtual File System (OPFS) ....... mounted" },
            { label: "" },
            { label: "C:\\>vortex" },
        ],
        wordmark: "MS-DOS",
        edition: "VortexOS · Real Mode",
    },
};

/**
 * Windows 95 — the original 9x shell: flat SOLID navy title bars (the gradient
 * didn't arrive until 98 / Plus!), square 3D chrome, MS Sans, the teal desktop.
 */
const WIN95: EraPack = {
    id: "win95",
    name: "Windows 95",
    short: "95",
    year: "1995",
    blurb: "Flat navy title bars, square chrome, the teal desktop.",
    chrome: {
        titleActive: "#000080",
        titleInactive: "#808080",
        titleText: "#ffffff",
        titleTextInactive: "#c0c0c0",
        titleRadius: "0",
        accent: "#000080",
        accentText: "#ffffff",
        face: "#c0c0c0",
        faceText: "#000000",
        light: "#ffffff",
        shadow: "#808080",
        taskbar: "#c0c0c0",
        startBanner: "linear-gradient(180deg, #000080 0%, #000040 100%)",
        desktop: "#008080",
        font: "'ms_sans_serif', 'MS Sans Serif', Tahoma, sans-serif",
    },
    sound: "chimes9x",
    boot: {
        style: "classic",
        postLines: [
            { label: "VortexOS BIOS  —  Windows 95 Edition" },
            { label: "(c) Serious Sam." },
            { label: "" },
            { label: "Detecting processor cores ........ {cores}" },
            { label: "Microkernel .......................", status: "OK" },
            { label: "Virtual File System ...............", status: "OK" },
            { label: "" },
            { label: "Starting Windows 95 ..." },
        ],
        wordmark: "Windows 95",
        edition: "VortexOS Edition",
    },
};

/**
 * Windows NT 4.0 — the 95 shell on the NT kernel: visually the 9x family (flat
 * navy, gray, MS Sans, teal), but a businesslike NT identity and boot.
 */
const NT4: EraPack = {
    id: "nt4",
    name: "Windows NT 4.0",
    short: "NT4",
    year: "1996",
    blurb: "The 95 look on the NT kernel — Workstation grade.",
    chrome: {
        titleActive: "#000080",
        titleInactive: "#808080",
        titleText: "#ffffff",
        titleTextInactive: "#c0c0c0",
        titleRadius: "0",
        accent: "#000080",
        accentText: "#ffffff",
        face: "#c0c0c0",
        faceText: "#000000",
        light: "#ffffff",
        shadow: "#808080",
        taskbar: "#c0c0c0",
        startBanner: "linear-gradient(180deg, #000060 0%, #000020 100%)",
        desktop: "#3a6e6e",
        font: "'ms_sans_serif', 'MS Sans Serif', Tahoma, sans-serif",
    },
    sound: "chimes9x",
    boot: {
        style: "classic",
        postLines: [
            { label: "VortexOS  —  Windows NT 4.0 Workstation" },
            { label: "(c) Serious Sam." },
            { label: "" },
            { label: "Detecting processor cores ........ {cores}" },
            { label: "NT Microkernel ...................", status: "OK" },
            { label: "Virtual File System ...............", status: "OK" },
            { label: "Security subsystem ................", status: "OK" },
            { label: "" },
            { label: "Starting Windows NT ..." },
        ],
        wordmark: "Windows NT",
        edition: "Workstation 4.0",
    },
};

/**
 * Windows 2000 — the refined classic: the softer blue title gradient, the warmer
 * #d4d0c8 gray, Tahoma, and the signature flat blue desktop.
 */
const WIN2000: EraPack = {
    id: "win2000",
    name: "Windows 2000",
    short: "2K",
    year: "2000",
    blurb: "Soft blue gradients, warm gray, Tahoma, the blue desktop.",
    chrome: {
        titleActive: "linear-gradient(90deg, #0a246a 0%, #a6caf0 100%)",
        titleInactive: "linear-gradient(90deg, #808080 0%, #b5b5b5 100%)",
        titleText: "#ffffff",
        titleTextInactive: "#dfdfdf",
        titleRadius: "0",
        accent: "#0a246a",
        accentText: "#ffffff",
        face: "#d4d0c8",
        faceText: "#000000",
        light: "#ffffff",
        shadow: "#808080",
        taskbar: "#d4d0c8",
        startBanner: "linear-gradient(180deg, #0a246a 0%, #06163f 100%)",
        desktop: "#3a6ea5",
        font: "'Tahoma', 'ms_sans_serif', sans-serif",
    },
    sound: "chimes9x",
    boot: {
        style: "classic",
        postLines: [
            { label: "VortexOS  —  Windows 2000 Professional" },
            { label: "(c) Serious Sam." },
            { label: "" },
            { label: "Detecting processor cores ........ {cores}" },
            { label: "Microkernel .......................", status: "OK" },
            { label: "Virtual File System (OPFS) ........", status: "OK" },
            { label: "Plug and Play .....................", status: "OK" },
            { label: "" },
            { label: "Starting Windows 2000 ..." },
        ],
        wordmark: "Windows 2000",
        edition: "Professional",
    },
};

/**
 * Windows XP (Luna) — the flagship leap. Rounded glossy-blue title bars, the green
 * Start orb, the Luna-blue taskbar, Tahoma, and a Bliss-style rolling-hills desktop
 * (a CSS approximation — no asset). The chrome stops being rectangular here.
 */
const WINXP: EraPack = {
    id: "winxp",
    name: "Windows XP",
    short: "XP",
    year: "2001",
    blurb: "Luna: rounded blue gloss, the green Start orb, Bliss hills.",
    chrome: {
        // Glossy vertical blue title bar (top highlight → deep Luna blue).
        titleActive:
            "linear-gradient(180deg, #0a6cff 0%, #3a93ff 9%, #277dfd 18%, #166bf0 60%, #0e5fd6 92%, #0a52c0 100%)",
        titleInactive:
            "linear-gradient(180deg, #7aa6e8 0%, #6f9ee5 50%, #5f8fda 100%)",
        titleText: "#ffffff",
        titleTextInactive: "#dbe6f7",
        titleRadius: "8px 8px 0 0",
        accent: "#316ac5", // XP selection blue
        accentText: "#ffffff",
        face: "#ece9d8", // the warm XP control face
        faceText: "#000000",
        light: "#ffffff",
        shadow: "#aca899",
        // Luna-blue taskbar gradient.
        taskbar:
            "linear-gradient(180deg, #3f8cf3 0%, #2a6ee0 8%, #2f74e6 42%, #245fd6 90%, #1941a5 100%)",
        taskbarText: "#ffffff",
        startBanner: "linear-gradient(180deg, #1c5fd6 0%, #0a3da0 100%)",
        // Bliss-ish: blue sky → light horizon → rolling green hill (CSS only).
        desktop:
            "radial-gradient(130% 90% at 50% 118%, #7cb342 0%, #5b9d33 26%, rgba(120,170,80,0) 52%), linear-gradient(180deg, #2f6fd6 0%, #5a97e6 42%, #b9d9f0 72%, #d8ead0 100%)",
        font: "'Tahoma', 'ms_sans_serif', sans-serif",
        // The glossy green XP "start" button — bright sheen up top, a lighter reflection at the foot.
        startButton: "linear-gradient(180deg, #8fd24f 0%, #6cbb33 9%, #57aa23 45%, #4a991d 72%, #3c8814 88%, #5fb02b 100%)",
        startButtonRadius: "2px 12px 12px 2px",
    },
    sound: "luna",
    boot: {
        style: "luna",
        postLines: [], // XP boot has no BIOS POST text — it's the logo + slider
        wordmark: "Windows XP",
        edition: "VortexOS · Luna",
    },
};

/**
 * Windows Vista (Aero) — glass arrives. Translucent dark-glass title bars, a real
 * backdrop-blur taskbar, the round Start orb, Segoe UI, and an aurora desktop.
 */
const VISTA: EraPack = {
    id: "vista",
    name: "Windows Vista",
    short: "Vista",
    year: "2007",
    blurb: "Aero glass: translucent dark chrome, the round orb, aurora.",
    chrome: {
        titleActive:
            "linear-gradient(180deg, rgba(64,104,170,0.78) 0%, rgba(40,72,135,0.74) 48%, rgba(26,52,108,0.8) 100%)",
        titleInactive:
            "linear-gradient(180deg, rgba(120,130,150,0.66) 0%, rgba(96,106,128,0.66) 100%)",
        titleText: "#ffffff",
        titleTextInactive: "#e6ebf5",
        titleRadius: "8px 8px 0 0",
        accent: "#2a6fd6",
        accentText: "#ffffff",
        face: "#f0f0f0",
        faceText: "#000000",
        light: "#ffffff",
        shadow: "#9aa4b4",
        taskbar: "rgba(12,22,44,0.55)",
        taskbarText: "#eaf2ff",
        taskbarBlur: "blur(14px) saturate(1.4)",
        titleBlur: "blur(10px) saturate(1.4)",
        startBanner: "linear-gradient(180deg, rgba(18,40,86,0.95), rgba(8,20,52,0.98))",
        // Aurora: a luminous green-teal glow over deep blue.
        desktop:
            "radial-gradient(80% 60% at 50% 8%, rgba(80,220,180,0.35) 0%, rgba(40,120,160,0.12) 38%, rgba(0,0,0,0) 60%), linear-gradient(180deg, #0a1c3e 0%, #103260 55%, #0b2547 100%)",
        font: "'Segoe UI', 'Tahoma', sans-serif",
        startButton:
            "radial-gradient(circle at 50% 38%, #cfe9ff 0%, #4aa3ef 38%, #1e63c8 70%, #0c3f93 100%)",
        startButtonRadius: "50%",
        startOrbImage: "/start-orb.svg",
    },
    sound: "aero",
    boot: {
        style: "aero",
        postLines: [],
        wordmark: "Windows Vista",
        edition: "VortexOS · Aero",
    },
};

/**
 * Windows 7 (Aero, refined) — brighter, cleaner glass: light translucent title bars
 * with dark text, a brighter glass taskbar, the round orb, and a luminous blue sky.
 */
const WIN7: EraPack = {
    id: "win7",
    name: "Windows 7",
    short: "7",
    year: "2009",
    blurb: "Aero refined: bright glass, the orb, a luminous blue sky.",
    chrome: {
        titleActive:
            "linear-gradient(180deg, rgba(225,238,252,0.82) 0%, rgba(186,214,245,0.78) 46%, rgba(150,190,235,0.82) 100%)",
        titleInactive:
            "linear-gradient(180deg, rgba(238,242,248,0.8) 0%, rgba(214,222,234,0.8) 100%)",
        titleText: "#16314f",
        titleTextInactive: "#5e7088",
        titleRadius: "8px 8px 0 0",
        accent: "#3c8ee8",
        accentText: "#ffffff",
        face: "#f2f6fb",
        faceText: "#000000",
        light: "#ffffff",
        shadow: "#a7b3c4",
        taskbar: "rgba(32,56,98,0.42)",
        taskbarText: "#eef4ff",
        taskbarBlur: "blur(16px) saturate(1.6)",
        titleBlur: "blur(12px) saturate(1.5)",
        startBanner: "linear-gradient(180deg, rgba(36,78,150,0.95), rgba(14,40,92,0.98))",
        // Luminous blue: a soft light bloom over a deep-to-bright blue sky.
        desktop:
            "radial-gradient(70% 55% at 50% 26%, rgba(150,205,255,0.55) 0%, rgba(80,150,225,0.2) 42%, rgba(0,0,0,0) 64%), linear-gradient(180deg, #103a86 0%, #2f74d6 55%, #7fb4ec 100%)",
        font: "'Segoe UI', 'Tahoma', sans-serif",
        startButton:
            "radial-gradient(circle at 50% 36%, #eaf6ff 0%, #5fb0f2 36%, #2a7be0 68%, #14529e 100%)",
        startButtonRadius: "50%",
        startOrbImage: "/start-orb.svg",
    },
    sound: "aero",
    boot: {
        style: "aero",
        postLines: [],
        wordmark: "Windows 7",
        edition: "VortexOS · Aero",
    },
};

/**
 * Vortex OS — the signature future era, and the one place the OS stops imitating
 * and becomes itself: holographic neon glass (magenta→violet→cyan), a glowing
 * portal orb, the retrowave grid, and the cinematic Vortex boot chord. Selecting
 * it turns the Serious Sam Style overlay ON (vaporwave wallpaper + retrowave Start
 * banner + the signature boot); every other era turns it off.
 */
const VORTEX: EraPack = {
    id: "vortex",
    name: "Vortex OS",
    short: "VTX",
    year: "20XX",
    blurb: "The signature: holographic neon glass, the portal, the grid.",
    chrome: {
        titleActive:
            "linear-gradient(110deg, rgba(255,45,149,0.85) 0%, rgba(120,40,200,0.82) 50%, rgba(0,229,208,0.85) 100%)",
        titleInactive: "linear-gradient(110deg, rgba(78,72,104,0.72) 0%, rgba(52,48,78,0.72) 100%)",
        titleText: "#ffffff",
        titleTextInactive: "#d6d2ea",
        titleRadius: "10px 10px 0 0",
        accent: "#ff2d95",
        accentText: "#ffffff",
        face: "#f1eef8",
        faceText: "#000000",
        light: "#ffffff",
        shadow: "#7a3b9e",
        taskbar: "rgba(22,8,44,0.55)",
        taskbarText: "#ffffff",
        taskbarBlur: "blur(16px) saturate(1.7)",
        titleBlur: "blur(12px) saturate(1.6)",
        startBanner: "linear-gradient(180deg, #ff2d95 0%, #6a1b9a 55%, #00e5d0 100%)",
        // Fallback desktop (the SSS overlay normally supplies the vaporwave wallpaper):
        // a neon sunset over deep violet.
        desktop:
            "radial-gradient(100% 75% at 50% 118%, #ff2d95 0%, rgba(106,27,154,0) 52%), linear-gradient(180deg, #1a0033 0%, #3a0a5a 52%, #0a0118 100%)",
        font: "'Segoe UI', system-ui, sans-serif",
        startButton:
            "radial-gradient(circle at 50% 36%, #ffffff 0%, #ff2d95 38%, #6a1b9a 72%, #00e5d0 112%)",
        startButtonRadius: "50%",
    },
    sound: "vortex",
    boot: {
        style: "vortex",
        postLines: [
            { label: "VortexOS BIOS v2.0  —  Experimental Edition" },
            { label: "(c) Serious Sam.  All rights reserved." },
            { label: "" },
            { label: "Detecting processor cores ........ {cores}" },
            { label: "Microkernel .......................", status: "OK" },
            { label: "Syscall ABI .......................", status: "OK" },
            { label: "Virtual File System (OPFS) ........", status: "OK" },
            { label: "Process scheduler .................", status: "OK" },
            { label: "" },
            { label: "Starting VortexOS ..." },
        ],
        wordmark: "VortexOS",
        edition: "Experimental Edition",
    },
};

/** Registered eras, keyed by id. */
export const ERAS: Partial<Record<EraId, EraPack>> = {
    dos: DOS,
    win95: WIN95,
    nt4: NT4,
    win98: WIN98,
    win2000: WIN2000,
    winxp: WINXP,
    vista: VISTA,
    win7: WIN7,
    vortex: VORTEX,
};

/** Available era ids, oldest → newest → the Vortex future (the picker order). */
export const ERA_ORDER: EraId[] = [
    "dos",
    "win95",
    "nt4",
    "win98",
    "win2000",
    "winxp",
    "vista",
    "win7",
    "vortex",
];

export const DEFAULT_ERA: EraId = "win98";

/** Resolve an era id to its pack, falling back to the default if unknown/unbuilt. */
export function eraOf(id: string): EraPack {
    return ERAS[id as EraId] ?? ERAS[DEFAULT_ERA]!;
}

/**
 * Project an era's chrome tokens to the `--vx-*` CSS custom properties that the
 * chrome (title bars, taskbar, Start banner, desktop) read. The defaults for
 * these live in index.css :root (the Windows-98 values), so applying the default
 * era is just removing the overrides.
 */
export function eraCssVars(chrome: EraChrome): Record<string, string> {
    const vars: Record<string, string> = {
        "--vx-title-active": chrome.titleActive,
        "--vx-title-inactive": chrome.titleInactive,
        "--vx-title-text": chrome.titleText,
        "--vx-title-text-inactive": chrome.titleTextInactive,
        "--vx-title-radius": chrome.titleRadius,
        "--vx-accent": chrome.accent,
        "--vx-accent-text": chrome.accentText,
        "--vx-face": chrome.face,
        "--vx-face-text": chrome.faceText,
        "--vx-light": chrome.light,
        "--vx-shadow": chrome.shadow,
        "--vx-taskbar": chrome.taskbar,
        "--vx-start-banner": chrome.startBanner,
        "--vx-desktop": chrome.desktop,
        "--vx-font": chrome.font,
    };
    if (chrome.startButton) vars["--vx-start-btn"] = chrome.startButton;
    if (chrome.startButtonRadius) vars["--vx-start-btn-radius"] = chrome.startButtonRadius;
    if (chrome.titleBlur) vars["--vx-title-blur"] = chrome.titleBlur;
    if (chrome.taskbarBlur) vars["--vx-taskbar-blur"] = chrome.taskbarBlur;
    if (chrome.taskbarText) vars["--vx-taskbar-text"] = chrome.taskbarText;
    return vars;
}

/**
 * Every era CSS variable name (including the optional ones). EraApplier clears the
 * whole set before applying the active era, so an era's extra vars (e.g. XP's Start
 * orb) never linger when you switch to an era that doesn't define them.
 */
export const ERA_VAR_NAMES: string[] = [
    "--vx-title-active",
    "--vx-title-inactive",
    "--vx-title-text",
    "--vx-title-text-inactive",
    "--vx-title-radius",
    "--vx-accent",
    "--vx-accent-text",
    "--vx-face",
    "--vx-face-text",
    "--vx-light",
    "--vx-shadow",
    "--vx-taskbar",
    "--vx-start-banner",
    "--vx-desktop",
    "--vx-font",
    "--vx-start-btn",
    "--vx-start-btn-radius",
    "--vx-title-blur",
    "--vx-taskbar-blur",
    "--vx-taskbar-text",
];

/* ----------------------------------------------------------- per-user store */
// The chosen era is per-user (keyed by username), falling back to a legacy
// global key, mirroring how wallpaper is stored.

const globalKey = "vortex.era";
const userKey = () => `vortex.era.${getSession()?.username || "user"}`;

function read(): EraId {
    const raw = localStorage.getItem(userKey()) ?? localStorage.getItem(globalKey);
    return raw && ERA_ORDER.includes(raw as EraId) ? (raw as EraId) : DEFAULT_ERA;
}

let current: EraId = read();

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

export function getEraId(): EraId {
    return current;
}

export function getEra(): EraPack {
    return eraOf(current);
}

export function setEraId(id: EraId): void {
    current = ERA_ORDER.includes(id) ? id : DEFAULT_ERA;
    localStorage.setItem(userKey(), current);
    // Also stamp the machine-wide key so the pre-login boot screen (which can't
    // know the user yet) boots into the last-selected era.
    localStorage.setItem(globalKey, current);
    notify();
}

/** Re-read the active era after a sign-in / user switch (like wallpaper). */
export function reloadEra(): void {
    current = read();
    notify();
}

function subscribe(cb: () => void): () => void {
    listeners.add(cb);
    return () => listeners.delete(cb);
}

export function useEraId(): EraId {
    return useSyncExternalStore(subscribe, getEraId);
}

export function useEra(): EraPack {
    return eraOf(useEraId());
}

/* ----------------------------------------------------- time-warp transition */
// A one-shot signal the Time Machine fires when travelling between eras; the
// TimeWarp overlay plays the hyperspace animation while the new era paints under it.
const warpListeners = new Set<() => void>();

/** Play the time-warp transition (the Time Machine calls this on an era change). */
export function triggerWarp(): void {
    warpListeners.forEach((l) => l());
}

export function subscribeWarp(fn: () => void): () => void {
    warpListeners.add(fn);
    return () => warpListeners.delete(fn);
}
