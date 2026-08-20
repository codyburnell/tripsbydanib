import { useRef, useEffect } from "react";

const ZONES = [
  { id: "horizon", min: 0, max: 38 },
  { id: "first-wave", min: 38, max: 68 },
  { id: "foam", min: 68, max: 100 },
] as const;

export default function WaveShimmer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const animRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const activeRef = useRef<number>(-1);
  const insideRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const noHover = window.matchMedia("(hover: none)");

    if (prefersReduced.matches || noHover.matches) return;

    const onPointerMove = (e: PointerEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const x = ((e.clientX - rect.left) / rect.width) * 100;

      if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
        insideRef.current = true;
        let zone = -1;
        for (let i = 0; i < ZONES.length; i++) {
          if (y >= ZONES[i].min && y < ZONES[i].max) { zone = i; break; }
        }
        if (zone === -1 && y >= 100) zone = 2;
        activeRef.current = zone;
      } else {
        insideRef.current = false;
        activeRef.current = -1;
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const loop = () => {
      if (!isVisibleRef.current) {
        animRef.current = requestAnimationFrame(loop);
        return;
      }

      const active = insideRef.current ? activeRef.current : -1;
      for (let i = 0; i < 3; i++) {
        const layer = layersRef.current[i];
        if (layer) {
          layer.style.opacity = active === i ? "0.8" : "0";
        }
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      document.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="wave-glow-container" aria-hidden="true">
      {ZONES.map((zone, i) => (
        <div
          key={zone.id}
          ref={(el) => { layersRef.current[i] = el; }}
          className={`wave-glow-layer wave-glow-${zone.id}`}
        >
          <img src="/images/hero-beach.webp" alt="" draggable={false} />
        </div>
      ))}
    </div>
  );
}
