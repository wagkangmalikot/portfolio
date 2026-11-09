import type { Project } from "@/lib/data";

// Generated cover art so every project has a visual without screenshots.
// Swap for a real screenshot later by adding an `image` field to the project.
export function ProjectCover({ project, className = "" }: { project: Project; className?: string }) {
  const c = project.accent;
  return (
    <div
      className={`relative overflow-hidden bg-navy-900 ${className}`}
      style={{ backgroundImage: `radial-gradient(120% 90% at 100% 0%, ${c}33 0%, transparent 60%)` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 225" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {project.pattern === "grid" &&
          Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, col) => {
              const done = (r * 10 + col) % 7 < 4;
              return (
                <rect
                  key={`${r}-${col}`}
                  x={40 + col * 33}
                  y={30 + r * 30}
                  width="22"
                  height="22"
                  rx="5"
                  fill={done ? c : "none"}
                  stroke={c}
                  strokeOpacity={done ? 0 : 0.45}
                  fillOpacity={done ? 0.85 - r * 0.1 : 0}
                />
              );
            }),
          )}
        {project.pattern === "rings" &&
          [150, 115, 80, 45].map((rad, i) => (
            <circle key={rad} cx="300" cy="80" r={rad} fill="none" stroke={c} strokeOpacity={0.25 + i * 0.18} strokeWidth="10" strokeDasharray={i % 2 ? "40 18" : "none"} />
          ))}
        {project.pattern === "reels" &&
          [0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={70 + i * 90} y="40" width="76" height="145" rx="12" fill="#ffffff" fillOpacity="0.06" stroke={c} strokeOpacity="0.5" />
              {[0, 1, 2].map((j) => (
                <circle key={j} cx={108 + i * 90} cy={72 + j * 41} r="14" fill={c} fillOpacity={j === 1 ? 0.95 : 0.35} />
              ))}
            </g>
          ))}
        {project.pattern === "bars" &&
          [60, 110, 85, 140, 120, 165, 150, 185].map((h, i) => (
            <rect key={i} x={50 + i * 40} y={200 - h} width="24" height={h} rx="6" fill={c} fillOpacity={0.3 + i * 0.08} />
          ))}
        {project.pattern === "qr" && (
          <g transform="translate(130 42)">
            <rect x="-10" y="-10" width="160" height="160" rx="14" fill="#ffffff" fillOpacity="0.06" />
            {Array.from({ length: 14 }).map((_, r) =>
              Array.from({ length: 14 }).map((_, col) => {
                const finder = (r < 4 && col < 4) || (r < 4 && col > 9) || (r > 9 && col < 4);
                if (finder || (r * 7 + col * 13 + r * col) % 3 !== 0) return null;
                return <rect key={`${r}-${col}`} x={col * 10} y={r * 10} width="9" height="9" rx="1.5" fill={c} fillOpacity="0.8" />;
              }),
            )}
            {[
              [0, 0],
              [100, 0],
              [0, 100],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <rect x={x} y={y} width="40" height="40" rx="6" fill="none" stroke={c} strokeWidth="6" />
                <rect x={x + 13} y={y + 13} width="14" height="14" rx="2" fill={c} />
              </g>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}
