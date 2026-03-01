import type { Metadata } from "next";
import Link from "next/link";
import NotifyForm from "@/components/NotifyForm";
import { img } from "@/lib/config";
import { IconBat } from "@/components/BaseballIcons";

export const metadata: Metadata = {
  title: "Hitting Plans | Diamond Nine Athletics",
  description: "Hitting training plans coming soon from Diamond Nine Athletics.",
};

export default function HittingPlans() {
  return (
    <main className="pt-16 bg-[#080808]">
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${img("/images/hero-fenway.jpg")}')` }} />
        <div className="absolute inset-0 bg-zinc-950/88" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(245,158,11,0.06)_0%,transparent_100%)]" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl card-modern-amber flex items-center justify-center mx-auto mb-8">
            <IconBat className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none mb-2">
            <span className="text-white">COMING</span>
            <span className="block gradient-text">SOON</span>
          </h1>
          <div className="divider-glow max-w-[80px] mx-auto my-7" />
          <p className="text-zinc-500 text-sm mb-10">Hitting programs launching in 2025. Get notified first.</p>
          <NotifyForm />
          <div className="mt-10">
            <Link href="/pitching-plans" className="btn-outline px-8 py-3 rounded-full text-sm tracking-wider inline-block">
              VIEW PITCHING PLANS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
