import Image from 'next/image';

const thumbnails = [
  'https://via.placeholder.com/800x450?text=Thumbnail+Coming+Soon',
  'https://via.placeholder.com/800x450?text=Thumbnail+Coming+Soon',
];



export default function Work() {
  return (
    <section id="work" className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Selected Work
        </h2>
        <p className="text-white/60 mb-12 max-w-xl">
          High-CTR thumbnails crafted to stop the scroll and drive clicks.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {thumbnails.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                width={800}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
