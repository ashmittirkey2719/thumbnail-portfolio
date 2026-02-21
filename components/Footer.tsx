"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">Ashmit.thumbs</h3>
          <p className="text-white/60">
            Performance-focused thumbnails designed to increase CTR.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-white/60">Email: yourmail@gmail.com</p>
          <p className="text-white/60">WhatsApp: +91XXXXXXXXXX</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <a href="#work" className="block text-white/60 hover:text-purple-400">Work</a>
          <a href="#pricing" className="block text-white/60 hover:text-purple-400">Pricing</a>
        </div>

      </div>

      <p className="text-center text-white/40 mt-10">
        © 2026 Ashmit Thumbs. All rights reserved.
      </p>
    </footer>
  );
}