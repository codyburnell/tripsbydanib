import { useRef, useEffect, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  label?: string;
}

interface Path {
  from: number;
  to: number;
}

const NODES: Node[] = [
  { x: 12, y: 22, label: "FLY" },
  { x: 28, y: 55 },
  { x: 44, y: 32, label: "STAY" },
  { x: 56, y: 68 },
  { x: 71, y: 40, label: "EXPLORE" },
  { x: 85, y: 24 },
  { x: 38, y: 78 },
  { x: 65, y: 18, label: "RELAX" },
];

const PATHS: Path[] = [
  { from: 0, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 4, to: 5 },
  { from: 3, to: 6 },
];

const PROXIMITY_RADIUS = 160;
const REST_OPACITY = 0.1;
const ACTIVE_OPACITY = 0.7;
const NODE_REST_GLOW = 2;
const NODE_ACTIVE_GLOW = 8;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function dist(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function bezierPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const offset = (Math.abs(x2 - x1) + Math.abs(y2 - y1)) * 0.15;
  const cx1 = lerp(x1, mx, 0.5) + offset * 0.6;
  const cy1 = lerp(y1, my, 0.3) - offset * 0.8;
  const cx2 = lerp(mx, x2, 0.5) - offset * 0.4;
  const cy2 = lerp(my, y2, 0.7) + offset * 0.5;
  return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
}

export default function InteractiveTravelPaths() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const intensitiesRef = useRef<number[]>(NODES.map(() => 0));
  const isVisibleRef = useRef(true);
  const reducedMotionRef = useRef(false);
  const isTouchRef = useRef(false);
  const mobileTimerRef = useRef<number>(0);
  const mobileActiveRef = useRef(0);

  const animate = useCallback(() => {
    const svg = svgRef.current;
    if (!svg || !isVisibleRef.current) {
      animRef.current = requestAnimationFrame(animate);
      return;
    }

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      animRef.current = requestAnimationFrame(animate);
      return;
    }

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    const intensities = intensitiesRef.current;

    for (let i = 0; i < NODES.length; i++) {
      const nx = (NODES[i].x / 100) * rect.width;
      const ny = (NODES[i].y / 100) * rect.height;
      const d = dist(mx, my, nx, ny);
      const target = isTouchRef.current
        ? (i === mobileActiveRef.current ? 0.6 : 0)
        : Math.max(0, 1 - d / PROXIMITY_RADIUS);
      intensities[i] = lerp(intensities[i], target, 0.06);
    }

    const nodeEls = svg.querySelectorAll<SVGCircleElement>("[data-node]");
    const glowEls = svg.querySelectorAll<SVGCircleElement>("[data-glow]");
    const pathEls = svg.querySelectorAll<SVGPathElement>("[data-path]");
    const labelEls = svg.querySelectorAll<SVGTextElement>("[data-label]");

    nodeEls.forEach((el, i) => {
      const intensity = intensities[i];
      const opacity = lerp(REST_OPACITY, ACTIVE_OPACITY, intensity);
      el.setAttribute("opacity", String(opacity));
      el.setAttribute("r", String(lerp(2.5, 4, intensity)));
    });

    glowEls.forEach((el, i) => {
      const intensity = intensities[i];
      const glowR = lerp(NODE_REST_GLOW, NODE_ACTIVE_GLOW, intensity);
      const glowOp = lerp(0.05, 0.35, intensity);
      el.setAttribute("r", String(glowR));
      el.setAttribute("opacity", String(glowOp));
    });

    pathEls.forEach((el) => {
      const from = Number(el.dataset.from);
      const to = Number(el.dataset.to);
      const maxI = Math.max(intensities[from], intensities[to]);
      const opacity = lerp(REST_OPACITY, 0.55, maxI);
      el.setAttribute("opacity", String(opacity));
      el.setAttribute("stroke-width", String(lerp(1, 1.8, maxI)));
    });

    labelEls.forEach((el, i) => {
      const intensity = intensities[i];
      el.setAttribute("opacity", String(lerp(0, 0.6, intensity)));
    });

    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const mqHandler = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", mqHandler);

    isTouchRef.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const onPointerMove = (e: PointerEvent) => {
      if (reducedMotionRef.current || isTouchRef.current) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = { x: -9999, y: -9999 };
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });

    if (isTouchRef.current && !reducedMotionRef.current) {
      const cycleMobile = () => {
        mobileActiveRef.current = (mobileActiveRef.current + 1) % NODES.length;
        mobileTimerRef.current = window.setTimeout(cycleMobile, 3000 + Math.random() * 2000);
      };
      mobileTimerRef.current = window.setTimeout(cycleMobile, 2000);
    }

    if (!reducedMotionRef.current) {
      animRef.current = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(mobileTimerRef.current);
      observer.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
      mq.removeEventListener("change", mqHandler);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {PATHS.map((p, i) => {
          const n1 = NODES[p.from];
          const n2 = NODES[p.to];
          return (
            <path
              key={i}
              data-path=""
              data-from={p.from}
              data-to={p.to}
              d={bezierPath(
                n1.x * 10, n1.y * 6,
                n2.x * 10, n2.y * 6
              )}
              fill="none"
              stroke="#D8B56A"
              strokeWidth="1"
              strokeLinecap="round"
              opacity={REST_OPACITY}
            />
          );
        })}

        {NODES.map((node, i) => (
          <g key={i}>
            <circle
              data-glow=""
              cx={node.x * 10}
              cy={node.y * 6}
              r={NODE_REST_GLOW}
              fill="#D8B56A"
              opacity={0.05}
            />
            <circle
              data-node=""
              cx={node.x * 10}
              cy={node.y * 6}
              r={2.5}
              fill="#FBF7F0"
              opacity={REST_OPACITY}
            />
            {node.label && (
              <text
                data-label=""
                x={node.x * 10}
                y={node.y * 6 - 12}
                textAnchor="middle"
                fill="#D8B56A"
                fontSize="9"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
                letterSpacing="0.12em"
                opacity={0}
              >
                {node.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
