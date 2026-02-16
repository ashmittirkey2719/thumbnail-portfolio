'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-black to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
          Thumbnail Designer
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
          Thumbnails that <br />
          <span className="text-white/60">force clicks.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg mb-10">
          I design high-CTR thumbnails for YouTubers & Instagram creators
          who want more clicks, more views, and stronger personal brands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black hover:bg-white/90 transition"
          >
            View My Work
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-8 py-4 text-sm text-white hover:bg-white hover:text-black transition"
          >
            Hire Me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
