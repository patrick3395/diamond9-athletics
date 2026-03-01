import type { Metadata } from "next";
import Link from "next/link";
import { IconBaseball, IconGlove, IconDiamond } from "@/components/BaseballIcons";

export const metadata: Metadata = {
  title: "About | Diamond Nine Athletics",
  description: "Meet the elite coaches behind Diamond Nine Athletics.",
};

const coaches = [
  {
    name: "WES GAFFORD",
    title: "HEAD PITCHING COACH",
    bio: "Rapsodo-certified pitching specialist with a data-first approach to velocity and command development.",
    specialties: ["Rapsodo Analytics", "Velocity Development", "Arm Health", "Recruiting Preparation"],
    icon: <IconBaseball className="w-12 h-12 text-amber-400/40" />,
  },
  {
    name: "TURNER OLSON",
    title: "PITCHING COACH",
    bio: "Mechanical precision coach focused on repeatable delivery and long-term arm longevity.",
    specialties: ["Mechanical Analysis", "Weighted Ball Programs", "Live At-Bats", "Video Breakdown"],
    icon: <IconGlove className="w-12 h-12 text-amber-400/40" />,
  },
];

export default function About() {
  return (
    <main className="pt-16 bg-[#080808]">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(245,158,11,0.06)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="badge-amber mb-5 inline-flex">◆ MEET THE TEAM</span>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none">
            <span className="text-white">THE</span>
            <span className="block gradient-text">COACHES</span>
          </h1>
          <div className="divider-glow max-w-[100px] mx-auto mt-5" />
        </div>
      </section>

      {/* Coaches */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coaches.map((coach, i) => (
            <div key={i} className="card-modern rounded-2xl overflow-hidden card-lift">
              {/* Photo placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-zinc-800/60 to-zinc-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  {coach.icon}
                  <span className="text-zinc-600 text-xs tracking-[0.2em]">PHOTO COMING SOON</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-950/80 to-transparent" />
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

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <div className="card-modern-amber rounded-2xl p-10 relative overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent absolute top-0 left-8 right-8" />
          <IconDiamond className="w-8 h-8 text-amber-500/40 mx-auto mb-5" />
          <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
            &ldquo;Data-driven training. Elite instruction. Every athlete leaves better than they arrived.&rdquo;
          </p>
          <div className="divider-glow max-w-[80px] mx-auto mt-7" />
        </div>
      </section>
    </main>
  );
}
