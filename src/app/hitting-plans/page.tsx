import type { Metadata } from "next";
import NotifyForm from "@/components/NotifyForm";

export const metadata: Metadata = {
  title: "Hitting Plans | Diamond Nine Athletics",
  description:
    "Data-driven hitting development plans coming soon to Diamond Nine Athletics.",
};

export default function HittingPlans() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-[#080808] py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(245,158,11,0.06)_0%,transparent_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display leading-none mb-4">
            <span className="block text-7xl sm:text-8xl lg:text-9xl gradient-text-white">COMING</span>
            <span className="block text-7xl sm:text-8xl lg:text-9xl gradient-text text-glow">SOON</span>
          </h1>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-[#0a0a0a] border-t border-zinc-800/50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-white mb-6">
            GET <span className="gradient-text">NOTIFIED</span>
          </h2>
          <NotifyForm />
        </div>
      </section>
    </main>
  );
}
