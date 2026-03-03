import Link from "next/link";
import type { Metadata } from "next";
import { img } from "@/lib/config";
import { IconField } from "@/components/BaseballIcons";

const downloads = [
  {
    title: "College Throwing Routine",
    desc: "Full in-season & off-season throwing program for college pitchers.",
    file: "/downloads/college-throwing-routine.pdf",
    tag: "COLLEGE",
    tagClass: "pitch-tag-fb",
    icon: "⚾",
  },
  {
    title: "College Plyo Ball Program",
    desc: "Velocity-building plyometric ball program designed for college arms.",
    file: "/downloads/college-plyo.pdf",
    tag: "COLLEGE",
    tagClass: "pitch-tag-fb",
    icon: "🔥",
  },
  {
    title: "High School Throwing Routine",
    desc: "Arm care and throwing schedule built for prep pitchers.",
    file: "/downloads/hs-throwing-routine.pdf",
    tag: "HIGH SCHOOL",
    tagClass: "pitch-tag-sl",
    icon: "⚾",
  },
  {
    title: "High School Plyo Ball Program",
    desc: "Introduction to plyometric training for developing HS arms.",
    file: "/downloads/hs-plyo.pdf",
    tag: "HIGH SCHOOL",
    tagClass: "pitch-tag-sl",
    icon: "🔥",
  },
  {
    title: "Mobility & Strength Guide",
    desc: "Complete mobility and strength training protocol for pitchers at all levels.",
    file: "/downloads/mobility-strength.pdf",
    tag: "ALL LEVELS",
    tagClass: "pitch-tag-cb",
    icon: "💪",
  },
  {
    title: "Summer College Training Flyer",
    desc: "Overview of the Summer College Pitcher program — everything included.",
    file: "/downloads/summer-college-flyer.pdf",
    tag: "SUMMER",
    tagClass: "pitch-tag-ch",
    icon: "☀️",
  },
];

export const metadata: Metadata = {
  title: "Pitching Plans | Diamond Nine Athletics",
  description: "Elite pitching training plans with Rapsodo tracking.",
};

const plans = [
  {
    name: "HALF",
    tag: "QUICK HIT",
    price: "$50",
    sub: "30 min session",
    features: ["30 Min Bullpen","Mechanical Breakdown","Arm Care"],
    featured: false,
    jersey: "½",
    bar: 35,
  },
  {
    name: "SINGLE",
    tag: "ONE TIME",
    price: "$100",
    sub: "60 min session",
    features: ["60 Min Bullpen","Rapsodo Tracking","Throwing Drills","Arm Care"],
    featured: false,
    jersey: "1",
    bar: 55,
  },
  {
    name: "GOLD",
    tag: "GREAT VALUE",
    price: "$275",
    sub: "4 sessions",
    features: ["4 Lessons","1 Media Video","Throwing Plan","Weighted Ball Training","Mobility Training","Rapsodo Tracking","Arm Care"],
    featured: false,
    jersey: "4",
    bar: 78,
  },
  {
    name: "DIAMOND",
    tag: "MOST POPULAR",
    price: "$300",
    sub: "5 sessions",
    features: ["5 Lessons","2 Recruiting Videos","Throwing Plan","Weighted Ball Training","Mobility Training","Rapsodo Tracking","Arm Care"],
    featured: true,
    jersey: "5",
    bar: 100,
  },
];

export default function PitchingPlans() {
  return (
    <main className="pt-16 bg-[#040200]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${img("/images/hero-fenway.jpg")}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/55 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(153,84,210,0.07)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="badge-amber mb-5 inline-flex">⚾ TRAINING PROGRAMS</span>
          <h1 className="font-display leading-none">
            <span className="text-white text-6xl sm:text-8xl lg:text-9xl block">PITCHING</span>
            <span className="gradient-text text-glow text-6xl sm:text-8xl lg:text-9xl block">PLANS</span>
          </h1>
          <div className="divider-glow max-w-[100px] mx-auto mt-6 mb-5" />
          <p className="text-zinc-400 text-sm">Every session tracked with Rapsodo. Every rep has a purpose.</p>
        </div>
      </section>

      {/* ── Pitch Types Strip ────────────────────────────────── */}
      <div className="bg-[#030200] border-y border-[#9954d2]/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">
          <span className="pitch-tag pitch-tag-fb">4-Seam Fastball</span>
          <span className="pitch-tag pitch-tag-sl">Slider</span>
          <span className="pitch-tag pitch-tag-cb">Curveball</span>
          <span className="pitch-tag pitch-tag-ch">Changeup</span>
          <span className="pitch-tag pitch-tag-fb">2-Seam / Sinker</span>
          <span className="pitch-tag pitch-tag-sl">Cutter</span>
          <span className="pitch-tag pitch-tag-cb">12-6 Curve</span>
        </div>
      </div>

      {/* ── Plans Grid ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-end">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden flex flex-col card-lift card-shine ${plan.featured ? "plan-featured card-modern-amber" : "card-modern"}`}
            >
              {plan.featured && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9954d2] to-transparent" />
                  <div className="ribbon">MOST POPULAR</div>
                </>
              )}
              {/* Jersey number watermark */}
              <div className="jersey-num absolute right-2 bottom-[-10px] text-[6rem] opacity-[0.06]">{plan.jersey}</div>

              <div className={`p-6 flex flex-col flex-1 ${plan.featured ? "pt-7" : ""}`}>
                <div className="mb-5">
                  <span className={`text-[10px] tracking-wider font-bold px-2.5 py-1 rounded-full ${plan.featured ? "bg-[#9954d2]/15 text-[#b07adf] border border-[#9954d2]/20" : "bg-zinc-800/60 text-zinc-500 border border-zinc-700/30"}`}>
                    {plan.tag}
                  </span>
                </div>
                <h3 className="font-display text-3xl text-white mb-0.5">{plan.name}</h3>
                <p className="text-zinc-600 text-xs mb-4">{plan.sub}</p>
                <p className="gradient-text font-display text-5xl mb-5">{plan.price}</p>

                {/* Intensity bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-[10px] text-zinc-600 mb-1.5">
                    <span>SESSION VALUE</span>
                    <span className="text-[#9954d2]">{plan.bar}%</span>
                  </div>
                  <div className="velocity-bar-track">
                    <div className="velocity-bar-fill" style={{ width: `${plan.bar}%` }} />
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                      <svg className="w-3.5 h-3.5 text-[#9954d2] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/appointments" className={`text-center py-3.5 rounded-full text-sm tracking-widest font-bold block ${plan.featured ? "btn-gold" : "btn-outline"}`}>
                  SELECT PLAN
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── College Summer ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="relative card-modern-amber rounded-2xl overflow-hidden card-lift card-shine">
          <div className="h-1 bg-gradient-to-r from-transparent via-[#9954d2] to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9954d2]/3 rounded-full blur-[80px]" />
          <div className="jersey-num absolute right-8 bottom-0 text-[12rem] opacity-[0.03]">S</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-8 sm:p-12">
              <span className="badge-amber mb-4 inline-flex"><IconField className="w-3 h-3" /> SUMMER PROGRAM</span>
              <h2 className="font-display text-4xl sm:text-5xl text-white mt-3 mb-2">COLLEGE SUMMER</h2>
              <p className="text-zinc-500 text-sm mb-4">The complete package. Everything a college pitcher needs for summer ball.</p>
              <p className="gradient-text font-display text-7xl mb-2">$1,100</p>
              <p className="text-zinc-600 text-xs mb-8">Full program · All-inclusive</p>
              <Link href="/appointments" className="btn-gold px-10 py-4 rounded-full text-sm tracking-widest font-black inline-block">
                ENROLL NOW
              </Link>
            </div>
            <div className="p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-[#9954d2]/10 flex items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {["A/B/Recovery System","Long Toss Plan","Weekly Live At-Bats","Rapsodo Tracking","Bullpens with Feedback","Plyo Ball + Arm Care","Mobility Training","Video Capture","Workload Management"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <svg className="w-3.5 h-3.5 text-[#9954d2] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Action Photo Strip ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 card-lift">
          <img src={img("/images/athlete-pitching.jpg")} alt="Diamond Nine pitcher in action" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div>
              <span className="badge-amber mb-3 inline-flex">◆ ELITE COACHING</span>
              <h2 className="font-display text-4xl sm:text-5xl text-white leading-none">COACHED BY THE BEST</h2>
              <p className="text-zinc-400 text-sm mt-2">Every session. Every rep. Real feedback from real coaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free Downloads ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-10">
          <p className="section-label mb-3">FREE RESOURCES</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white">WORKOUT <span className="gradient-text">PLANS</span></h2>
          <div className="divider-glow max-w-[100px] mx-auto mt-5 mb-4" />
          <p className="text-zinc-500 text-sm">Download our training programs and start working on your craft today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {downloads.map((dl) => (
            <div key={dl.file} className="relative card-modern rounded-2xl p-6 card-lift flex flex-col group">
              <div className="flex items-start gap-3 mb-4">
                <div className="icon-box flex-shrink-0 text-xl leading-none flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {dl.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`pitch-tag ${dl.tagClass} mb-2 inline-block`}>{dl.tag}</span>
                  <h3 className="text-white font-bold text-sm leading-snug">{dl.title}</h3>
                </div>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed flex-1 mb-5">{dl.desc}</p>
              <a
                href={img(dl.file)}
                download
                className="btn-outline text-center py-3 rounded-full text-xs tracking-widest font-bold flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                DOWNLOAD FREE
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-16 text-center px-6 border-t border-zinc-800/40 bg-[#020101]">
        <p className="font-display text-3xl text-white mb-2">NOT SURE WHICH PLAN?</p>
        <p className="text-zinc-500 text-sm mb-7">Reach out — we&apos;ll help you pick the right one.</p>
        <Link href="/contact" className="btn-outline px-8 py-3.5 rounded-full text-sm tracking-widest inline-block">CONTACT US</Link>
      </section>

    </main>
  );
}
