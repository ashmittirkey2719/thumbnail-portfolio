import useReveal from "./useReveal";
export default function Pricing(){
  useReveal();
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Elite <span className="text-purple-500">Pricing</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Creator Pack */}
        <div className="p-8 border border-white/10 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Creator Pack</h3>
          <p className="text-purple-500 text-xl mb-6">₹299 – ₹499</p>
          <ul className="space-y-3 text-white/70">
            <li>• 1 Thumbnail</li>
            <li>• 1 Revision</li>
            <li>• 24–48hr Delivery</li>
          </ul>
        </div>

        {/* Growth Pack */}
        <div className="p-8 border border-purple-500 rounded-2xl bg-purple-500/10">
          <h3 className="text-2xl font-bold mb-4">Growth Pack</h3>
          <p className="text-purple-500 text-xl mb-6">₹1599 – ₹1999</p>
          <ul className="space-y-3 text-white/70">
            <li>• 5 Thumbnails</li>
            <li>• Priority Support</li>
            <li>• Optimized For CTR</li>
          </ul>
        </div>

        {/* Domination Pack */}
        <div className="p-8 border border-white/10 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Domination Pack</h3>
          <p className="text-purple-500 text-xl mb-6">₹2999 – ₹3499</p>
          <ul className="space-y-3 text-white/70">
            <li>• 10 Thumbnails</li>
            <li>• Strategy Guidance</li>
            <li>• Fast Turnaround</li>
            <li>• Best Value</li>
          </ul>
        </div>

      </div>
    </section>
  );
}