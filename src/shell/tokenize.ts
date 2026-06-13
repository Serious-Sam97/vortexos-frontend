export interface Token {
    type: "word" | "op";
    value: string;
}

const OPS = new Set(["|", "<", ";"]);

/**
 * Split a command line into words and operators. Supports single/double quotes and
 * backslash escapes. Operators: | < > >> ;
 */
export function tokenize(line: string): Token[] {
    const tokens: Token[] = [];
    let i = 0;
    const n = line.length;

    while (i < n) {
        const c = line[i];

        if (c === " " || c === "\t") {
            i++;
            continue;
        }
        if (c === ">") {
            if (line[i + 1] === ">") {
                tokens.push({ type: "op", value: ">>" });
                i += 2;
            } else {
                tokens.push({ type: "op", value: ">" });
                i++;
            }
            continue;
        }
        if (OPS.has(c)) {
            tokens.push({ type: "op", value: c });
            i++;
            continue;
        }

        // a word, possibly containing quoted/escaped runs
        let word = "";
        while (i < n) {
            const ch = line[i];
            if (ch === " " || ch === "\t" || ch === "|" || ch === "<" || ch === ">" || ch === ";") break;
            if (ch === '"' || ch === "'") {
                const quote = ch;
                i++;
                while (i < n && line[i] !== quote) {
                    word += line[i];
                    i++;
                }
                i++; // skip closing quote
                continue;
            }
            if (ch === "\\" && i + 1 < n) {
                word += line[i + 1];
                i += 2;
                continue;
            }
            word += ch;
            i++;
        }
        tokens.push({ type: "word", value: word });
    }

    return tokens;
}
