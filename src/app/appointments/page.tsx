import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Session | Diamond Nine Athletics",
  description:
    "Book your baseball training session with Diamond Nine Athletics.",
};

export default function Appointments() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-[#080808] py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl mb-4">
            <span className="gradient-text">BOOK</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="glass-amber rounded-sm p-8 sm:p-14 text-center">
          <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-8 mx-auto">
            <svg
              className="w-10 h-10 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-8">
            ONLINE BOOKING COMING SOON
          </h2>
          <Link
            href="/contact"
            className="btn-gold px-10 py-4 rounded-full text-sm tracking-wider inline-block"
          >
            CONTACT US TO SCHEDULE
          </Link>

          <div className="mt-10 pt-8 border-t border-amber-500/10 flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
            <span>(555) 123-4567</span>
            <span className="text-amber-500">info@diamond9athletics.com</span>
          </div>
        </div>
      </section>
    </main>
  );
}
