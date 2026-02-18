"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-105"
    >
      Chat on WhatsApp
    </a>
  );
}
