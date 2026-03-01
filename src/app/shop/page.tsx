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
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-500 font-bold tracking-[0.3em] text-sm mb-4">
            REP THE BRAND
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-wider mb-4">
            DIAMOND NINE <span className="text-amber-500">MERCH</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Gear up with official Diamond Nine Athletics apparel and
            accessories.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden hover:border-amber-500/30 transition-all duration-300 group"
            >
              {/* Placeholder Image */}
              <div className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-center relative z-10">
                  <span className="text-amber-500 text-xl">◆</span>
                  <p className="text-zinc-600 text-xs tracking-wider mt-2">
                    DIAMOND NINE
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold tracking-wider">
                    {product.name}
                  </h3>
                  <span className="text-amber-500 font-black text-lg">
                    {product.price}
                  </span>
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-sm text-sm tracking-wider transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
