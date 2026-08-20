import { useRef, useEffect } from "react";

export default function WaveShimmer() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const curRef = useRef({ x: 50, y: 60 });
  const opacityRef = useRef(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const noHover = window.matchMedia("(hover: none)");

    if (prefersReduced.matches || noHover.matches) return;

    const onPointerMove = (e: PointerEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      if (x >= 0 && y >= 0 && x <= 100 && y <= 100) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = { x: -9999, y: -9999 };
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    if (wrapRef.current) observer.observe(wrapRef.current);

    const loop = () => {
      const el = wrapRef.current;
      if (!el || !isVisibleRef.current) {
        animRef.current = requestAnimationFrame(loop);
        return;
      }

      const cur = curRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const inside = mx > -100;

      const targetOpacity = inside ? 0.75 : 0;
      opacityRef.current += (targetOpacity - opacityRef.current) * 0.07;

      if (inside) {
        cur.x += (mx - cur.x) * 0.1;
        cur.y += (my - cur.y) * 0.1;
      }

      el.style.setProperty("--gx", `${cur.x.toFixed(1)}%`);
      el.style.setProperty("--gy", `${cur.y.toFixed(1)}%`);
      el.style.opacity = opacityRef.current.toFixed(3);

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
    <div ref={wrapRef} className="wave-glow" aria-hidden="true" style={{ opacity: 0 }}>
      <img
        src="/images/hero-beach.webp"
        alt=""
        draggable={false}
      />
    </div>
  );
}
