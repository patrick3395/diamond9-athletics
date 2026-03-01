import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Diamond Nine Athletics",
  description: "Diamond Nine Athletics merchandise and apparel.",
};

const products = [
  { name: "D9 Logo Hat", price: "$35" },
  { name: "Training Tee", price: "$30" },
  { name: "Performance Hoodie", price: "$65" },
  { name: "D9 Snapback", price: "$40" },
  { name: "Bucket Hat", price: "$32" },
  { name: "Long Sleeve Tee", price: "$35" },
];

export default function Shop() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-[#080808] py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="section-label">REP THE BRAND</span>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl mt-4 mb-4">
            DIAMOND NINE <span className="gradient-text">MERCH</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Gear up with official Diamond Nine Athletics apparel and accessories.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="glass rounded-sm overflow-hidden card-lift"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <span className="font-display text-7xl gradient-text relative z-10 select-none">D9</span>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold tracking-wider mb-1">{product.name}</h3>
                <p className="text-amber-400 font-black text-lg mb-4">{product.price}</p>
                <button className="btn-outline w-full py-3 text-sm tracking-wider rounded-sm">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-zinc-600 text-sm mt-12 tracking-wider">
          Secure checkout &bull; Free shipping on orders over $75
        </p>
      </section>
    </main>
  );
}
