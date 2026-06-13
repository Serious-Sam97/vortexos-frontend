import original from "react95/dist/themes/original";
import ash from "react95/dist/themes/ash";
import candy from "react95/dist/themes/candy";
import matrix from "react95/dist/themes/matrix";
import rainyDay from "react95/dist/themes/rainyDay";
import ninjaTurtles from "react95/dist/themes/ninjaTurtles";
import marine from "react95/dist/themes/marine";
import lilac from "react95/dist/themes/lilac";
import blackAndWhite from "react95/dist/themes/blackAndWhite";
import highContrast from "react95/dist/themes/highContrast";

/** Selectable desktop themes (react95 ships dozens; this is a curated set). */
export const THEMES: Record<string, { name: string; theme: unknown }> = {
    original: { name: "Windows Standard", theme: original },
    ash: { name: "Ash (Win98)", theme: ash },
    marine: { name: "Marine", theme: marine },
    rainyDay: { name: "Rainy Day", theme: rainyDay },
    candy: { name: "Candy", theme: candy },
    lilac: { name: "Lilac", theme: lilac },
    ninjaTurtles: { name: "Ninja Turtles", theme: ninjaTurtles },
    matrix: { name: "Matrix", theme: matrix },
    blackAndWhite: { name: "Black & White", theme: blackAndWhite },
    highContrast: { name: "High Contrast", theme: highContrast },
};

export const DEFAULT_THEME = "original";

export function themeOf(key: string): unknown {
    return (THEMES[key] ?? THEMES[DEFAULT_THEME]).theme;
}
