export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-bold mb-4">
            Ashmit<span className="text-purple-500">.thumbs</span>
          </h3>
          <p className="text-white/60 text-sm">
            Performance-focused thumbnails designed to increase CTR and grow serious creators.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-white/60 text-sm">Email: yourmail@gmail.com</p>
          <p className="text-white/60 text-sm">WhatsApp: +91XXXXXXXXXX</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <a href="#work" className="block text-white/60 hover:text-white text-sm">Work</a>
          <a href="#pricing" className="block text-white/60 hover:text-white text-sm">Pricing</a>
        </div>

      </div>

      <div className="text-center text-white/40 text-sm mt-12">
        © {new Date().getFullYear()} Ashmit Thumbs. All rights reserved.
      </div>
    </footer>
  );
}