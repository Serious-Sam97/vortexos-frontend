/**
 * Shared title-bar chrome so every titled surface in the OS (windows, dialogs,
 * Run, Dr. Watson, toasts, tray popups) renders the same title bar.
 *
 * These now resolve through the Time Machine era tokens (--vx-title-*, defined in
 * index.css :root and overridden per-era by EraApplier) so a single title bar
 * follows whatever era is active. The literal Windows-98 values are kept as CSS
 * fallbacks so there's never a flash before the era applier mounts.
 */
export const WIN98_TITLE_ACTIVE =
    "var(--vx-title-active, linear-gradient(90deg, #000080 0%, #1084d0 100%))";
export const WIN98_TITLE_INACTIVE =
    "var(--vx-title-inactive, linear-gradient(90deg, #808080 0%, #b5b5b5 100%))";

/** Inline style for an active/inactive era title bar (gradient + bold title text). */
export const win98TitleBar = (active = true): React.CSSProperties => ({
    background: active ? WIN98_TITLE_ACTIVE : WIN98_TITLE_INACTIVE,
    color: active ? "var(--vx-title-text, #ffffff)" : "var(--vx-title-text-inactive, #dfdfdf)",
    fontWeight: "bold",
});
