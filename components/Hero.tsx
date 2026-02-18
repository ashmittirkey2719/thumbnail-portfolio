'use client';

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Glow effects */}
      <div className="absolute w-125 h-125 bg-white/5 rounded-full blur-3xl -top-25 -left-25" />
      <div className="absolute w-100 h-100 bg-white/5 rounded-full blur-3xl -bottom-25 -right-25" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60"
        >
          Thumbnail Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Thumbnails that <br />
          <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
            force clicks.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-white/70 text-base md:text-lg mb-10"
        >
          I design high-CTR thumbnails for YouTubers & Instagram creators
          who want more clicks, more views, and stronger personal brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="rounded-full bg-white text-black px-8 py-4 text-sm font-medium"
          >
            View My Work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-8 py-4 text-sm text-white hover:bg-white hover:text-black transition"
          >
            Hire Me on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
