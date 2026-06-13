import { useSyncExternalStore } from "react";

/**
 * The performance monitor behind Task Manager's graphs. It's honest: a browser tab can't read
 * the host CPU, so "CPU" is a real main-thread-load proxy measured from requestAnimationFrame
 * frame timing (sustained long frames = the UI thread is busy). Memory uses the real JS heap
 * (performance.memory) where the browser exposes it, falling back to a synthesized estimate.
 */
const HISTORY = 60; // samples kept for the scrolling graph (~1 min at 1Hz)

export interface PerfSample {
    cpu: number; // 0..100 (main-thread busy proxy)
    mem: number; // 0..100 (% of heap budget in use)
    memBytes: number;
    memTotal: number;
    cpuHistory: number[];
    memHistory: number[];
    real: boolean; // true when memory came from performance.memory
}

let cpu = 4;
let mem = 0;
let memBytes = 0;
let memTotal = 0;
let real = false;
const cpuHistory: number[] = new Array(HISTORY).fill(0);
const memHistory: number[] = new Array(HISTORY).fill(0);

let snapshot: PerfSample = build();
function build(): PerfSample {
    return { cpu, mem, memBytes, memTotal, cpuHistory: [...cpuHistory], memHistory: [...memHistory], real };
}

const listeners = new Set<() => void>();
let running = false;
let rafId = 0;
let lastFrame = 0;
let busyAccum = 0;
let frameCount = 0;
let tickId: ReturnType<typeof setInterval> | null = null;

function frame(t: number): void {
    if (lastFrame) {
        const delta = t - lastFrame;
        // Frames longer than the 16.7ms budget indicate the main thread was busy.
        busyAccum += Math.max(0, delta - 16.7);
        frameCount++;
    }
    lastFrame = t;
    rafId = requestAnimationFrame(frame);
}

function sampleMemory(): void {
    const m = (performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    if (m && m.jsHeapSizeLimit) {
        real = true;
        memBytes = m.usedJSHeapSize;
        memTotal = m.jsHeapSizeLimit;
        mem = Math.min(100, Math.round((m.usedJSHeapSize / m.jsHeapSizeLimit) * 100));
    } else {
        // No real heap stats — synthesize a believable, slowly-wandering figure.
        real = false;
        memTotal = 64 * 1024 * 1024;
        memBytes = Math.min(memTotal, memBytes + (frameCount % 3) * 4096 + 1024);
        mem = Math.min(95, Math.round((memBytes / memTotal) * 100));
    }
}

function tick(): void {
    // CPU proxy: how much of the last second the main thread spent over-budget.
    const busyRatio = frameCount > 0 ? Math.min(1, busyAccum / 1000) : 0;
    const target = 3 + Math.round(busyRatio * 97);
    cpu = Math.round(cpu * 0.5 + target * 0.5); // smooth
    busyAccum = 0;
    frameCount = 0;

    sampleMemory();

    cpuHistory.push(cpu);
    cpuHistory.shift();
    memHistory.push(mem);
    memHistory.shift();

    snapshot = build();
    listeners.forEach((l) => l());
}

function start(): void {
    if (running) return;
    running = true;
    lastFrame = 0;
    rafId = requestAnimationFrame(frame);
    tickId = setInterval(tick, 1000);
}
function stop(): void {
    running = false;
    cancelAnimationFrame(rafId);
    if (tickId) clearInterval(tickId);
    tickId = null;
}

export function getPerf(): PerfSample {
    return snapshot;
}

/** Live performance sample; starts the sampler while any component is subscribed. */
export function usePerf(): PerfSample {
    return useSyncExternalStore(
        (cb) => {
            listeners.add(cb);
            if (listeners.size === 1) start();
            return () => {
                listeners.delete(cb);
                if (listeners.size === 0) stop();
            };
        },
        getPerf,
    );
}

/**
 * A stable per-process CPU%/memory figure for the Processes list. Deterministic from the pid
 * so a row doesn't flicker wildly every render, with a little time-based jitter.
 */
export function processUsage(pid: string, second: number): { cpu: number; mem: number } {
    let h = 0;
    for (let i = 0; i < pid.length; i++) h = (h * 31 + pid.charCodeAt(i)) >>> 0;
    const base = h % 7; // 0..6 baseline cpu
    const jitter = (h + second) % 5;
    const memMb = 1.5 + (h % 64) + ((h >> 3) % 10) / 10;
    return { cpu: base + jitter, mem: Math.round(memMb * 10) / 10 };
}
