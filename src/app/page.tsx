import Link from "next/link";
import { IconBaseball, IconGlove, IconBat, IconChart, IconVideo, IconTrophy, IconDiamond } from "@/components/BaseballIcons";

const marqueeItems = [
  "⚾ RAPSODO TRACKING",
  "◆ ELITE COACHING",
  "⚾ ARM CARE PROTOCOLS",
  "◆ VIDEO ANALYSIS",
  "⚾ VELOCITY DEVELOPMENT",
  "◆ RECRUITING VIDEOS",
  "⚾ LIVE AT-BATS",
  "◆ WEIGHTED BALL TRAINING",
  "⚾ RAPSODO TRACKING",
  "◆ ELITE COACHING",
  "⚾ ARM CARE PROTOCOLS",
  "◆ VIDEO ANALYSIS",
  "⚾ VELOCITY DEVELOPMENT",
  "◆ RECRUITING VIDEOS",
  "⚾ LIVE AT-BATS",
  "◆ WEIGHTED BALL TRAINING",
];

export default function Home() {
  return (
    <main className="overflow-hidden page-reveal">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(245,158,11,0.07)_0%,transparent_100%)]" />
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px]" />
        <div className="absolute -bottom-60 -right-60 w-[500px] h-[500px] bg-amber-600/4 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.015] animate-spin-slow pointer-events-none">
          <svg viewBox="0 0 100 100" fill="white"><polygon points="50,2 98,50 50,98 2,50"/></svg>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <h1 className="font-display leading-none mb-6">
            <span className="animate-fade-in-up block text-5xl sm:text-8xl lg:text-[10rem] gradient-text-white">ELEVATE</span>
            <div className="divider-glow max-w-[80px] mx-auto my-2 animate-fade-in-up-delay" />
            <span className="animate-fade-in-up-delay block text-5xl sm:text-8xl lg:text-[10rem] gradient-text text-glow">YOUR GAME</span>
          </h1>
          <p className="animate-fade-in-up-delay-2 text-zinc-400 text-base sm:text-lg mb-10">
            Rapsodo-powered training for serious athletes.
          </p>
          <div className="animate-fade-in-up-delay-3 flex flex-row gap-3 justify-center flex-wrap">
            <Link href="/appointments" className="btn-gold animate-pulse-glow px-8 py-3.5 text-sm rounded-full inline-block">
              BOOK NOW
            </Link>
            <Link href="/pitching-plans" className="btn-outline px-8 py-3.5 text-sm rounded-full inline-block">
              VIEW PLANS
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center scroll-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-[#0d0d0d] border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-3 divide-x divide-zinc-800/50 text-center">
            <div className="px-4 py-2 group">
              <p className="font-display text-4xl sm:text-5xl gradient-text group-hover:text-glow transition-all">500+</p>
              <p className="text-zinc-500 text-[11px] tracking-widest mt-1">ATHLETES</p>
            </div>
            <div className="px-4 py-2 group">
              <p className="font-display text-4xl sm:text-5xl gradient-text group-hover:text-glow transition-all">
                <span className="flex items-center justify-center gap-2">
                  2
                  <IconDiamond className="w-5 h-5 text-amber-500 inline-block" />
                </span>
              </p>
              <p className="text-zinc-500 text-[11px] tracking-widest mt-1">COACHES</p>
            </div>
            <div className="px-4 py-2 group flex flex-col items-center justify-center">
              <IconBaseball className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 group-hover:text-amber-400 transition-colors mb-1" />
              <p className="text-zinc-500 text-[11px] tracking-widest mt-1">RAPSODO</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div className="relative bg-amber-500/5 border-b border-amber-500/10 py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="animate-marquee">
            {marqueeItems.map((item, i) => (
              <span key={i} className="inline-block px-6 text-amber-500/60 text-xs font-bold tracking-[0.2em]">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* TRAINING PLANS */}
      <section className="relative py-24 px-6 bg-[#080808]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/3 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl sm:text-7xl text-white">TRAINING <span className="gradient-text">PLANS</span></h2>
            <div className="divider-glow max-w-[120px] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Link href="/pitching-plans" className="group card-lift">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden card-modern-amber border border-amber-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-zinc-950" />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute -right-3 -bottom-3 font-display text-[150px] text-white/[0.03] leading-none select-none">01</div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <IconBaseball className="w-8 h-8 text-amber-400 mb-3" />
                  <h3 className="font-display text-4xl sm:text-5xl text-white mb-1">PITCHING PLANS</h3>
                  <p className="text-zinc-500 text-sm mb-4">From $50 — Rapsodo tracked</p>
                  <span className="flex items-center gap-2 text-amber-400 text-sm font-bold tracking-wider">
                    VIEW PLANS
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{boxShadow:"inset 0 0 0 1px rgba(245,158,11,0.3)"}} />
              </div>
            </Link>

            <Link href="/hitting-plans" className="group card-lift">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden card-modern border border-zinc-800/50">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-950" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute -right-3 -bottom-3 font-display text-[150px] text-white/[0.03] leading-none select-none">02</div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <IconBat className="w-8 h-8 text-zinc-500 mb-3" />
                  <h3 className="font-display text-4xl sm:text-5xl text-white mb-1">HITTING PLANS</h3>
                  <p className="text-zinc-500 text-sm mb-4">Coming soon — stay tuned</p>
                  <span className="flex items-center gap-2 text-zinc-500 text-sm font-bold tracking-wider">
                    COMING 2025
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 text-[10px] border border-zinc-700">SOON</span>
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{boxShadow:"inset 0 0 0 1px rgba(245,158,11,0.15)"}} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY D9 */}
      <section className="relative py-24 px-6 bg-[#0a0a0a]">
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-500/3 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-display text-5xl sm:text-6xl leading-none mb-5">
                <span className="text-white">THE DIAMOND</span>
                <span className="block gradient-text">DIFFERENCE</span>
              </h2>
              <p className="text-zinc-500 text-sm mb-8">Elite tech. Elite coaches. Real results.</p>
              <Link href="/about" className="btn-outline px-8 py-3 text-sm rounded-full inline-block">MEET THE COACHES</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Rapsodo Data", desc: "Velocity, spin & movement — every pitch.", icon: <IconChart className="w-6 h-6 text-amber-500" /> },
                { title: "Video Analysis", desc: "Frame-by-frame mechanical breakdown.", icon: <IconVideo className="w-6 h-6 text-amber-500" /> },
                { title: "Arm Care", desc: "Longevity protocols built in.", icon: <IconGlove className="w-6 h-6 text-amber-500" /> },
                { title: "Proven Results", desc: "500+ athletes improved.", icon: <IconTrophy className="w-6 h-6 text-amber-500" /> },
              ].map((f, i) => (
                <div key={i} className="card-modern rounded-2xl p-5 card-lift group">
                  <div className="icon-box mb-3 group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{f.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUMMER TRAINING */}
      <section className="relative py-24 px-6 bg-[#080808]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl sm:text-7xl text-white">SUMMER <span className="gradient-text">TRAINING</span></h2>
            <div className="divider-glow max-w-[120px] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              {
                tier: "COLLEGE",
                price: "$1,100",
                note: "full program",
                items: ["A/B/Recovery system", "Weekly live at-bats", "Rapsodo tracking", "Recruiting video"],
                featured: true,
              },
              {
                tier: "HIGH SCHOOL",
                price: "From $50",
                note: "per session",
                items: ["Rapsodo feedback", "Mechanical analysis", "Arm care", "Recruiting video"],
                featured: false,
              },
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden card-lift ${plan.featured ? "card-modern-amber border border-amber-500/20" : "card-modern border border-zinc-800/50"}`}>
                {plan.featured && <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />}
                <div className="p-8">
                  <p className="section-label mb-2">{plan.tier} PROGRAM</p>
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="font-display text-5xl gradient-text">{plan.price}</span>
                    <span className="text-zinc-600 text-xs">/ {plan.note}</span>
                  </div>
                  <ul className="space-y-2 mb-7">
                    {plan.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-zinc-300">
                        <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/pitching-plans" className={`block text-center py-3 rounded-full text-sm font-bold tracking-wider ${plan.featured ? "btn-gold" : "btn-outline"}`}>
                    VIEW PLAN
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 px-6 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(245,158,11,0.05)_0%,transparent_100%)]" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none mb-10">
            <span className="text-white">READY</span>
            <span className="block gradient-text text-glow">TO START?</span>
          </h2>
          <Link href="/appointments" className="btn-gold animate-pulse-glow px-12 py-5 text-sm rounded-full inline-block">
            BOOK YOUR SESSION
          </Link>
        </div>
      </section>

    </main>
  );
}
