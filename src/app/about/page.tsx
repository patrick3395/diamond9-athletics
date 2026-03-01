import Link from "next/link";
import type { Metadata } from "next";
import { IconBaseball, IconGlove, IconDiamond } from "@/components/BaseballIcons";

export const metadata: Metadata = {
  title: "About | Diamond Nine Athletics",
  description:
    "Meet the elite coaching staff at Diamond Nine Athletics.",
};

const coaches = [
  {
    name: "Wes Gafford",
    role: "Head Pitching Coach",
    bio: "Elite mechanics and arm health specialist. Hundreds of athletes developed at the high school and college level with measurable velocity gains.",
    specialties: [
      "Biomechanical analysis",
      "Velocity development",
      "Arm health & prevention",
      "Recruiting preparation",
    ],
  },
  {
    name: "Turner Olson",
    role: "Pitching Coach",
    bio: "Rapsodo data and pitch design expert. Turns raw numbers into elite arsenals that get athletes recruited.",
    specialties: [
      "Rapsodo data analysis",
      "Spin efficiency optimization",
      "Movement profile development",
      "Video analysis",
    ],
  },
];

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-[#080808] py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl mb-4">
            <span className="gradient-text">COACHES</span>
          </h1>
        </div>
      </section>

      {/* Coaches */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="glass rounded-sm overflow-hidden card-lift"
            >
              <div className="h-[300px] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                {coach.name === "Wes Gafford" ? (
                  <IconBaseball className="w-16 h-16 text-amber-500/40" />
                ) : (
                  <IconGlove className="w-16 h-16 text-amber-500/40" />
                )}
              </div>

              <div className="p-8">
                <h3 className="font-display text-4xl text-white mb-1">{coach.name}</h3>
                <p className="text-amber-400 tracking-wider text-sm font-medium mb-4">
                  {coach.role.toUpperCase()}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {coach.bio}
                </p>
                <ul className="space-y-2">
                  {coach.specialties.map((specialty) => (
                    <li key={specialty} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="glass-amber rounded-sm p-10 sm:p-14">
            <IconDiamond className="w-8 h-8 text-amber-500/60 mx-auto mb-4" />
            <span className="font-display text-6xl gradient-text leading-none block mb-6">&ldquo;</span>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Elite-level training powered by cutting-edge technology — for every athlete ready to compete.
            </p>
          </div>
          <div className="divider-glow mt-12" />
        </div>
      </section>
    </main>
  );
}
