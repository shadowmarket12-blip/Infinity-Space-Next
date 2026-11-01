"use client";
import { useRef } from "react";

/**
 * Shared 3D tilt wrapper. Children can use style={{ transform: 'translateZ(60px)' }}
 * to float above the surface (the inner wrapper keeps preserve-3d).
 */
export default function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `rotateY(${x * max}deg) rotateX(${-y * max}deg)`;
  };
  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div className={className} style={{ perspective: "1200px" }}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="h-full w-full transition-transform duration-500 ease-out will-change-transform [transform-style:preserve-3d] motion-reduce:!transform-none"
      >
        {children}
      </div>
    </div>
  );
}
