"use client";
import React from "react";

type Props = {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
  // brand styling
  accentHex?: string; // default orange
  trackHex?: string;  // default dark track
  className?: string;
};

export default function Slider({
  min,
  max,
  step = 1,
  value,
  onChange,
  accentHex = "#FF7A1A",
  trackHex = "rgba(255,255,255,0.10)",
  className = "",
}: Props) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  const bg = `linear-gradient(90deg, ${accentHex} ${pct}%, ${trackHex} ${pct}%)`;

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ background: bg }}
      className={[
        // base
        "w-full h-2 rounded-full appearance-none outline-none",
        // webkit track + thumb
        "[&::-webkit-slider-runnable-track]:h-2",
        "[&::-webkit-slider-runnable-track]:rounded-full",
        "[&::-webkit-slider-thumb]:appearance-none",
        "[&::-webkit-slider-thumb]:h-5",
        "[&::-webkit-slider-thumb]:w-5",
        "[&::-webkit-slider-thumb]:rounded-full",
        "[&::-webkit-slider-thumb]:bg-[#FF7A1A]",
        "hover:[&::-webkit-slider-thumb]:bg-[#FF6A00]",
        "[&::-webkit-slider-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.4)]",
        // align thumb vertically to 8px track
        "[&::-webkit-slider-thumb]:mt-[-6px]",
        // firefox
        "[&::-moz-range-track]:h-2",
        "[&::-moz-range-track]:rounded-full",
        "[&::-moz-range-thumb]:h-5",
        "[&::-moz-range-thumb]:w-5",
        "[&::-moz-range-thumb]:border-0",
        "[&::-moz-range-thumb]:rounded-full",
        "[&::-moz-range-thumb]:bg-[#FF7A1A]",
        "hover:[&::-moz-range-thumb]:bg-[#FF6A00]",
        "[&::-moz-range-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.4)]",
        className,
      ].join(" ")}
    />
  );
} 