import useReveal from "./useReveal";
export default function Gallery() {
    useReveal();
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          More <span className="text-purple-500">Work</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <img
            src="/thumbnails/1.png"
            alt="YouTube Thumbnail Design 1"
            className="rounded-xl border border-white/10 hover:scale-105 transition duration-300"
          />
          <img
            src="/thumbnails/2.png"
            alt="YouTube Thumbnail Design 2"
            className="rounded-xl border border-white/10 hover:scale-105 transition duration-300"
          />
          <img
            src="/thumbnails/3.png"
            alt="YouTube Thumbnail Design 3"
            className="rounded-xl border border-white/10 hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
}