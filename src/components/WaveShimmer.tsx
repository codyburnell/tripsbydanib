import { useRef, useEffect } from "react";

export default function WaveShimmer() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const currentRef = useRef({ x: 0.5, y: 0.7 });
  const isVisibleRef = useRef(true);
  const reducedMotionRef = useRef(false);
  const isTouchRef = useRef(false);
  const mobilePhaseRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onMqChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onMqChange);

    isTouchRef.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const onPointerMove = (e: PointerEvent) => {
      if (reducedMotionRef.current || isTouchRef.current) return;
      const el = overlayRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      if (x >= 0 && y >= 0 && x <= 1 && y <= 1) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = { x: -9999, y: -9999 };
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    if (overlayRef.current) observer.observe(overlayRef.current);

    const loop = () => {
      if (reducedMotionRef.current) {
        animRef.current = requestAnimationFrame(loop);
        return;
      }

      const el = overlayRef.current;
      if (!el || !isVisibleRef.current) {
        animRef.current = requestAnimationFrame(loop);
        return;
      }

      const cur = currentRef.current;
      let targetX: number;
      let targetY: number;
      let intensity: number;

      if (isTouchRef.current) {
        mobilePhaseRef.current += 0.003;
        targetX = 0.55 + Math.sin(mobilePhaseRef.current) * 0.15;
        targetY = 0.6 + Math.cos(mobilePhaseRef.current * 0.7) * 0.1;
        intensity = 0.12 + Math.sin(mobilePhaseRef.current * 1.3) * 0.04;
      } else {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        if (mx < -100) {
          targetX = cur.x;
          targetY = cur.y;
          intensity = 0;
        } else {
          targetX = mx;
          targetY = my;
          const waterStrength = Math.max(0, Math.min(1,
            (my - 0.2) / 0.6 * (mx > 0.15 ? 1 : 0.3)
          ));
          intensity = waterStrength * 0.38;
        }
      }

      cur.x += (targetX - cur.x) * 0.08;
      cur.y += (targetY - cur.y) * 0.08;

      const pxX = (cur.x * 100).toFixed(1);
      const pxY = (cur.y * 100).toFixed(1);

      el.style.setProperty("--wx", `${pxX}%`);
      el.style.setProperty("--wy", `${pxY}%`);
      el.style.setProperty("--wi", String(intensity.toFixed(3)));

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      document.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
      mq.removeEventListener("change", onMqChange);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="wave-shimmer"
      aria-hidden="true"
    />
  );
}
