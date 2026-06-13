/**
 * Shared Windows-98 chrome constants so every titled surface in the OS (windows, dialogs,
 * Run, Dr. Watson, toasts, tray popups) renders the same authentic 98 title bar instead of
 * the flat Windows-95 navy. The defining 98 look: a horizontal gradient from hard navy on
 * the left to a lighter blue on the right (active), or a gray gradient (inactive).
 */
export const WIN98_TITLE_ACTIVE = "linear-gradient(90deg, #000080 0%, #1084d0 100%)";
export const WIN98_TITLE_INACTIVE = "linear-gradient(90deg, #808080 0%, #b5b5b5 100%)";

/** Inline style for an active 98 title bar (gradient + bold white text). */
export const win98TitleBar = (active = true): React.CSSProperties => ({
    background: active ? WIN98_TITLE_ACTIVE : WIN98_TITLE_INACTIVE,
    color: active ? "#ffffff" : "#dfdfdf",
    fontWeight: "bold",
});
