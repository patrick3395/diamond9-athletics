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
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-500 font-bold tracking-[0.3em] text-sm mb-4">
            TAKE THE NEXT STEP
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-wider mb-4">
            BOOK YOUR <span className="text-amber-500">SESSION</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Ready to start training? Schedule a session with our elite coaching
            staff.
          </p>
        </div>
      </section>

      {/* Booking Widget Placeholder */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8 sm:p-12 text-center">
          <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-wider mb-4">
            SCHEDULE YOUR <span className="text-amber-500">TRAINING</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
            Contact us directly to schedule your session. We&apos;ll work with you
            to find the perfect time and plan for your training needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-sm tracking-wider transition-all duration-200"
            >
              CONTACT US TO SCHEDULE
            </Link>
            <Link
              href="/pitching-plans"
              className="border border-zinc-600 hover:border-amber-500 text-white font-bold px-8 py-4 rounded-sm text-sm tracking-wider transition-all duration-200 hover:text-amber-400"
            >
              VIEW PLANS
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 text-center hover:border-amber-500/30 transition-all duration-300">
            <div className="text-amber-500 text-2xl mb-3">📞</div>
            <p className="text-zinc-500 text-xs tracking-wider mb-1">PHONE</p>
            <p className="text-zinc-300 font-medium">(555) 123-4567</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 text-center hover:border-amber-500/30 transition-all duration-300">
            <div className="text-amber-500 text-2xl mb-3">✉️</div>
            <p className="text-zinc-500 text-xs tracking-wider mb-1">EMAIL</p>
            <p className="text-amber-500 font-medium text-sm">
              info@diamond9athletics.com
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 text-center hover:border-amber-500/30 transition-all duration-300">
            <div className="text-amber-500 text-2xl mb-3">📍</div>
            <p className="text-zinc-500 text-xs tracking-wider mb-1">
              LOCATION
            </p>
            <p className="text-zinc-300 font-medium">Training Facility</p>
          </div>
        </div>
      </section>
    </main>
  );
}
