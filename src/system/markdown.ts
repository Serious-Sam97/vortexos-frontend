/**
 * A small, dependency-free Markdown → HTML renderer for Markdown Studio.
 * Supports headings, bold/italic/inline-code, code fences, links & images,
 * ordered/unordered lists, blockquotes, horizontal rules and paragraphs.
 * Input is HTML-escaped first, so it's safe to render the output.
 */

function escapeHtml(s: string): string {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Inline spans: code, images, links, bold, italic. Operates on already-escaped text. */
function inline(text: string): string {
    return text
        .replace(/`([^`]+)`/g, (_, c) => `<code>${c}</code>`)
        .replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g, (_, alt, src) => `<img alt="${alt}" src="${src}" style="max-width:100%" />`)
        .replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g, (_, t, href) => `<a href="${href}" target="_blank" rel="noopener">${t}</a>`)
        .replace(/\*\*([^*]+)\*\*|__([^_]+)__/g, (_, a, b) => `<strong>${a ?? b}</strong>`)
        .replace(/(^|[^*])\*([^*]+)\*/g, (_, pre, t) => `${pre}<em>${t}</em>`)
        .replace(/(^|[^_])_([^_]+)_/g, (_, pre, t) => `${pre}<em>${t}</em>`);
}

export function renderMarkdown(src: string): string {
    const lines = escapeHtml(src.replace(/\r\n/g, "\n")).split("\n");
    const out: string[] = [];
    let i = 0;
    let listType: "ul" | "ol" | null = null;

    const closeList = () => {
        if (listType) {
            out.push(`</${listType}>`);
            listType = null;
        }
    };

    while (i < lines.length) {
        const line = lines[i];

        // fenced code block
        if (/^```/.test(line)) {
            closeList();
            const buf: string[] = [];
            i++;
            while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
            i++; // closing fence
            out.push(`<pre class="md-pre"><code>${buf.join("\n")}</code></pre>`);
            continue;
        }
        // heading
        const h = /^(#{1,6})\s+(.*)$/.exec(line);
        if (h) {
            closeList();
            out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
            i++;
            continue;
        }
        // horizontal rule
        if (/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
            closeList();
            out.push("<hr />");
            i++;
            continue;
        }
        // blockquote
        if (/^>\s?/.test(line)) {
            closeList();
            const buf: string[] = [];
            while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ""));
            out.push(`<blockquote>${inline(buf.join(" "))}</blockquote>`);
            continue;
        }
        // unordered list
        if (/^\s*[-*+]\s+/.test(line)) {
            if (listType !== "ul") {
                closeList();
                out.push("<ul>");
                listType = "ul";
            }
            out.push(`<li>${inline(line.replace(/^\s*[-*+]\s+/, ""))}</li>`);
            i++;
            continue;
        }
        // ordered list
        if (/^\s*\d+\.\s+/.test(line)) {
            if (listType !== "ol") {
                closeList();
                out.push("<ol>");
                listType = "ol";
            }
            out.push(`<li>${inline(line.replace(/^\s*\d+\.\s+/, ""))}</li>`);
            i++;
            continue;
        }
        // blank line
        if (/^\s*$/.test(line)) {
            closeList();
            i++;
            continue;
        }
        // paragraph (gather consecutive non-blank, non-special lines)
        closeList();
        const para: string[] = [line];
        i++;
        while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,6}\s|```|>\s?|\s*[-*+]\s+|\s*\d+\.\s+)/.test(lines[i]) && !/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i])) {
            para.push(lines[i++]);
        }
        out.push(`<p>${inline(para.join(" "))}</p>`);
    }
    closeList();
    return out.join("\n");
}
