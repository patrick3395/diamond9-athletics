import type { Metadata } from "next";
import Link from "next/link";
import { img } from "@/lib/config";

export const metadata: Metadata = {
  title: "Book | Diamond Nine Athletics",
  description: "Book a training session with Diamond Nine Athletics.",
};

const bookingSteps = [
  { num: "01", title: "PICK A PLAN",  desc: "Choose from our pitching plans — Half Session to College Summer." },
  { num: "02", title: "REACH OUT",   desc: "DM us on Instagram or send an email with your preferred dates." },
  { num: "03", title: "SHOW UP",     desc: "Come ready to work. Bring your glove. We bring the Rapsodo." },
];

const plans = [
  { name: "Half Session",   price: "$50",    sub: "30 min",        featured: false },
  { name: "Single Session", price: "$100",   sub: "60 min",        featured: false },
  { name: "Gold Plan",      price: "$275",   sub: "4 sessions",    featured: false },
  { name: "Diamond Plan",   price: "$300",   sub: "5 sessions",    featured: true  },
  { name: "College Summer", price: "$1,100", sub: "Full program",  featured: false },
];

export default function Appointments() {
  return (
    <main className="pt-20 bg-[#040200]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${img("/images/batting-cages.jpg")}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(153,84,210,0.07)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="badge-amber mb-5 inline-flex">◆ GET STARTED</span>
          <h1 className="font-display leading-none">
            <span className="text-white text-6xl sm:text-8xl lg:text-9xl block">BOOK A</span>
            <span className="gradient-text text-glow text-6xl sm:text-8xl lg:text-9xl block">SESSION</span>
          </h1>
          <div className="divider-glow max-w-[100px] mx-auto mt-6 mb-4" />
          <p className="text-zinc-400 text-sm">Every session is Rapsodo-tracked. Every rep has data behind it.</p>
        </div>
      </section>

      {/* ── How to Book ──────────────────────────────────────── */}
      <section className="bg-[#020101] border-y border-zinc-800/40 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center mb-10">HOW TO BOOK</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookingSteps.map((step, i) => (
              <div key={i} className="relative card-modern rounded-2xl p-7 card-lift">
                <div className="step-num mb-1">{step.num}</div>
                <h3 className="font-display text-xl text-white mb-2">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[#9954d2]/8 border border-[#9954d2]/15 flex items-center justify-center">
                  <span className="text-[#9954d2]/50 text-xs font-black">{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-14 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Booking CTA card */}
          <div className="card-modern-amber rounded-2xl p-8 sm:p-10 relative overflow-hidden card-lift">
            <div className="h-px bg-gradient-to-r from-transparent via-[#9954d2]/40 to-transparent absolute top-0 left-0 right-0" />
            <div className="jersey-num absolute right-0 bottom-[-20px] text-[8rem] opacity-[0.05]">D9</div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#9954d2]/10 border border-[#9954d2]/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#b07adf]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <rect x="3" y="4" width="18" height="18" rx="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth={2} strokeLinecap="round"/>
                </svg>
              </div>
              <p className="section-label mb-2">READY TO TRAIN?</p>
              <h2 className="font-display text-4xl text-white mb-3">BOOK YOUR SPOT</h2>
              <p className="text-zinc-500 text-sm mb-7">Online booking coming soon. For now, reach out directly — we typically respond within 24 hours.</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/diamond9athletics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold py-4 rounded-full text-sm tracking-widest font-black text-center block"
                >
                  DM ON INSTAGRAM
                </a>
                <Link href="/contact" className="btn-outline py-4 rounded-full text-sm tracking-widest font-bold text-center block">
                  SEND A MESSAGE
                </Link>
              </div>
            </div>
          </div>

          {/* Info column */}
          <div className="space-y-4">
            {/* Quick info */}
            <div className="card-modern rounded-2xl p-6 space-y-4">
              {[
                { label: "RESPONSE TIME", value: "Within 24 hours", icon: "⚡" },
                { label: "LOCATION",      value: "Texas",            icon: "📍" },
                { label: "INSTAGRAM",     value: "@diamond9athletics", icon: "📸" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="icon-box text-lg flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-zinc-600 text-[10px] tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Plan pricing mini-table */}
            <div className="card-modern rounded-2xl p-6">
              <p className="section-label mb-4">AVAILABLE PLANS</p>
              <div className="space-y-2.5">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex justify-between items-center py-1.5 px-2 rounded-lg transition-colors ${plan.featured ? "bg-[#9954d2]/8 border border-[#9954d2]/10" : "hover:bg-zinc-800/20"}`}
                  >
                    <div>
                      <span className="text-sm text-zinc-300">{plan.name}</span>
                      <span className="ml-2 text-zinc-600 text-xs">{plan.sub}</span>
                    </div>
                    <span className={`font-black font-display text-lg ${plan.featured ? "gradient-text" : "text-[#b07adf]"}`}>{plan.price}</span>
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
