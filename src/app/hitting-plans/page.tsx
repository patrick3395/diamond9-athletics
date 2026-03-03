import type { Metadata } from "next";
import Link from "next/link";
import NotifyForm from "@/components/NotifyForm";
import { img } from "@/lib/config";
import { IconBat } from "@/components/BaseballIcons";

export const metadata: Metadata = {
  title: "Hitting Plans | Diamond Nine Athletics",
  description: "Hitting training plans coming soon from Diamond Nine Athletics.",
};

const upcomingFeatures = [
  { tag: "pitch-tag-ch", label: "Exit Velocity",  icon: "💥" },
  { tag: "pitch-tag-fb", label: "Launch Angle",   icon: "📐" },
  { tag: "pitch-tag-sl", label: "Bat Speed",      icon: "⚡" },
  { tag: "pitch-tag-cb", label: "Video Analysis", icon: "🎥" },
];

export default function HittingPlans() {
  return (
    <main className="pt-36 bg-[#040200]">
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${img("/images/hero-fenway.jpg")}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/70 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(153,84,210,0.06)_0%,transparent_100%)]" />

        {/* Giant background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-[16rem] sm:text-[22rem] text-white/[0.018] leading-none">HIT</span>
        </div>

        {/* Baseball stitching SVG */}
        <svg className="absolute bottom-0 left-0 right-0 w-full opacity-8 pointer-events-none" height="60" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30" stroke="#9954d2" strokeWidth="1" fill="none" strokeDasharray="6 6"/>
        </svg>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl card-modern-amber flex items-center justify-center mx-auto mb-8">
            <IconBat className="w-8 h-8 text-[#b07adf]" />
          </div>
          <span className="badge-amber mb-6 inline-flex">◆ DROPPING 2025</span>
          <h1 className="font-display leading-none mb-2">
            <span className="text-white text-6xl sm:text-8xl lg:text-9xl block">COMING</span>
            <span className="gradient-text text-glow text-6xl sm:text-8xl lg:text-9xl block">SOON</span>
          </h1>
          <div className="divider-glow max-w-[80px] mx-auto my-7" />

          {/* Upcoming features */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {upcomingFeatures.map((f, i) => (
              <span key={i} className={`pitch-tag ${f.tag}`}>{f.icon} {f.label}</span>
            ))}
          </div>

          <p className="text-zinc-500 text-sm mb-8">
            Data-driven hitting programs. Launch angle, exit velo, bat speed — all tracked. Get notified when we launch.
          </p>
          <NotifyForm />
          <div className="mt-8">
            <Link href="/pitching-plans" className="btn-outline px-8 py-3.5 rounded-full text-sm tracking-widest inline-block">
              VIEW PITCHING PLANS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
