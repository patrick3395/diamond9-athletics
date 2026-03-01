import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
        {/* Background layers */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px]" />

        {/* Rotating diamond watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            className="w-[600px] h-[600px] animate-spin-slow opacity-[0.02]"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <polygon points="50,5 95,50 50,95 5,50" />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up mb-6">
            <span className="section-label">─── ELITE BASEBALL TRAINING ───</span>
          </div>

          <h1 className="animate-fade-in-up-delay mb-2">
            <span className="font-display gradient-text-white block text-6xl sm:text-8xl lg:text-[10rem] leading-none">
              ELEVATE
            </span>
            <span className="font-display gradient-text text-glow block text-6xl sm:text-8xl lg:text-[10rem] leading-none">
              YOUR GAME
            </span>
          </h1>

          <p className="animate-fade-in-up-delay-2 text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
            Data-driven pitching development powered by Rapsodo technology. Train with elite coaches who have developed 500+ athletes.
          </p>

          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="btn-gold animate-pulse-glow px-10 py-4 rounded-sm text-sm tracking-wider inline-block text-center"
            >
              BOOK A SESSION
            </Link>
            <Link
              href="/pitching-plans"
              className="btn-outline px-10 py-4 rounded-sm text-sm tracking-wider inline-block text-center"
            >
              VIEW TRAINING PLANS
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-amber-500/50 to-transparent" />
        </div>
      </section>

      {/* ───── STATS BAR ───── */}
      <section className="bg-[#0d0d0d] border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="group">
            <p className="font-display text-5xl gradient-text group-hover:text-glow transition-all duration-300">
              500+
            </p>
            <p className="text-zinc-500 text-xs tracking-[0.2em] mt-2">ATHLETES TRAINED</p>
          </div>
          <div className="group relative">
            <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-zinc-800" />
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-zinc-800" />
            <p className="font-display text-5xl gradient-text group-hover:text-glow transition-all duration-300">
              2
            </p>
            <p className="text-zinc-500 text-xs tracking-[0.2em] mt-2">ELITE COACHES</p>
          </div>
          <div className="group">
            <p className="font-display text-5xl gradient-text group-hover:text-glow transition-all duration-300">
              RAPSODO
            </p>
            <p className="text-zinc-500 text-xs tracking-[0.2em] mt-2">TECHNOLOGY</p>
          </div>
        </div>
      </section>

      {/* ───── TRAINING PLANS ───── */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-label">WHAT WE OFFER</span>
            <h2 className="font-display text-5xl sm:text-6xl mt-4">
              TRAINING <span className="gradient-text">PLANS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pitching Plans Card */}
            <Link
              href="/pitching-plans"
              className="group relative glass-amber border border-amber-500/10 rounded-sm h-72 sm:h-96 overflow-hidden card-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute bottom-4 right-6 font-display text-[8rem] sm:text-[12rem] leading-none text-amber-500/[0.05] select-none">
                01
              </div>
              <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-end">
                <div className="w-12 h-12 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-white mb-2">PITCHING PLANS</h3>
                <p className="text-zinc-400 text-sm mb-6 max-w-sm">
                  Elite pitching development with Rapsodo tracking, arm care protocols, and custom throwing programs.
                </p>
                <span className="text-amber-500 font-bold text-sm tracking-wider group-hover:translate-x-2 inline-block transition-transform duration-300">
                  VIEW PLANS <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </span>
              </div>
            </Link>

            {/* Hitting Plans Card */}
            <div className="group relative glass border border-zinc-800/50 rounded-sm h-72 sm:h-96 overflow-hidden card-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-transparent" />
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute bottom-4 right-6 font-display text-[8rem] sm:text-[12rem] leading-none text-white/[0.03] select-none">
                02
              </div>
              <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-end">
                <div className="w-12 h-12 rounded-sm bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-white mb-2">HITTING PLANS</h3>
                <p className="text-zinc-500 text-sm mb-6 max-w-sm">
                  Data-driven hitting development to maximize exit velocity, launch angle, and overall performance.
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-500 font-bold text-sm tracking-wider">COMING SOON</span>
                  <span className="text-[10px] tracking-wider bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-sm">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHY DIAMOND NINE ───── */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left column */}
            <div>
              <span className="section-label">WHY CHOOSE US</span>
              <h2 className="font-display text-5xl sm:text-6xl mt-4 mb-6">
                WHY <span className="gradient-text">DIAMOND NINE</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
                We combine cutting-edge technology with proven training methods to help athletes reach their full potential. Every session is backed by data and driven by results.
              </p>
              <Link
                href="/about"
                className="btn-outline px-8 py-3 rounded-sm text-sm tracking-wider inline-block"
              >
                MEET THE COACHES
              </Link>
            </div>

            {/* Right column - 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Rapsodo Data */}
              <div className="glass rounded-sm p-6 card-lift">
                <div className="w-10 h-10 rounded-sm glass-amber flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm tracking-wider mb-2">RAPSODO DATA</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Real-time pitch tracking for spin rate, velocity, and movement profiles.</p>
              </div>

              {/* Video Analysis */}
              <div className="glass rounded-sm p-6 card-lift">
                <div className="w-10 h-10 rounded-sm glass-amber flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm tracking-wider mb-2">VIDEO ANALYSIS</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">High-speed video capture and mechanical breakdown for precise adjustments.</p>
              </div>

              {/* Arm Care */}
              <div className="glass rounded-sm p-6 card-lift">
                <div className="w-10 h-10 rounded-sm glass-amber flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm tracking-wider mb-2">ARM CARE</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Comprehensive arm health protocols with mobility work and workload management.</p>
              </div>

              {/* Proven Results */}
              <div className="glass rounded-sm p-6 card-lift">
                <div className="w-10 h-10 rounded-sm glass-amber flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm tracking-wider mb-2">PROVEN RESULTS</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">500+ athletes trained with measurable improvements in velocity and command.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SUMMER TRAINING ───── */}
      <section className="relative py-28 bg-[#080808]">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-label">SEASONAL PROGRAMS</span>
            <h2 className="font-display text-5xl sm:text-6xl mt-4">
              SUMMER <span className="gradient-text">TRAINING</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* College Players - Featured */}
            <div className="relative glass-amber rounded-sm overflow-hidden card-lift">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-amber-500/10 text-amber-500 text-[10px] tracking-wider font-bold px-3 py-1 rounded-sm border border-amber-500/20">
                    FEATURED
                  </span>
                </div>
                <h3 className="font-display text-3xl text-white mb-2">COLLEGE PLAYERS</h3>
                <p className="font-display text-5xl gradient-text mb-6">$1,100</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-zinc-300 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    A/B/Recovery system with full workload management
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Weekly live at-bats and bullpen sessions
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Complete Rapsodo tracking and video capture
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Plyo ball, arm care, and mobility training
                  </li>
                </ul>
                <Link href="/pitching-plans" className="btn-gold px-8 py-3 rounded-sm text-sm tracking-wider inline-block text-center">
                  VIEW PLAN DETAILS
                </Link>
              </div>
            </div>

            {/* High School Players */}
            <div className="relative glass rounded-sm overflow-hidden card-lift">
              <div className="p-8 sm:p-10">
                <h3 className="font-display text-3xl text-white mb-2 mt-8">HIGH SCHOOL PLAYERS</h3>
                <p className="text-zinc-400 text-sm mb-1">Starting from</p>
                <p className="font-display text-5xl gradient-text mb-6">$50</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-zinc-300 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Single sessions to multi-lesson packages
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Rapsodo pitch tracking and analysis
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Video analysis and mechanical breakdown
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Arm care and weighted ball training
                  </li>
                </ul>
                <Link href="/pitching-plans" className="btn-outline px-8 py-3 rounded-sm text-sm tracking-wider inline-block text-center">
                  VIEW PLAN DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.08),transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="font-display text-6xl sm:text-7xl lg:text-9xl leading-none mb-4">
            <span className="gradient-text-white block">READY TO</span>
            <span className="gradient-text text-glow block">GET STARTED?</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12">
            Take the first step toward reaching your potential. Book a session with our elite coaching staff today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="btn-gold px-10 py-4 rounded-sm text-sm tracking-wider inline-block text-center"
            >
              BOOK YOUR FIRST SESSION
            </Link>
            <Link
              href="/contact"
              className="btn-outline px-10 py-4 rounded-sm text-sm tracking-wider inline-block text-center"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
