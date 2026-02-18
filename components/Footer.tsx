export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32 py-10 text-center text-white/60 text-sm">
      <p>
        © {new Date().getFullYear()} Ashmit Thumbs. All rights reserved.
      </p>
      <p className="mt-2">
        Designed for creators who want <span className="text-white">clicks</span>.
      </p>
    </footer>
  );
}
