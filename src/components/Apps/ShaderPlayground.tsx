import { useEffect, useRef, useState } from "react";
import { AppShell, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";

/**
 * Vortex Shader Playground — a live GLSL fragment-shader editor. Write a
 * Shadertoy-style `mainImage(out vec4 fragColor, in vec2 fragCoord)` using the
 * uniforms iResolution / iTime / iMouse; it compiles + renders live on a WebGL
 * fullscreen quad. Hand-rolled WebGL, no libraries.
 */
const VERT = "attribute vec2 a_pos; void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }";
const HEADER = `precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec4 iMouse;
`;
const FOOTER = `
void main(){ vec4 c = vec4(0.0); mainImage(c, gl_FragCoord.xy); gl_FragColor = vec4(c.rgb, 1.0); }`;

const PRESETS: Record<string, string> = {
    Plasma: `// classic plasma
void mainImage(out vec4 o, in vec2 frag){
  vec2 uv = frag / iResolution.xy;
  float t = iTime;
  float v = sin(uv.x*10.0 + t) + sin(uv.y*10.0 + t)
          + sin((uv.x+uv.y)*8.0 + t) + sin(length(uv-0.5)*16.0 - t*2.0);
  vec3 col = 0.5 + 0.5*cos(vec3(0.0,2.0,4.0) + v + t);
  o = vec4(col, 1.0);
}`,
    Ripples: `// radial ripples from the mouse
void mainImage(out vec4 o, in vec2 frag){
  vec2 uv = (frag - 0.5*iResolution.xy) / iResolution.y;
  vec2 m = (iMouse.xy - 0.5*iResolution.xy) / iResolution.y;
  float d = length(uv - m);
  float w = sin(d*40.0 - iTime*5.0) * exp(-d*3.0);
  vec3 col = 0.5 + 0.5*cos(vec3(0.0,2.0,4.0) + w*6.0 + iTime);
  o = vec4(col, 1.0);
}`,
    Tunnel: `// swirling tunnel
void mainImage(out vec4 o, in vec2 frag){
  vec2 uv = (frag - 0.5*iResolution.xy) / iResolution.y;
  float a = atan(uv.y, uv.x);
  float r = length(uv);
  float v = sin(a*6.0 + 1.0/r + iTime*2.0);
  vec3 col = (0.5 + 0.5*cos(vec3(0.0,2.0,4.0) + v + iTime)) * smoothstep(0.0,0.4,r);
  o = vec4(col, 1.0);
}`,
    Grid: `// vaporwave perspective grid
void mainImage(out vec4 o, in vec2 frag){
  vec2 uv = frag / iResolution.xy;
  vec3 sky = mix(vec3(0.1,0.0,0.3), vec3(1.0,0.3,0.6), uv.y);
  vec3 col = sky;
  if(uv.y < 0.5){
    vec2 g = vec2(uv.x-0.5, 0.5-uv.y);
    g.x /= max(g.y, 0.02);
    float line = max(abs(fract(g.x*4.0)-0.5), abs(fract(g.y*6.0 + iTime)-0.5));
    col = mix(vec3(0.0,0.9,0.9), sky, smoothstep(0.45,0.5,line));
  }
  o = vec4(col, 1.0);
}`,
};

const ShaderPlayground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const glRef = useRef<WebGLRenderingContext | null>(null);
    const progRef = useRef<WebGLProgram | null>(null);
    const locRef = useRef<{ res: WebGLUniformLocation | null; time: WebGLUniformLocation | null; mouse: WebGLUniformLocation | null }>({ res: null, time: null, mouse: null });
    const raf = useRef(0);
    const start = useRef(0);
    const mouse = useRef<[number, number, number, number]>([0, 0, 0, 0]);

    const [code, setCode] = useState(PRESETS.Plasma);
    const [error, setError] = useState<string | null>(null);

    // one-time GL init
    useEffect(() => {
        const cv = canvasRef.current;
        if (!cv) return;
        const gl = cv.getContext("webgl") || (cv.getContext("experimental-webgl") as WebGLRenderingContext | null);
        if (!gl) { setError("WebGL is not available."); return; }
        glRef.current = gl;
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

        const fit = () => {
            const r = cv.getBoundingClientRect();
            cv.width = Math.max(1, Math.round(r.width));
            cv.height = Math.max(1, Math.round(r.height));
            gl.viewport(0, 0, cv.width, cv.height);
        };
        fit();
        const ro = new ResizeObserver(fit);
        ro.observe(cv);
        start.current = performance.now();
        compile(code);

        const render = () => {
            const g = glRef.current;
            const p = progRef.current;
            if (g && p) {
                g.useProgram(p);
                const t = (performance.now() - start.current) / 1000;
                g.uniform3f(locRef.current.res, cv.width, cv.height, 1);
                g.uniform1f(locRef.current.time, t);
                g.uniform4f(locRef.current.mouse, mouse.current[0], mouse.current[1], mouse.current[2], mouse.current[3]);
                const loc = g.getAttribLocation(p, "a_pos");
                g.bindBuffer(g.ARRAY_BUFFER, buf);
                g.enableVertexAttribArray(loc);
                g.vertexAttribPointer(loc, 2, g.FLOAT, false, 0, 0);
                g.drawArrays(g.TRIANGLE_STRIP, 0, 4);
            }
            raf.current = requestAnimationFrame(render);
        };
        render();
        return () => { cancelAnimationFrame(raf.current); ro.disconnect(); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const shader = (gl: WebGLRenderingContext, type: number, src: string): { ok: WebGLShader } | { err: string } => {
        const s = gl.createShader(type)!;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            const err = gl.getShaderInfoLog(s) || "compile error";
            gl.deleteShader(s);
            return { err };
        }
        return { ok: s };
    };

    const compile = (src: string) => {
        const gl = glRef.current;
        if (!gl) return;
        const frag = shader(gl, gl.FRAGMENT_SHADER, HEADER + src + FOOTER);
        if ("err" in frag) { setError(frag.err); return; }
        const vert = shader(gl, gl.VERTEX_SHADER, VERT);
        if ("err" in vert) { setError(vert.err); return; }
        const prog = gl.createProgram()!;
        gl.attachShader(prog, vert.ok);
        gl.attachShader(prog, frag.ok);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            setError(gl.getProgramInfoLog(prog) || "link error");
            return;
        }
        if (progRef.current) gl.deleteProgram(progRef.current);
        progRef.current = prog;
        locRef.current = {
            res: gl.getUniformLocation(prog, "iResolution"),
            time: gl.getUniformLocation(prog, "iTime"),
            mouse: gl.getUniformLocation(prog, "iMouse"),
        };
        setError(null);
    };

    // auto-recompile (debounced) as you type
    useEffect(() => {
        const id = setTimeout(() => compile(code), 500);
        return () => clearTimeout(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code]);

    const onMouse = (e: React.PointerEvent) => {
        const cv = canvasRef.current;
        if (!cv) return;
        const r = cv.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * cv.width;
        const y = (1 - (e.clientY - r.top) / r.height) * cv.height;
        mouse.current = [x, y, e.buttons ? 1 : 0, 0];
    };

    return (
        <AppShell $minW={560} $minH={360}>
            <Toolbar style={{ gap: 6 }}>
                <label style={{ fontSize: 12 }}>Preset:</label>
                <select onChange={(e) => { if (PRESETS[e.target.value]) setCode(PRESETS[e.target.value]); }} style={{ fontFamily: "inherit" }} defaultValue="Plasma">
                    {Object.keys(PRESETS).map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                <ToolSep />
                <ToolButton onClick={() => compile(code)}>▶ Compile</ToolButton>
                <span style={{ fontSize: 11, color: error ? "#a00" : "#080" }}>{error ? "✗ error" : "✓ compiled"}</span>
            </Toolbar>
            <div style={{ flex: 1, minHeight: 0, display: "flex" }}>
                {/* editor */}
                <div style={{ width: "46%", minWidth: 0, display: "flex", flexDirection: "column", borderRight: "1px solid #808080" }}>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        spellCheck={false}
                        style={{ flex: 1, resize: "none", border: "none", outline: "none", padding: 8, fontFamily: "'Lucida Console', monospace", fontSize: 12, lineHeight: 1.4, background: "#1e1e1e", color: "#d4d4d4", whiteSpace: "pre" }}
                    />
                    {error && (
                        <div style={{ maxHeight: 90, overflow: "auto", background: "#2a0000", color: "#ff8080", fontFamily: "monospace", fontSize: 11, padding: 6, whiteSpace: "pre-wrap" }}>{error}</div>
                    )}
                </div>
                {/* live canvas */}
                <div style={{ flex: 1, minWidth: 0, position: "relative", background: "#000" }}>
                    <canvas ref={canvasRef} onPointerMove={onMouse} onPointerDown={onMouse} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                </div>
            </div>
            <StatusBar>
                <StatusPanel $flex={1}>Shader Playground — iResolution · iTime · iMouse</StatusPanel>
                <StatusPanel>GLSL</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default ShaderPlayground;
