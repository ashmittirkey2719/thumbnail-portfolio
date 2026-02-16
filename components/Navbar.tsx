'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold tracking-wide text-white">
          Ashmit<span className="text-white/60">.thumbs</span>
        </div>

        <ul className="hidden gap-8 text-sm text-white/80 md:flex">
          <li className="hover:text-white cursor-pointer">Work</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">Testimonials</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

      <a
  href="https://wa.me/91XXXXXXXXXX"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white hover:text-black transition"
>
  WhatsApp
</a>

      </div>
    </nav>
  );
}
