import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book | Diamond Nine Athletics",
  description: "Book a training session with Diamond Nine Athletics.",
};

export default function Appointments() {
  return (
    <main className="pt-16 bg-[#080808]">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(245,158,11,0.06)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="badge-amber mb-5 inline-flex">◆ GET STARTED</span>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none">
            <span className="text-white">BOOK A</span>
            <span className="block gradient-text">SESSION</span>
          </h1>
          <div className="divider-glow max-w-[100px] mx-auto mt-5" />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Booking card */}
          <div className="card-modern-amber rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <rect x="3" y="4" width="18" height="18" rx="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth={2} strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="font-display text-3xl text-white mb-2">ONLINE BOOKING</h2>
            <p className="text-zinc-500 text-sm mb-7">Coming soon. Contact us to schedule your session.</p>
            <Link href="/contact" className="btn-gold px-8 py-3.5 rounded-full text-sm tracking-wider font-bold">
              CONTACT TO BOOK
            </Link>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div className="card-modern rounded-2xl p-6 space-y-5">
              {[
                { label: "RESPONSE TIME", value: "Within 24 hours", icon: "⚡" },
                { label: "LOCATION", value: "Texas", icon: "📍" },
                { label: "INSTAGRAM", value: "@diamond9athletics", icon: "📸" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="icon-box text-lg">{item.icon}</div>
                  <div>
                    <p className="text-zinc-600 text-[10px] tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-modern rounded-2xl p-6">
              <p className="section-label mb-4">AVAILABLE PLANS</p>
              <div className="space-y-2">
                {[
                  ["Diamond Plan", "$300"],
                  ["Gold Plan", "$275"],
                  ["Single Session", "$100"],
                  ["Half Session", "$50"],
                ].map(([plan, price]) => (
                  <div key={plan} className="flex justify-between items-center text-sm">
                    <span className="text-zinc-400">{plan}</span>
                    <span className="text-amber-400 font-bold">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
