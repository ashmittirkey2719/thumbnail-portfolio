"use client";
import { useState } from "react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  // round to nearest 10 to match clip classes
  const rounded = Math.round(position / 10) * 10;

  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Before <span className="text-purple-500">vs</span> After
        </h2>
        <p className="text-white/60">
          Scroll-stopping redesign focused on CTR and visibility.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10">

        {/* AFTER */}
        <img
          src="/thumbnails/after.png"
          alt="After Thumbnail"
          className="w-full select-none"
        />

        {/* BEFORE */}
        <div className={`before-mask clip-${rounded}`}>
          <img
            src="/thumbnails/before.png"
            alt="Before Thumbnail"
            className="w-full select-none"
          />
        </div>

        {/* Slider */}
        <label htmlFor="comparison-slider" className="sr-only">
          Compare Before and After
        </label>

        <input
          id="comparison-slider"
          type="range"
          min="0"
          max="100"
          step="10"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 cursor-pointer accent-purple-600"
        />
      </div>
    </section>
  );
}