import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop | Diamond Nine Athletics",
  description: "Official Diamond Nine Athletics merchandise.",
};

const products = [
  { name: "D9 Logo Hat", price: "$35", tag: "NEW" },
  { name: "Training Tee", price: "$30", tag: null },
  { name: "Performance Hoodie", price: "$65", tag: "POPULAR" },
  { name: "D9 Snapback", price: "$40", tag: null },
  { name: "Bucket Hat", price: "$32", tag: null },
  { name: "Long Sleeve Tee", price: "$35", tag: null },
];

export default function Shop() {
  return (
    <main className="pt-16 bg-[#080808]">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(245,158,11,0.06)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="badge-amber mb-5 inline-flex">◆ OFFICIAL GEAR</span>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none">
            <span className="text-white">D9</span>
            <span className="block gradient-text">MERCH</span>
          </h1>
          <div className="divider-glow max-w-[100px] mx-auto mt-5" />
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <div key={i} className="card-modern rounded-2xl overflow-hidden card-lift group">
              {/* Product image placeholder */}
              <div className="relative aspect-square bg-gradient-to-br from-zinc-800/40 to-zinc-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <span className="font-display text-5xl sm:text-7xl gradient-text opacity-30 group-hover:opacity-60 transition-opacity duration-300">D9</span>
                {product.tag && (
                  <div className="absolute top-3 right-3">
                    <span className="badge-amber text-[9px]">{product.tag}</span>
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-white font-semibold text-sm mb-1">{product.name}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-amber-400 font-black font-display text-xl">{product.price}</span>
                  <button className="btn-outline text-xs px-4 py-2 rounded-full">ADD</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-700 text-xs mt-10 tracking-wider">FREE SHIPPING OVER $75 &nbsp;·&nbsp; SECURE CHECKOUT</p>
      </section>
    </main>
  );
}
