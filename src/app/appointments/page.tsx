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
          <span className="section-label">TAKE THE NEXT STEP</span>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl mt-4 mb-4">
            BOOK YOUR <span className="gradient-text">SESSION</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Ready to start training? Schedule a session with our elite coaching staff.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Booking CTA */}
          <div className="glass-amber rounded-sm p-8 sm:p-12 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-8">
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
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
              ONLINE BOOKING COMING SOON
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
              We&apos;re building an online booking system so you can schedule sessions
              at your convenience. In the meantime, contact us directly to set up
              your training.
            </p>
            <Link
              href="/contact"
              className="btn-gold px-10 py-4 rounded-sm text-sm tracking-wider inline-block"
            >
              CONTACT US TO SCHEDULE
            </Link>
          </div>

          {/* Right - Contact Info + Hours */}
          <div className="space-y-6">
            <div className="glass rounded-sm p-8">
              <h3 className="font-display text-2xl text-white mb-6">CONTACT INFO</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm glass-amber flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-wider mb-1">PHONE</p>
                    <p className="text-zinc-300 text-sm">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm glass-amber flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-wider mb-1">EMAIL</p>
                    <p className="text-amber-500 text-sm">info@diamond9athletics.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm glass-amber flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-wider mb-1">LOCATION</p>
                    <p className="text-zinc-300 text-sm">Diamond Nine Athletics<br />Training Facility</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-sm p-8">
              <h3 className="font-display text-2xl text-white mb-6">TRAINING HOURS</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Monday - Friday</span>
                  <span className="text-zinc-300 font-medium">3:00 PM - 9:00 PM</span>
                </div>
                <div className="divider-glow opacity-30" />
                <div className="flex justify-between">
                  <span className="text-zinc-400">Saturday</span>
                  <span className="text-zinc-300 font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="divider-glow opacity-30" />
                <div className="flex justify-between">
                  <span className="text-zinc-400">Sunday</span>
                  <span className="text-zinc-300 font-medium">By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
