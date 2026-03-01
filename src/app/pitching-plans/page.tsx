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
    price: "$300",
    badge: "MOST POPULAR",
    features: [
      "5 Lessons",
      "2 Media/Recruiting Videos",
      "Throwing Plan",
      "Weighted Ball Training",
      "Mobility Training",
      "Rapsodo Pitch Tracking",
      "Arm Care Training",
    ],
    highlight: true,
  },
  {
    name: "GOLD PLAN",
    price: "$275",
    badge: null,
    features: [
      "4 Lessons",
      "1 Media Video",
      "Throwing Plan",
      "Weighted Ball Training",
      "Mobility Training",
      "Rapsodo Tracking",
      "Arm Care Training",
    ],
    highlight: false,
  },
  {
    name: "SINGLE SESSION",
    price: "$100",
    badge: null,
    features: [
      "60 Min Bullpen",
      "Rapsodo Tracking",
      "Throwing Drills",
      "Arm Care",
    ],
    highlight: false,
  },
  {
    name: "HALF SESSION",
    price: "$50",
    badge: null,
    features: [
      "30 Min Bullpen",
      "Mechanical Breakdown",
      "Arm Care",
    ],
    highlight: false,
  },
];

const collegePlan = {
  name: "COLLEGE SUMMER",
  price: "$1,100",
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
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-500 font-bold tracking-[0.3em] text-sm mb-4">
            TRAIN WITH THE BEST
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-wider mb-4">
            PITCHING <span className="text-amber-500">PLANS</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your goals. Every plan includes access to
            our elite coaching staff and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-zinc-900 border rounded-sm p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? "border-amber-500 hover:shadow-amber-500/10"
                  : "border-zinc-800 hover:border-zinc-700 hover:shadow-zinc-900/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-bold text-xs px-4 py-1 rounded-sm tracking-wider">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-white font-black tracking-wider text-lg mt-2 mb-2">
                {plan.name}
              </h3>
              <p className="text-4xl font-black text-amber-500 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-zinc-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-amber-500 mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/appointments"
                className={`text-center font-bold py-3 rounded-sm text-sm tracking-wider transition-all duration-200 block ${
                  plan.highlight
                    ? "bg-amber-500 hover:bg-amber-400 text-black"
                    : "border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                }`}
              >
                GET STARTED
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* College Summer Plan */}
      <section className="bg-zinc-900/50 py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-500/30 rounded-sm p-8 sm:p-12">
            <div className="text-center mb-8">
              <p className="text-amber-500 font-bold tracking-[0.3em] text-sm mb-2">
                SUMMER PROGRAM
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-wider mb-2">
                {collegePlan.name}
              </h2>
              <p className="text-5xl font-black text-amber-500">
                {collegePlan.price}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {collegePlan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-zinc-300 text-sm"
                >
                  <span className="text-amber-500">✓</span>
                  {feature}
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/appointments"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 rounded-sm text-sm tracking-wider transition-all duration-200 inline-block hover:shadow-lg hover:shadow-amber-500/25"
              >
                BOOK SUMMER PROGRAM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center px-4">
        <p className="text-zinc-400 text-lg mb-4">
          Not sure which plan is right for you?
        </p>
        <Link
          href="/contact"
          className="text-amber-500 hover:text-amber-400 font-bold tracking-wider transition-colors"
        >
          CONTACT US FOR A FREE CONSULTATION →
        </Link>
      </section>
    </main>
  );
}
