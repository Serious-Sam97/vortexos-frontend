import { useEffect, useState } from "react";
import { Frame } from "react95";

const Clock: React.FC = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours() % 12;
    const secAngle = sec * 6;
    const minAngle = min * 6 + sec * 0.1;
    const hourAngle = hour * 30 + min * 0.5;

    const hand = (angle: number, length: number, width: number, color: string) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        return <line x1="50" y1="50" x2={50 + length * Math.cos(rad)} y2={50 + length * Math.sin(rad)} stroke={color} strokeWidth={width} strokeLinecap="round" />;
    };

    // calendar for the current month
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthName = now.toLocaleDateString(undefined, { month: "long", year: "numeric" });
    const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

    return (
        <div style={{ padding: 12, display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ textAlign: "center" }}>
                <svg width="120" height="120" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="47" fill="#fff" stroke="#000" strokeWidth="2" />
                    {Array.from({ length: 12 }).map((_, i) => {
                        const a = ((i * 30 - 90) * Math.PI) / 180;
                        return <line key={i} x1={50 + 42 * Math.cos(a)} y1={50 + 42 * Math.sin(a)} x2={50 + 46 * Math.cos(a)} y2={50 + 46 * Math.sin(a)} stroke="#000" strokeWidth="2" />;
                    })}
                    {hand(hourAngle, 24, 3, "#000")}
                    {hand(minAngle, 34, 2, "#000")}
                    {hand(secAngle, 38, 1, "#c0392b")}
                    <circle cx="50" cy="50" r="2" fill="#000" />
                </svg>
                <Frame variant="well" style={{ marginTop: 8, padding: 4, fontFamily: "monospace", fontSize: 16 }}>
                    {now.toLocaleTimeString()}
                </Frame>
            </div>

            <div>
                <div style={{ textAlign: "center", fontWeight: "bold", marginBottom: 4 }}>{monthName}</div>
                <table style={{ borderCollapse: "collapse", fontSize: 12 }}>
                    <thead>
                        <tr>
                            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                                <th key={i} style={{ width: 22, padding: 2, color: "#000080" }}>{d}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: Math.ceil(cells.length / 7) }).map((_, w) => (
                            <tr key={w}>
                                {cells.slice(w * 7, w * 7 + 7).map((day, i) => (
                                    <td
                                        key={i}
                                        style={{
                                            width: 22,
                                            height: 20,
                                            textAlign: "center",
                                            background: day === now.getDate() ? "#000080" : "transparent",
                                            color: day === now.getDate() ? "#fff" : "#000",
                                        }}
                                    >
                                        {day ?? ""}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Clock;
