import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitching Plans | Diamond Nine Athletics",
  description:
    "Elite pitching training plans with Rapsodo tracking, arm care, and video analysis.",
};

const plans = [
  {
    name: "DIAMOND PLAN",
    tag: "MOST POPULAR",
    price: "$300",
    features: [
      "5 Lessons",
      "2 Media/Recruiting Videos",
      "Throwing Plan",
      "Weighted Ball Training",
      "Mobility Training",
      "Rapsodo Pitch Tracking",
      "Arm Care Training",
    ],
    featured: true,
  },
  {
    name: "GOLD PLAN",
    tag: "GREAT VALUE",
    price: "$275",
    features: [
      "4 Lessons",
      "1 Media Video",
      "Throwing Plan",
      "Weighted Ball Training",
      "Mobility Training",
      "Rapsodo Tracking",
      "Arm Care Training",
    ],
    featured: false,
  },
  {
    name: "SINGLE SESSION",
    tag: "ONE TIME",
    price: "$100",
    features: [
      "60 Min Bullpen",
      "Rapsodo Tracking",
      "Throwing Drills",
      "Arm Care",
    ],
    featured: false,
  },
  {
    name: "HALF SESSION",
    tag: "QUICK HIT",
    price: "$50",
    features: [
      "30 Min Bullpen",
      "Mechanical Breakdown",
      "Arm Care",
    ],
    featured: false,
  },
];

const collegePlan = {
  name: "COLLEGE SUMMER PROGRAM",
  price: "$1,100",
  description:
    "Comprehensive summer training designed for college athletes. Full A/B/Recovery system with complete workload management, live at-bats, and elite-level Rapsodo tracking throughout the program.",
  features: [
    "A/B/Recovery System",
    "Long Toss Plan",
    "Weekly Live At-Bats",
    "Rapsodo Tracking",
    "Bullpens with Feedback",
    "Plyo Ball + Arm Care",
    "Mobility Training",
    "Video Capture",
    "Workload Management",
  ],
};

export default function PitchingPlans() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-[#080808] py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="section-label">TRAIN WITH THE BEST</span>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl mt-4 mb-4">
            PITCHING <span className="gradient-text">PLANS</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your goals. Every plan includes access to
            our elite coaching staff and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-sm p-6 flex flex-col card-lift ${
                plan.featured
                  ? "glass-amber"
                  : "glass"
              }`}
            >
              {/* Top glow on featured */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              )}

              <span className={`text-[10px] tracking-wider font-bold px-3 py-1 rounded-sm w-fit mb-4 ${
                plan.featured
                  ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                  : "bg-zinc-800/50 text-zinc-400 border border-zinc-700/30"
              }`}>
                {plan.tag}
              </span>

              <h3 className="font-display text-2xl text-white mb-2">{plan.name}</h3>
              <p className="gradient-text font-black text-4xl mb-6">{plan.price}</p>

              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-zinc-400 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/appointments"
                className={`text-center py-3 rounded-sm text-sm tracking-wider block ${
                  plan.featured ? "btn-gold" : "btn-outline"
                }`}
              >
                SELECT PLAN
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* College Summer Plan */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="glass border border-amber-500/20 rounded-sm overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-8 sm:p-12">
              <span className="section-label">SUMMER PROGRAM</span>
              <h2 className="font-display text-4xl sm:text-5xl text-white mt-3 mb-2">
                {collegePlan.name}
              </h2>
              <p className="gradient-text font-black text-5xl mb-4">{collegePlan.price}</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
                {collegePlan.description}
              </p>
              <Link
                href="/appointments"
                className="btn-gold px-10 py-4 rounded-sm text-sm tracking-wider inline-block text-center"
              >
                ENROLL NOW
              </Link>
            </div>

            {/* Right - checklist grid */}
            <div className="p-8 sm:p-12 bg-white/[0.02] flex items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {collegePlan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center px-4 bg-[#0a0a0a]">
        <p className="font-display text-3xl text-white mb-4">NOT SURE WHICH PLAN?</p>
        <p className="text-zinc-400 mb-6">
          We&apos;ll help you find the perfect training package for your goals.
        </p>
        <Link
          href="/contact"
          className="btn-outline px-8 py-3 rounded-sm text-sm tracking-wider inline-block"
        >
          CONTACT US FOR A FREE CONSULTATION
        </Link>
      </section>
    </main>
  );
}
