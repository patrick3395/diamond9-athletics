import Link from "next/link";
import type { Metadata } from "next";
import { img } from "@/lib/config";
import { IconDiamond, IconBaseball, IconGlove, IconBat, IconField } from "@/components/BaseballIcons";

export const metadata: Metadata = {
  title: "Pitching Plans | Diamond Nine Athletics",
  description: "Elite pitching training plans with Rapsodo tracking.",
};

const plans = [
  {
    name: "DIAMOND",
    tag: "MOST POPULAR",
    tagIcon: "◆",
    price: "$300",
    sub: "5 sessions",
    features: ["5 Lessons","2 Recruiting Videos","Throwing Plan","Weighted Ball Training","Mobility Training","Rapsodo Tracking","Arm Care"],
    featured: true,
  },
  {
    name: "GOLD",
    tag: "GREAT VALUE",
    tagIcon: "⚾",
    price: "$275",
    sub: "4 sessions",
    features: ["4 Lessons","1 Media Video","Throwing Plan","Weighted Ball Training","Mobility Training","Rapsodo Tracking","Arm Care"],
    featured: false,
  },
  {
    name: "SINGLE",
    tag: "ONE TIME",
    tagIcon: "●",
    price: "$100",
    sub: "60 min",
    features: ["60 Min Bullpen","Rapsodo Tracking","Throwing Drills","Arm Care"],
    featured: false,
  },
  {
    name: "HALF",
    tag: "QUICK HIT",
    tagIcon: "◗",
    price: "$50",
    sub: "30 min",
    features: ["30 Min Bullpen","Mechanical Breakdown","Arm Care"],
    featured: false,
  },
];

const collegePlan = {
  price: "$1,100",
  features: ["A/B/Recovery System","Long Toss Plan","Weekly Live At-Bats","Rapsodo Tracking","Bullpens with Feedback","Plyo Ball + Arm Care","Mobility Training","Video Capture","Workload Management"],
};

export default function PitchingPlans() {
  return (
    <main className="pt-16 bg-[#080808]">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${img("/images/hero-fenway.jpg")}')` }} />
        <div className="absolute inset-0 bg-zinc-950/58" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(245,158,11,0.06)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="badge-amber mb-5 inline-flex">⚾ TRAINING PROGRAMS</span>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none">
            <span className="text-white">PITCHING</span>
            <span className="block gradient-text">PLANS</span>
          </h1>
          <div className="divider-glow max-w-[100px] mx-auto mt-5" />
        </div>
      </section>

      {/* Plans Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col card-lift ${plan.featured ? "card-modern-amber" : "card-modern"}`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full" />
              )}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-[10px] tracking-wider font-bold px-2.5 py-1 rounded-full ${plan.featured ? "bg-amber-500/15 text-amber-400 border border-amber-500/20" : "bg-zinc-800/60 text-zinc-400 border border-zinc-700/30"}`}>
                  {plan.tagIcon} {plan.tag}
                </span>
              </div>
              <h3 className="font-display text-3xl text-white mb-1">{plan.name}</h3>
              <p className="text-zinc-600 text-xs mb-4">{plan.sub}</p>
              <p className="gradient-text font-black text-5xl mb-6 font-display">{plan.price}</p>
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                    <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/appointments" className={`text-center py-3 rounded-full text-sm tracking-wider font-bold block ${plan.featured ? "btn-gold" : "btn-outline"}`}>
                SELECT PLAN
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* College Summer Plan */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="card-modern-amber rounded-2xl overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="badge-amber mb-4 inline-flex">
                <IconField className="w-3 h-3" /> SUMMER PROGRAM
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-white mt-3 mb-2">COLLEGE SUMMER</h2>
              <p className="gradient-text font-display text-6xl mb-8">{collegePlan.price}</p>
              <Link href="/appointments" className="btn-gold px-10 py-4 rounded-full text-sm tracking-wider inline-block">
                ENROLL NOW
              </Link>
            </div>
            <div className="p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-amber-500/10 flex items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {collegePlan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-6 border-t border-zinc-800/40">
        <p className="font-display text-3xl text-white mb-6">QUESTIONS?</p>
        <Link href="/contact" className="btn-outline px-8 py-3 rounded-full text-sm tracking-wider inline-block">CONTACT US</Link>
      </section>
    </main>
  );
}
