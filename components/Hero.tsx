"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-24">

      {/* Floating Particles */}
<div className="absolute inset-0 -z-10 overflow-hidden">
    <span className="particle p1" />
    <span className="particle p2" />
    <span className="particle p3" />
    <span className="particle p4" />
    <span className="particle p5" />
    <span className="particle p6" />
</div>
      

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -top-32 -left-32" />
      <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl -bottom-32 -right-32" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Thumbnails That <span className="text-purple-500">Print Clicks</span>.
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          I design performance-focused YouTube thumbnails that increase CTR,
          boost views, and grow serious creators.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#work"
            className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 transition font-semibold shadow-lg shadow-purple-600/30"
          >
            View My Work
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 hover:border-purple-500 transition"
          >
            Book a Thumbnail
          </a>
        </div>

      </div>
    </section>
  );
}