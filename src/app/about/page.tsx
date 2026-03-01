import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Diamond Nine Athletics",
  description:
    "Meet the elite coaching staff at Diamond Nine Athletics.",
};

const coaches = [
  {
    name: "Wes Gafford",
    role: "Head Pitching Coach",
    bio: "Wes brings years of experience in elite pitching mechanics and arm health to Diamond Nine Athletics. His approach combines biomechanical analysis with individualized training plans, helping athletes develop repeatable deliveries that maximize velocity while minimizing injury risk. Wes has worked with hundreds of athletes at the high school and college levels, consistently producing measurable results in velocity gains and pitch quality.",
    specialties: [
      "Biomechanical analysis and correction",
      "Velocity development programs",
      "Arm health and injury prevention",
      "College recruiting preparation",
    ],
  },
  {
    name: "Turner Olson",
    role: "Pitching Coach",
    bio: "Turner specializes in Rapsodo data analysis and using technology to drive player development. With a deep understanding of pitch design, spin efficiency, and movement profiles, Turner helps athletes understand exactly what their pitches are doing and how to optimize them. His data-driven approach has helped numerous pitchers develop elite-level arsenals and earn college recruiting attention.",
    specialties: [
      "Rapsodo data analysis and pitch design",
      "Spin efficiency optimization",
      "Movement profile development",
      "Video analysis and mechanical breakdown",
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
          <span className="section-label">OUR TEAM</span>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl mt-4 mb-4">
            MEET THE <span className="gradient-text">COACHES</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Our coaching staff brings elite-level experience and cutting-edge
            technology to every training session.
          </p>
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
              {/* Image Placeholder */}
              <div className="h-[300px] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <svg className="w-16 h-16 text-amber-500/40" viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50,5 95,50 50,95 5,50" />
                </svg>
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
            <span className="font-display text-6xl gradient-text leading-none block mb-6">&ldquo;</span>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              At Diamond Nine Athletics, we believe every athlete deserves access
              to elite-level training. Our mission is to combine cutting-edge
              technology with proven coaching methods to help players at every
              level reach their full potential.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Whether you&apos;re a high school freshman working on your
              fundamentals or a college pitcher preparing for the next season, we
              provide the tools, data, and expertise to help you take your game to
              the next level.
            </p>
          </div>
          <div className="divider-glow mt-12" />
        </div>
      </section>
    </main>
  );
}
