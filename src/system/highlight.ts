/**
 * A tiny, dependency-free syntax highlighter for VortexCode. Each language is a
 * short ordered list of token rules; a combined named-group regex tokenises the
 * source left-to-right and wraps matches in coloured spans. Hand-built, in the
 * spirit of the rest of VortexOS — no Prism, no highlight.js.
 */

export type Lang = "js" | "css" | "html" | "json" | "markdown" | "shell" | "python" | "text";

const EXT_LANG: Record<string, Lang> = {
    js: "js", jsx: "js", ts: "js", tsx: "js", mjs: "js", cjs: "js",
    css: "css", scss: "css", less: "css",
    html: "html", htm: "html", xml: "html", svg: "html",
    json: "json",
    md: "markdown", markdown: "markdown",
    sh: "shell", bash: "shell", zsh: "shell",
    py: "python",
};

export function langOf(name: string): Lang {
    const ext = name.split(".").pop()?.toLowerCase() ?? "";
    return EXT_LANG[ext] ?? "text";
}

const KW = (words: string) => `\\b(?:${words.trim().split(/\s+/).join("|")})\\b`;

// [tokenType, regexSource] — order matters (first match at a position wins).
const RULES: Record<Lang, [string, string][]> = {
    js: [
        ["comment", "//[^\\n]*|/\\*[\\s\\S]*?\\*/"],
        ["string", "`(?:[^`\\\\]|\\\\.)*`|\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'"],
        ["keyword", KW("import from export default const let var function return if else for while do switch case break continue new class extends super this typeof instanceof in of try catch finally throw await async yield delete void static get set")],
        ["literal", KW("true false null undefined NaN Infinity")],
        ["number", "\\b(?:0x[\\da-fA-F]+|\\d+\\.?\\d*(?:e[+-]?\\d+)?)\\b"],
        ["func", "\\b[a-zA-Z_$][\\w$]*(?=\\s*\\()"],
    ],
    css: [
        ["comment", "/\\*[\\s\\S]*?\\*/"],
        ["string", "\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'"],
        ["atrule", "@[\\w-]+"],
        ["prop", "[a-z-]+(?=\\s*:)"],
        ["number", "#[\\da-fA-F]{3,8}\\b|-?\\b\\d+\\.?\\d*(?:px|em|rem|%|vh|vw|fr|s|ms|deg|pt)?\\b"],
    ],
    html: [
        ["comment", "<!--[\\s\\S]*?-->"],
        ["string", "\"[^\"]*\"|'[^']*'"],
        ["tag", "</?[a-zA-Z][\\w-]*|/?>"],
        ["attr", "\\b[a-zA-Z-]+(?==)"],
    ],
    json: [
        ["prop", "\"(?:[^\"\\\\]|\\\\.)*\"(?=\\s*:)"],
        ["string", "\"(?:[^\"\\\\]|\\\\.)*\""],
        ["literal", KW("true false null")],
        ["number", "-?\\b\\d+\\.?\\d*(?:e[+-]?\\d+)?\\b"],
    ],
    markdown: [
        ["heading", "^#{1,6} .*$"],
        ["code", "```[\\s\\S]*?```|`[^`\\n]+`"],
        ["bold", "\\*\\*[^*\\n]+\\*\\*|__[^_\\n]+__"],
        ["link", "\\[[^\\]\\n]+\\]\\([^)\\n]+\\)"],
        ["list", "^\\s*(?:[-*+]|\\d+\\.) "],
        ["italic", "\\*[^*\\n]+\\*|_[^_\\n]+_"],
    ],
    shell: [
        ["comment", "#[^\\n]*"],
        ["string", "\"(?:[^\"\\\\]|\\\\.)*\"|'[^']*'"],
        ["variable", "\\$\\w+|\\$\\{[^}]+\\}"],
        ["keyword", KW("if then else elif fi for in do done while case esac function return export local echo cd")],
        ["number", "\\b\\d+\\b"],
    ],
    python: [
        ["comment", "#[^\\n]*"],
        ["string", "\"\"\"[\\s\\S]*?\"\"\"|'''[\\s\\S]*?'''|\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'"],
        ["keyword", KW("def class return if elif else for while in import from as with try except finally raise lambda and or not is pass break continue yield global nonlocal async await")],
        ["literal", KW("True False None")],
        ["number", "\\b\\d+\\.?\\d*\\b"],
        ["func", "\\b[a-zA-Z_]\\w*(?=\\s*\\()"],
    ],
    text: [],
};

const STYLE: Record<string, string> = {
    comment: "color:#008000;font-style:italic",
    string: "color:#a31515",
    keyword: "color:#0000ff",
    literal: "color:#0000ff",
    number: "color:#098658",
    func: "color:#795e26",
    prop: "color:#0451a5",
    atrule: "color:#af00db",
    tag: "color:#800000",
    attr: "color:#e50000",
    heading: "color:#800080;font-weight:bold",
    code: "color:#a31515",
    bold: "font-weight:bold",
    italic: "font-style:italic",
    link: "color:#0000ee;text-decoration:underline",
    list: "color:#af00db",
    variable: "color:#267f99",
};

function escapeHtml(s: string): string {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const COMBINED = new Map<Lang, RegExp | null>();
function regexFor(lang: Lang): RegExp | null {
    if (COMBINED.has(lang)) return COMBINED.get(lang)!;
    const rules = RULES[lang];
    const re = rules.length
        ? new RegExp(rules.map(([t, src]) => `(?<${t}>${src})`).join("|"), "gm")
        : null;
    COMBINED.set(lang, re);
    return re;
}

export function highlight(code: string, lang: Lang): string {
    const re = regexFor(lang);
    if (!re) return escapeHtml(code);
    let out = "";
    let last = 0;
    for (const m of code.matchAll(re)) {
        out += escapeHtml(code.slice(last, m.index));
        const groups = m.groups ?? {};
        const type = Object.keys(groups).find((k) => groups[k] !== undefined) ?? "";
        out += `<span style="${STYLE[type] ?? ""}">${escapeHtml(m[0])}</span>`;
        last = m.index! + m[0].length;
    }
    out += escapeHtml(code.slice(last));
    return out;
}
