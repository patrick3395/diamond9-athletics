import Link from "next/link";
import { img } from "@/lib/config";
import { IconBaseball, IconGlove, IconBat, IconChart, IconVideo, IconTrophy, IconDiamond } from "@/components/BaseballIcons";

const marqueeItems = [
  "⚾ RAPSODO TRACKING",
  "◆ ELITE COACHING",
  "⚾ ARM CARE PROTOCOLS",
  "◆ VIDEO ANALYSIS",
  "⚾ VELOCITY DEVELOPMENT",
  "◆ RECRUITING VIDEOS",
  "⚾ LIVE AT-BATS",
  "◆ WEIGHTED BALL PROGRAMS",
  "⚾ RAPSODO TRACKING",
  "◆ ELITE COACHING",
  "⚾ ARM CARE PROTOCOLS",
  "◆ VIDEO ANALYSIS",
  "⚾ VELOCITY DEVELOPMENT",
  "◆ RECRUITING VIDEOS",
  "⚾ LIVE AT-BATS",
  "◆ WEIGHTED BALL PROGRAMS",
];

const stats = [
  { num: "500+",  label: "ATHLETES TRAINED" },
  { num: "+4–6",  label: "AVG MPH GAIN"     },
  { num: "2",     label: "ELITE COACHES"    },
  { num: "100%",  label: "DATA DRIVEN"      },
];

const features = [
  {
    title: "Rapsodo Analytics",
    desc: "Velocity, spin rate, break, and ball flight — every pitch measured in real time.",
    icon: <IconChart className="w-6 h-6 text-amber-500" />,
    pitchTags: ["4-Seam", "Slider", "Curveball", "Changeup"],
    bar: 92,
  },
  {
    title: "Video Breakdown",
    desc: "Frame-by-frame mechanical analysis. See what's holding you back.",
    icon: <IconVideo className="w-6 h-6 text-amber-500" />,
    pitchTags: [],
    bar: 88,
  },
  {
    title: "Arm Care Protocol",
    desc: "Longevity-first programming so you throw harder, longer.",
    icon: <IconGlove className="w-6 h-6 text-amber-500" />,
    pitchTags: [],
    bar: 95,
  },
  {
    title: "Proven Results",
    desc: "500+ athletes. Real data. Real improvement every session.",
    icon: <IconTrophy className="w-6 h-6 text-amber-500" />,
    pitchTags: [],
    bar: 100,
  },
];

const steps = [
  { num: "01", title: "CHOOSE A PLAN", desc: "Pick from Half Session to the full College Summer program." },
  { num: "02", title: "BOOK & SHOW UP", desc: "Schedule your session. Bring the effort — we bring the tech." },
  { num: "03", title: "GET THE DATA", desc: "Walk away with Rapsodo numbers, video, and a plan to improve." },
];

export default function Home() {
  return (
    <main className="overflow-hidden page-reveal">

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Stadium background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${img("/images/hero-wrigley.jpg")}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/55 to-zinc-950" />
        {/* Amber radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_65%,rgba(245,158,11,0.07)_0%,transparent_100%)]" />

        {/* Giant watermark "9" */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-display text-[32rem] leading-none text-white/[0.025] select-none pointer-events-none hidden lg:block">9</div>

        {/* Baseball stitching SVG curves */}
        <svg className="absolute bottom-0 left-0 right-0 w-full opacity-10 pointer-events-none" height="80" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="6 6"/>
          <path d="M0,55 C240,95 480,15 720,55 C960,95 1200,15 1440,55" stroke="#f59e0b" strokeWidth="1" fill="none" strokeDasharray="6 6"/>
        </svg>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div className="animate-fade-in-up mb-6">
            <span className="badge-amber">◆ DIAMOND NINE ATHLETICS</span>
          </div>
          <h1 className="font-display leading-none mb-6">
            <span className="animate-fade-in-up block text-5xl sm:text-8xl lg:text-[10rem] gradient-text-white">ELEVATE</span>
            <div className="divider-glow max-w-[80px] mx-auto my-2 animate-fade-in-up-delay" />
            <span className="animate-fade-in-up-delay block text-5xl sm:text-8xl lg:text-[10rem] gradient-text text-glow">YOUR GAME</span>
          </h1>
          <p className="animate-fade-in-up-delay-2 text-zinc-400 text-base sm:text-lg mb-10">
            Rapsodo-powered pitching training. Real data. Real results.
          </p>
          <div className="animate-fade-in-up-delay-3 flex flex-row gap-3 justify-center flex-wrap">
            <Link href="/appointments" className="btn-gold animate-pulse-glow px-8 py-4 text-sm rounded-full inline-block font-black tracking-widest">
              BOOK NOW
            </Link>
            <Link href="/pitching-plans" className="btn-outline px-8 py-4 text-sm rounded-full inline-block tracking-widest">
              VIEW PLANS
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center scroll-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-amber-500/30 to-transparent" />
        </div>
      </section>

      {/* ══ SCOREBOARD STATS ══════════════════════════════════════ */}
      <div className="scoreboard-panel py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-amber-500/10">
            {stats.map((s, i) => (
              <div key={i} className="px-6 py-4 text-center">
                <div className="stat-accent mx-auto" />
                <p className="scoreboard-num text-4xl sm:text-5xl">{s.num}</p>
                <p className="scoreboard-label mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ LED MARQUEE ═══════════════════════════════════════════ */}
      <div className="marquee-led py-3 overflow-hidden relative">
        <div className="marquee-container">
          <div className="animate-marquee flex items-center">
            {marqueeItems.map((item, i) => (
              <span key={i} className="inline-block px-6 marquee-led-text">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ TRAINING PLANS ════════════════════════════════════════ */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${img("/images/hero-allstar.jpg")}')` }} />
        <div className="absolute inset-0 bg-zinc-950/82" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">WHAT WE OFFER</p>
            <h2 className="font-display text-5xl sm:text-7xl text-white">TRAINING <span className="gradient-text">PLANS</span></h2>
            <div className="divider-glow max-w-[120px] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* Pitching — ACTIVE */}
            <Link href="/pitching-plans" className="group card-lift card-shine">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden card-modern-amber stripe-card">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/12 via-zinc-950/80 to-zinc-950" />
                <div className="absolute -right-4 -bottom-4 font-display text-[160px] text-amber-500/5 leading-none select-none">01</div>
                {/* Live indicator */}
                <div className="absolute top-5 left-5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em]">ACTIVE</span>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <IconBaseball className="w-7 h-7 text-amber-400" />
                    <div className="flex gap-1.5 flex-wrap">
                      <span className="pitch-tag pitch-tag-fb">4-Seam</span>
                      <span className="pitch-tag pitch-tag-sl">Slider</span>
                      <span className="pitch-tag pitch-tag-cb">Curve</span>
                    </div>
                  </div>
                  <h3 className="font-display text-5xl sm:text-6xl text-white mb-1">PITCHING</h3>
                  <h3 className="font-display text-5xl sm:text-6xl gradient-text leading-tight mb-3">PLANS</h3>
                  <p className="text-zinc-400 text-sm mb-4">From $50 · Rapsodo tracked every session</p>
                  <span className="flex items-center gap-2 text-amber-400 text-sm font-black tracking-wider">
                    VIEW ALL PLANS
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
                  </span>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow:"inset 0 0 0 1px rgba(245,158,11,0.4)"}} />
              </div>
            </Link>

            {/* Hitting — COMING SOON */}
            <Link href="/hitting-plans" className="group card-lift card-shine">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden card-modern">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-950/80 to-zinc-950" />
                <div className="absolute -right-4 -bottom-4 font-display text-[160px] text-white/[0.03] leading-none select-none">02</div>
                {/* Coming soon badge */}
                <div className="absolute top-5 left-5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-zinc-600" />
                  <span className="text-[10px] text-zinc-500 font-bold tracking-[0.2em]">COMING SOON</span>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <IconBat className="w-7 h-7 text-zinc-500" />
                    <div className="flex gap-1.5 flex-wrap">
                      <span className="pitch-tag pitch-tag-ch">Launch Angle</span>
                      <span className="pitch-tag pitch-tag-fb">Exit Velo</span>
                    </div>
                  </div>
                  <h3 className="font-display text-5xl sm:text-6xl text-white mb-1">HITTING</h3>
                  <h3 className="font-display text-5xl sm:text-6xl text-zinc-600 leading-tight mb-3">PLANS</h3>
                  <p className="text-zinc-600 text-sm mb-4">Get notified when programs launch in 2025</p>
                  <span className="flex items-center gap-2 text-zinc-500 text-sm font-black tracking-wider">
                    NOTIFY ME
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
                  </span>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.08)"}} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-[#070707] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">THE PROCESS</p>
            <h2 className="font-display text-5xl sm:text-7xl text-white">HOW IT <span className="gradient-text">WORKS</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative card-modern rounded-2xl p-8 card-lift group">
                <div className="step-num mb-2">{step.num}</div>
                <h3 className="font-display text-2xl text-white mb-2">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-amber-500/8 border border-amber-500/15 flex items-center justify-center">
                  <span className="text-amber-500/60 text-xs font-black">{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE DIAMOND DIFFERENCE ════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">WHY CHOOSE US</p>
              <h2 className="font-display text-5xl sm:text-6xl leading-none mb-5">
                <span className="text-white">THE DIAMOND</span>
                <span className="block gradient-text">DIFFERENCE</span>
              </h2>
              <p className="text-zinc-500 text-sm mb-8 max-w-xs">Elite tech. Elite coaches. Every session tracked, analyzed, and used to push you further.</p>
              <Link href="/about" className="btn-outline px-8 py-3 text-sm rounded-full inline-block tracking-widest">MEET THE COACHES</Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {features.map((f, i) => (
                <div key={i} className="card-modern rounded-2xl p-6 card-lift group flex items-start gap-5">
                  <div className="icon-box flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1 gap-2">
                      <h3 className="text-white font-bold text-sm">{f.title}</h3>
                      {f.pitchTags.length > 0 && (
                        <div className="flex gap-1 flex-wrap justify-end flex-shrink-0">
                          {f.pitchTags.map((tag, t) => (
                            <span key={t} className={`pitch-tag ${t===0?"pitch-tag-fb":t===1?"pitch-tag-sl":t===2?"pitch-tag-cb":"pitch-tag-ch"}`}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-zinc-600 text-xs mb-3 leading-relaxed">{f.desc}</p>
                    <div className="velocity-bar-track">
                      <div className="velocity-bar-fill" style={{ width: `${f.bar}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SUMMER TRAINING ═══════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-[#080808]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">SEASONAL PROGRAMS</p>
            <h2 className="font-display text-5xl sm:text-7xl text-white">SUMMER <span className="gradient-text">TRAINING</span></h2>
            <div className="divider-glow max-w-[120px] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* College — FEATURED */}
            <div className="rounded-2xl overflow-hidden card-lift card-shine card-modern-amber">
              <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <div className="p-8 sm:p-10 relative overflow-hidden">
                <div className="jersey-num absolute right-2 bottom-0 text-[8rem]">C</div>
                <span className="badge-amber mb-5 inline-flex">★ FLAGSHIP PROGRAM</span>
                <h2 className="font-display text-4xl sm:text-5xl text-white mb-1">COLLEGE SUMMER</h2>
                <div className="flex items-baseline gap-2 mb-7">
                  <span className="font-display text-6xl gradient-text">$1,100</span>
                  <span className="text-zinc-600 text-sm">/ full program</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {["A/B/Recovery System","Long Toss Plan","Weekly Live At-Bats","Rapsodo Tracking","Plyo Ball + Arm Care","Mobility Training","Video Capture","Recruiting Video","Workload Management"].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-zinc-300 text-xs">
                      <svg className="w-3 h-3 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link href="/pitching-plans" className="btn-gold px-10 py-4 rounded-full text-sm tracking-widest font-black inline-block">
                  ENROLL NOW
                </Link>
              </div>
            </div>

            {/* High School */}
            <div className="rounded-2xl overflow-hidden card-lift card-shine card-modern">
              <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              <div className="p-8 sm:p-10 relative overflow-hidden">
                <div className="jersey-num absolute right-2 bottom-0 text-[8rem] opacity-[0.04]">HS</div>
                <span className="badge-amber mb-5 inline-flex">⚾ PREP PROGRAM</span>
                <h2 className="font-display text-4xl sm:text-5xl text-white mb-1">HIGH SCHOOL</h2>
                <div className="flex items-baseline gap-2 mb-7">
                  <span className="font-display text-6xl gradient-text">$50</span>
                  <span className="text-zinc-600 text-sm">/ session — up to $300</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {["Rapsodo Feedback","Mechanical Analysis","Arm Care Protocol","Video Breakdown","Weighted Ball","Recruiting Prep"].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-zinc-300 text-xs">
                      <svg className="w-3 h-3 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link href="/pitching-plans" className="btn-outline px-10 py-4 rounded-full text-sm tracking-widest font-bold inline-block">
                  VIEW PLANS
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${img("/images/batting-cages.jpg")}')` }} />
        <div className="absolute inset-0 bg-zinc-950/87" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(245,158,11,0.08)_0%,transparent_100%)]" />
        <svg className="absolute top-0 left-0 right-0 w-full opacity-10 pointer-events-none" height="60" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30" stroke="#f59e0b" strokeWidth="1" fill="none" strokeDasharray="6 6"/>
        </svg>
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="section-label mb-5">DON&apos;T WAIT</p>
          <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none mb-4">
            <span className="text-white">READY TO</span>
            <span className="block gradient-text text-glow">START?</span>
          </h2>
          <p className="text-zinc-400 text-sm mb-10">Every session is tracked. Every rep counts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments" className="btn-gold animate-pulse-glow px-12 py-5 text-sm rounded-full inline-block font-black tracking-widest">
              BOOK YOUR SESSION
            </Link>
            <Link href="/pitching-plans" className="btn-outline px-12 py-5 text-sm rounded-full inline-block tracking-widest">
              SEE PLANS
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
