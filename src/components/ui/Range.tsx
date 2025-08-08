"use client";
import React from "react";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
  accent?: string; // hex color for fill/thumb, default "#FF7A1A"
  track?: string;  // hex color for unfilled track, default "rgba(255,255,255,0.08)"
};

export default function Range({ min, max, step = 1, value, onChange, accent = "#FF7A1A", track = "rgba(255,255,255,0.08)", ...rest }: Props) {
  const percent = ((value - min) / (max - min)) * 100;

  // Inline background to simulate filled track cross-browser
  const bg = `linear-gradient(90deg, ${accent} ${percent}%, ${track} ${percent}%)`;

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ background: bg }}
      className="
        w-full h-2 rounded-full appearance-none outline-none
        [&::-webkit-slider-runnable-track]:h-2
        [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:h-5
        [&::-webkit-slider-thumb]:w-5
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-[#FF7A1A]
        [&::-webkit-slider-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.4)]
        [&::-webkit-slider-thumb]:mt-[-6px]
        [&::-moz-range-track]:h-2
        [&::-moz-range-track]:rounded-full
        [&::-moz-range-thumb]:h-5
        [&::-moz-range-thumb]:w-5
        [&::-moz-range-thumb]:border-0
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-[#FF7A1A]
        [&::-moz-range-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.4)]
        "
      {...rest}
    />
  );
} 