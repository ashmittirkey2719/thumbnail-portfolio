export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918114353707"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg hover:scale-105 transition"
    >
      <span className="text-sm font-medium">Chat on WhatsApp</span>
    </a>
  );
}
