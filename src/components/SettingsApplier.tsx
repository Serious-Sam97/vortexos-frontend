import { useEffect } from "react";
import { useSettings } from "../system/settings";
import { useOSContext } from "../contexts/OSContext";

/**
 * Applies global personalization settings as real effects: UI scale via the
 * document zoom (so even portalled overlays scale), a reduce-motion attribute
 * that index.css uses to neutralise animations, and the chosen pointer scheme.
 * Mounted once on the desktop.
 */
const SettingsApplier: React.FC = () => {
    const { uiScale, reduceMotion, pointerScheme } = useSettings();
    const { changeCursor } = useOSContext();

    useEffect(() => {
        if (uiScale === 100) document.documentElement.style.removeProperty("zoom");
        else document.documentElement.style.setProperty("zoom", String(uiScale / 100));
        return () => {
            document.documentElement.style.removeProperty("zoom");
        };
    }, [uiScale]);

    useEffect(() => {
        if (reduceMotion) document.documentElement.setAttribute("data-reduce-motion", "");
        else document.documentElement.removeAttribute("data-reduce-motion");
    }, [reduceMotion]);

    useEffect(() => {
        changeCursor(pointerScheme);
        // changeCursor is recreated each render; depending only on the scheme avoids
        // re-applying on unrelated re-renders.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pointerScheme]);

    return null;
};

export default SettingsApplier;
