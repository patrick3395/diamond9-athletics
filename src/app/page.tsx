import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="animate-fade-in-up text-amber-500 font-bold tracking-[0.3em] text-sm mb-6">
            ELITE BASEBALL TRAINING
          </p>
          <h1 className="animate-fade-in-up-delay text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4">
            ELEVATE YOUR
            <span className="block text-amber-500">GAME</span>
          </h1>
          <p className="animate-fade-in-up-delay text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            DIAMOND NINE ATHLETICS
          </p>
          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="animate-pulse-glow bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-sm tracking-wider transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              BOOK NOW
            </Link>
            <Link
              href="/pitching-plans"
              className="border border-zinc-600 hover:border-amber-500 text-white font-bold px-8 py-4 rounded-sm text-sm tracking-wider transition-all duration-200 hover:text-amber-400"
            >
              VIEW PLANS
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="group">
            <p className="text-3xl sm:text-4xl font-black text-amber-500 group-hover:scale-110 transition-transform duration-200">
              500+
            </p>
            <p className="text-zinc-400 text-sm tracking-wider mt-1">ATHLETES TRAINED</p>
          </div>
          <div className="group">
            <p className="text-3xl sm:text-4xl font-black text-amber-500 group-hover:scale-110 transition-transform duration-200">
              2
            </p>
            <p className="text-zinc-400 text-sm tracking-wider mt-1">ELITE COACHES</p>
          </div>
          <div className="group">
            <p className="text-3xl sm:text-4xl font-black text-amber-500 group-hover:scale-110 transition-transform duration-200">
              RAPSODO
            </p>
            <p className="text-zinc-400 text-sm tracking-wider mt-1">TECHNOLOGY</p>
          </div>
        </div>
      </section>

      {/* Training Cards */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/pitching-plans"
            className="group relative bg-zinc-900 border border-zinc-800 rounded-sm p-10 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-amber-500 text-5xl mb-4">⚾</div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-wider mb-3">
                PITCHING PLANS
              </h3>
              <p className="text-zinc-400 mb-6">
                Elite pitching development with Rapsodo tracking, arm care protocols, and custom throwing programs.
              </p>
              <span className="text-amber-500 font-bold text-sm tracking-wider group-hover:translate-x-2 inline-block transition-transform duration-200">
                VIEW PLANS →
              </span>
            </div>
          </Link>
          <Link
            href="/hitting-plans"
            className="group relative bg-zinc-900 border border-zinc-800 rounded-sm p-10 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-amber-500 text-5xl mb-4">🏟️</div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-wider mb-3">
                HITTING PLANS
              </h3>
              <p className="text-zinc-400 mb-6">
                Data-driven hitting development to maximize exit velocity, launch angle, and overall performance.
              </p>
              <span className="text-amber-500 font-bold text-sm tracking-wider group-hover:translate-x-2 inline-block transition-transform duration-200">
                VIEW PLANS →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Diamond Nine */}
      <section className="bg-zinc-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-wider text-center mb-4">
            WHY <span className="text-amber-500">DIAMOND NINE</span>
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            We combine cutting-edge technology with proven training methods to help athletes reach their full potential.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📊",
                title: "RAPSODO TECH",
                desc: "Real-time pitch tracking data to analyze spin rate, velocity, and movement profiles.",
              },
              {
                icon: "💪",
                title: "ARM CARE",
                desc: "Comprehensive arm health protocols including mobility work, band exercises, and workload management.",
              },
              {
                icon: "🎥",
                title: "VIDEO ANALYSIS",
                desc: "High-speed video capture and breakdown of mechanics for precise adjustments.",
              },
              {
                icon: "🏆",
                title: "PROVEN RESULTS",
                desc: "500+ athletes trained with measurable improvements in velocity, command, and overall performance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 hover:border-amber-500/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="text-white font-black tracking-wider text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Training */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl font-black tracking-wider text-center mb-12">
          SUMMER <span className="text-amber-500">TRAINING</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-sm p-10 hover:border-amber-500/30 transition-all duration-300">
            <h3 className="text-2xl font-black tracking-wider mb-4">
              COLLEGE PLAYERS
            </h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Comprehensive summer program designed for college athletes looking to maintain and improve their skills during the off-season. Includes A/B/Recovery system, live at-bats, and full Rapsodo tracking.
            </p>
            <Link
              href="/pitching-plans"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-sm text-sm tracking-wider transition-all duration-200 inline-block"
            >
              VIEW COLLEGE PLAN
            </Link>
          </div>
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-sm p-10 hover:border-amber-500/30 transition-all duration-300">
            <h3 className="text-2xl font-black tracking-wider mb-4">
              HIGH SCHOOL PLAYERS
            </h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Tailored training packages for high school athletes preparing for the next level. From single sessions to comprehensive multi-lesson plans with video analysis and Rapsodo data.
            </p>
            <Link
              href="/pitching-plans"
              className="border border-amber-500 hover:bg-amber-500 text-amber-500 hover:text-black font-bold px-6 py-3 rounded-sm text-sm tracking-wider transition-all duration-200 inline-block"
            >
              VIEW HS PLANS
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 py-20 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-wider mb-6">
            READY TO GET <span className="text-amber-500">STARTED?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Take the first step toward reaching your potential. Book a session with our elite coaching staff today.
          </p>
          <Link
            href="/appointments"
            className="animate-pulse-glow bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 rounded-sm text-sm tracking-wider transition-all duration-200 inline-block"
          >
            BOOK NOW
          </Link>
        </div>
      </section>
    </main>
  );
}
