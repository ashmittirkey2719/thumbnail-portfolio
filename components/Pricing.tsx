export default function Pricing() {
  return (
    <section id="pricing" className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Pricing
        </h2>
        <p className="text-white/60 mb-12 max-w-xl">
          Simple pricing. No long-term contracts. Pay only for results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Starter */}
          <div className="rounded-2xl border border-white/10 p-8 hover:border-white/30 transition">
            <h3 className="text-xl text-white mb-2">Starter</h3>
            <p className="text-white/60 mb-6">For new creators</p>
            <p className="text-3xl text-white mb-6">₹499</p>
            <ul className="text-white/70 space-y-3 mb-8">
              <li>✔ 1 Thumbnail</li>
              <li>✔ Fast Delivery</li>
              <li>✔ High CTR Design</li>
            </ul>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-full border border-white/20 py-3 text-white hover:bg-white hover:text-black transition"
            >
              Order Now
            </a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-white p-8 bg-white/5 scale-[1.02]">
            <h3 className="text-xl text-white mb-2">Pro</h3>
            <p className="text-white/60 mb-6">Best for YouTubers</p>
            <p className="text-3xl text-white mb-6">₹1,999</p>
            <ul className="text-white/70 space-y-3 mb-8">
              <li>✔ 5 Thumbnails</li>
              <li>✔ Priority Delivery</li>
              <li>✔ CTR Focused</li>
              <li>✔ 1 Revision</li>
            </ul>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-full bg-white text-black py-3 font-medium hover:opacity-90 transition"
            >
              Most Popular
            </a>
          </div>

          {/* Premium */}
          <div className="rounded-2xl border border-white/10 p-8 hover:border-white/30 transition">
            <h3 className="text-xl text-white mb-2">Premium</h3>
            <p className="text-white/60 mb-6">For serious growth</p>
            <p className="text-3xl text-white mb-6">₹3,999</p>
            <ul className="text-white/70 space-y-3 mb-8">
              <li>✔ 10 Thumbnails</li>
              <li>✔ Fastest Delivery</li>
              <li>✔ A/B Style Thumbnails</li>
              <li>✔ Unlimited Revisions</li>
            </ul>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-full border border-white/20 py-3 text-white hover:bg-white hover:text-black transition"
            >
              Go Premium
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
