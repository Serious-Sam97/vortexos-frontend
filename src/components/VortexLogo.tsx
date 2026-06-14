import styled, { css, keyframes } from "styled-components";

/**
 * The VortexOS signature mark — a portal/vortex swirl drawn entirely in SVG so
 * there's no asset to ship. Three concentric arc-rings counter-rotate at
 * different speeds to read as a spinning vortex, with a pulsing core.
 *
 * `vapor` swaps the palette between the Serious Sam Style retrowave gradient
 * and the stock Windows blue, so the logo matches the rest of the desktop.
 */

const spin = keyframes`to { transform: rotate(360deg); }`;
const spinRev = keyframes`to { transform: rotate(-360deg); }`;
const pulse = keyframes`
    0%, 100% { opacity: 0.75; transform: scale(0.94); }
    50% { opacity: 1; transform: scale(1.06); }
`;

const Ring = styled.circle<{ $dur: number; $rev?: boolean; $spin: boolean }>`
    fill: none;
    stroke-linecap: round;
    transform-origin: 60px 60px;
    ${({ $spin, $dur, $rev }) =>
        $spin &&
        css`
            animation: ${$rev ? spinRev : spin} ${$dur}s linear infinite;
        `}
`;

const Core = styled.circle<{ $spin: boolean }>`
    transform-origin: 60px 60px;
    ${({ $spin }) =>
        $spin &&
        css`
            animation: ${pulse} 2.4s ease-in-out infinite;
        `}
`;

interface Props {
    size?: number;
    /** Retrowave palette (true) vs stock Windows blue (false). */
    vapor?: boolean;
    /** Whether the rings animate (turn off for a static favicon-style mark). */
    spinning?: boolean;
}

export const VortexLogo: React.FC<Props> = ({ size = 120, vapor = true, spinning = true }) => {
    const id = vapor ? "vortex-vapor" : "vortex-stock";
    const stops = vapor
        ? ["#ff2d95", "#a14bff", "#00e5d0"]
        : ["#1084d0", "#3fa9f5", "#000080"];
    const coreColor = vapor ? "#ff67c8" : "#5cb9ff";

    return (
        <svg
            viewBox="0 0 120 120"
            width={size}
            height={size}
            role="img"
            aria-label="VortexOS"
            style={{ filter: `drop-shadow(0 0 ${size / 12}px ${stops[0]}88)`, display: "block" }}
        >
            <defs>
                <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={stops[0]} />
                    <stop offset="50%" stopColor={stops[1]} />
                    <stop offset="100%" stopColor={stops[2]} />
                </linearGradient>
                <radialGradient id={`${id}-core`}>
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="55%" stopColor={coreColor} />
                    <stop offset="100%" stopColor={stops[0]} stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* outer ring — slow */}
            <Ring
                cx="60"
                cy="60"
                r="52"
                stroke={`url(#${id}-grad)`}
                strokeWidth="6"
                strokeDasharray="200 127"
                $dur={7}
                $spin={spinning}
            />
            {/* middle ring — faster, reversed */}
            <Ring
                cx="60"
                cy="60"
                r="38"
                stroke={`url(#${id}-grad)`}
                strokeWidth="7"
                strokeDasharray="120 119"
                $dur={4.5}
                $rev
                $spin={spinning}
            />
            {/* inner ring — fastest */}
            <Ring
                cx="60"
                cy="60"
                r="24"
                stroke={`url(#${id}-grad)`}
                strokeWidth="6"
                strokeDasharray="70 80"
                $dur={2.6}
                $spin={spinning}
            />
            {/* glowing core */}
            <Core cx="60" cy="60" r="13" fill={`url(#${id}-core)`} $spin={spinning} />
        </svg>
    );
};

export default VortexLogo;
