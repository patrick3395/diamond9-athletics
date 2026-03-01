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
  },
  {
    name: "Turner Olson",
    role: "Pitching Coach",
    bio: "Turner specializes in Rapsodo data analysis and using technology to drive player development. With a deep understanding of pitch design, spin efficiency, and movement profiles, Turner helps athletes understand exactly what their pitches are doing and how to optimize them. His data-driven approach has helped numerous pitchers develop elite-level arsenals and earn college recruiting attention.",
  },
];

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-500 font-bold tracking-[0.3em] text-sm mb-4">
            OUR TEAM
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-wider mb-4">
            MEET THE <span className="text-amber-500">COACHES</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Our coaching staff brings elite-level experience and cutting-edge
            technology to every training session.
          </p>
        </div>
      </section>

      {/* Coaches */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden hover:border-amber-500/30 transition-all duration-300 group"
            >
              {/* Placeholder Image */}
              <div className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-zinc-500">
                    {coach.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black tracking-wider mb-1">
                  {coach.name}
                </h3>
                <p className="text-amber-500 font-bold text-sm tracking-wider mb-4">
                  {coach.role}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {coach.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-zinc-900/50 py-20 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-wider mb-6">
            OUR <span className="text-amber-500">MISSION</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
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
      </section>
    </main>
  );
}
