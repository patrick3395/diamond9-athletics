import type { Metadata } from "next";
import NotifyForm from "@/components/NotifyForm";

export const metadata: Metadata = {
  title: "Hitting Plans | Diamond Nine Athletics",
  description:
    "Data-driven hitting development plans coming soon to Diamond Nine Athletics.",
};

const placeholderPlans = [
  { name: "DIAMOND HITTING PLAN", price: "TBD" },
  { name: "GOLD HITTING PLAN", price: "TBD" },
  { name: "SINGLE HITTING SESSION", price: "TBD" },
  { name: "HALF HITTING SESSION", price: "TBD" },
];

export default function HittingPlans() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-500 font-bold tracking-[0.3em] text-sm mb-4">
            SOMETHING BIG IS COMING
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-wider mb-4">
            HITTING <span className="text-amber-500">PLANS</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Our hitting program is currently in development. Sign up below to be
            the first to know when our plans launch.
          </p>
        </div>
      </section>

      {/* Coming Soon Cards */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholderPlans.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-zinc-900 border border-zinc-800 rounded-sm p-6 flex flex-col items-center text-center group overflow-hidden"
            >
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center z-10">
                <span className="bg-amber-500 text-black font-black text-sm px-6 py-2 rounded-sm tracking-wider -rotate-12">
                  COMING SOON
                </span>
              </div>
              <h3 className="text-white font-black tracking-wider text-lg mt-2 mb-2">
                {plan.name}
              </h3>
              <p className="text-4xl font-black text-zinc-600 mb-6">
                {plan.price}
              </p>
              <div className="space-y-3 w-full mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-4 bg-zinc-800 rounded-sm w-full"
                  />
                ))}
              </div>
              <div className="w-full h-12 bg-zinc-800 rounded-sm" />
            </div>
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <section className="bg-zinc-900/50 py-20 border-t border-zinc-800">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black tracking-wider mb-4">
            GET <span className="text-amber-500">NOTIFIED</span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Be the first to know when our hitting plans launch. Enter your email
            below and we&apos;ll keep you updated.
          </p>
          <NotifyForm />
        </div>
      </section>
    </main>
  );
}
