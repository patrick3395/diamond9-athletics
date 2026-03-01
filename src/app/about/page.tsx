import type { Metadata } from "next";
import Link from "next/link";
import { img } from "@/lib/config";
import { IconBaseball, IconGlove, IconDiamond, IconChart, IconVideo } from "@/components/BaseballIcons";

export const metadata: Metadata = {
  title: "About | Diamond Nine Athletics",
  description: "Meet the elite coaches behind Diamond Nine Athletics.",
};

const coaches = [
  {
    name: "WES GAFFORD",
    title: "HEAD PITCHING COACH",
    jersey: "1",
    bio: "Rapsodo-certified pitching specialist with a data-first approach to velocity and command development.",
    specialties: ["Rapsodo Analytics", "Velocity Development", "Arm Health", "Recruiting Prep"],
    stats: [
      { label: "ATHLETES", value: "300+" },
      { label: "AVG GAIN", value: "+4 MPH" },
    ],
    icon: <IconBaseball className="w-10 h-10 text-amber-400" />,
    pitchFocus: ["4-Seam", "Slider", "Curveball"],
  },
  {
    name: "TURNER OLSON",
    title: "PITCHING COACH",
    jersey: "9",
    bio: "Mechanical precision coach focused on repeatable delivery, command, and long-term arm longevity.",
    specialties: ["Mechanical Analysis", "Weighted Ball", "Live At-Bats", "Video Breakdown"],
    stats: [
      { label: "ATHLETES", value: "200+" },
      { label: "AVG GAIN", value: "+5 MPH" },
    ],
    icon: <IconGlove className="w-10 h-10 text-amber-400" />,
    pitchFocus: ["Sinker", "Changeup", "Cutter"],
  },
];

const pillars = [
  { icon: <IconChart className="w-5 h-5 text-amber-500" />, title: "DATA FIRST",      desc: "Every session logged with Rapsodo. Numbers don't lie." },
  { icon: <IconVideo className="w-5 h-5 text-amber-500" />, title: "VIDEO ANALYSIS",  desc: "Frame-by-frame breakdowns to fix mechanics at the source." },
  { icon: <IconGlove className="w-5 h-5 text-amber-500" />, title: "ARM LONGEVITY",   desc: "Train hard without destroying your arm. That's the protocol." },
  { icon: <IconDiamond className="w-5 h-5 text-amber-500" />, title: "REAL RESULTS",  desc: "500+ athletes improved. Average +4–6 mph velocity gain." },
];

export default function About() {
  return (
    <main className="pt-16 bg-[#080808]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${img("/images/hero-allstar.jpg")}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(245,158,11,0.07)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="badge-amber mb-5 inline-flex">◆ MEET THE TEAM</span>
          <h1 className="font-display leading-none">
            <span className="text-white text-6xl sm:text-8xl lg:text-9xl block">THE</span>
            <span className="gradient-text text-glow text-6xl sm:text-8xl lg:text-9xl block">COACHES</span>
          </h1>
          <div className="divider-glow max-w-[100px] mx-auto mt-6 mb-4" />
          <p className="text-zinc-400 text-sm">Built on data. Defined by results.</p>
        </div>
      </section>

      {/* ── Coach Cards ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coaches.map((coach, i) => (
            <div key={i} className="card-modern rounded-2xl overflow-hidden card-lift group">

              {/* Photo panel — dark with jersey number & accent */}
              <div className="relative h-64 bg-gradient-to-br from-zinc-900 to-[#0a0a0a] flex items-end overflow-hidden">
                {/* Diagonal corner accent */}
                <div className="coach-accent" />
                {/* Grid pattern */}
                <div className="absolute inset-0 grid-bg opacity-15" />
                {/* Giant jersey number watermark */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-[10rem] leading-none text-white/[0.04] select-none pointer-events-none">
                  #{coach.jersey}
                </div>
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-amber-500/8 border border-amber-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {coach.icon}
                  </div>
                </div>
                {/* Stats overlay at bottom */}
                <div className="relative z-10 w-full p-4 bg-gradient-to-t from-zinc-950 to-transparent flex items-center gap-3 flex-wrap">
                  {coach.stats.map((s, j) => (
                    <div key={j} className="scoreboard-panel rounded-lg px-3 py-1.5">
                      <p className="scoreboard-num text-base">{s.value}</p>
                      <p className="scoreboard-label text-[9px]">{s.label}</p>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-1.5 ml-auto">
                    {coach.pitchFocus.map((p, j) => (
                      <span key={j} className={`pitch-tag ${j===0 ? "pitch-tag-fb" : j===1 ? "pitch-tag-sl" : "pitch-tag-cb"}`}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-7">
                <p className="section-label mb-1">{coach.title}</p>
                <h2 className="font-display text-3xl text-white mb-3">{coach.name}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{coach.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((s, j) => (
                    <span key={j} className="text-[10px] text-amber-500/70 bg-amber-500/8 border border-amber-500/15 px-3 py-1 rounded-full tracking-wide">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#070707] border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">OUR APPROACH</p>
            <h2 className="font-display text-4xl sm:text-5xl text-white">THE <span className="gradient-text">PHILOSOPHY</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <div key={i} className="card-modern rounded-2xl p-5 card-lift group text-center">
                <div className="icon-box mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                <h3 className="font-display text-lg text-white mb-2">{p.title}</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission quote ────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="card-modern-amber rounded-2xl p-10 sm:p-14 relative overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent absolute top-0 left-8 right-8" />
          <div className="absolute inset-0 stripe-card" />
          <IconDiamond className="w-8 h-8 text-amber-500/40 mx-auto mb-5 relative z-10" />
          <p className="font-display text-xl sm:text-2xl text-white leading-relaxed relative z-10">
            &ldquo;DATA-DRIVEN TRAINING. ELITE INSTRUCTION. EVERY ATHLETE LEAVES BETTER THAN THEY ARRIVED.&rdquo;
          </p>
          <div className="divider-glow max-w-[80px] mx-auto mt-7 relative z-10" />
          <div className="mt-8 relative z-10">
            <Link href="/appointments" className="btn-gold px-8 py-3.5 rounded-full text-sm tracking-widest font-black inline-block">
              BOOK A SESSION
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
