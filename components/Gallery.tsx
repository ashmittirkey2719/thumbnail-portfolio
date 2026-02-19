"use client";

import useReveal from "./useReveal";

const images = [
  "/thumbnails/1.png",
  "/thumbnails/2.png",
  "/thumbnails/3.png",
];

export default function Gallery() {
  useReveal();

  return (
    <section id="gallery" className="bg-black py-24 fade-up">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          More Work
        </h2>

        <p className="text-white/60 mb-12 max-w-xl">
          More high-converting thumbnails designed for creators.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}