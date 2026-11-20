"use client";
import { useRef } from "react";

/* 3D tilt wrapper: follows the cursor on desktop, static on touch / reduced motion */
export default function Tilt({ children, className = "", max = 7 }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * max}deg) rotateY(${x * max}deg)`;
  };
  const leave = () => ref.current && (ref.current.style.transform = "");
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`transition-transform duration-300 ease-out will-change-transform motion-reduce:!transform-none ${className}`}
    >
      {children}
    </div>
  );
}

/* Image slot: put your file in /public/images/ceiling/. Shows a rich gradient until the image exists. */
export function ImageSlot({ src, alt = "", className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#1d4a42] via-[#12332e] to-[#0b1f1c] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => (e.currentTarget.style.display = "none")}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
