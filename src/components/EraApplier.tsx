import { useEffect } from "react";
import { useEra, eraCssVars, ERA_VAR_NAMES, DEFAULT_ERA } from "../system/eras";
import { setSoundScheme } from "../system/sounds";

/**
 * Applies the active Time Machine era as real global effects: projects the era's
 * chrome tokens onto document.documentElement as --vx-* CSS custom properties (so
 * title bars, taskbar, Start banner and desktop follow the era), points the sound
 * engine at the era's scheme, and reflects the era id onto a `data-era` attribute
 * for any era-specific CSS. Mounted once on the desktop.
 *
 * The default era (Windows 98) clears the overrides so the index.css :root defaults
 * apply — keeping the engine a true no-op until another era is chosen.
 */
const EraApplier: React.FC = () => {
    const era = useEra();

    useEffect(() => {
        const root = document.documentElement;

        // Always clear the full set first so a prior era's extra vars don't linger,
        // then apply the active era. The default era (Windows 98) sets nothing → the
        // index.css :root defaults apply (a true no-op).
        for (const name of ERA_VAR_NAMES) root.style.removeProperty(name);
        if (era.id !== DEFAULT_ERA) {
            for (const [name, value] of Object.entries(eraCssVars(era.chrome))) {
                root.style.setProperty(name, value);
            }
        }
        root.setAttribute("data-era", era.id);

        setSoundScheme(era.sound);
    }, [era]);

    return null;
};

export default EraApplier;
