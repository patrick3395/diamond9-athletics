"use client";

import type { FormEvent } from "react";

const planOptions = [
  "Diamond Plan",
  "Gold Plan",
  "Single Session",
  "Half Session",
  "College Summer",
  "High School",
  "Hitting Plans",
];

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-[#080808] py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="section-label">REACH OUT</span>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl mt-4 mb-4">
            GET IN <span className="gradient-text">TOUCH</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have questions about our training programs? Ready to get started?
            Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form - 3 cols */}
          <div className="lg:col-span-3">
            <div className="glass rounded-sm p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold tracking-wider text-zinc-300 mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="bg-zinc-900 border border-zinc-800 focus:border-amber-500/50 text-white px-4 py-3 w-full rounded-sm outline-none transition-all placeholder:text-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-wider text-zinc-300 mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="bg-zinc-900 border border-zinc-800 focus:border-amber-500/50 text-white px-4 py-3 w-full rounded-sm outline-none transition-all placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-wider text-zinc-300 mb-2">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="bg-zinc-900 border border-zinc-800 focus:border-amber-500/50 text-white px-4 py-3 w-full rounded-sm outline-none transition-all placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-wider text-zinc-300 mb-2">
                    PLAN OF INTEREST
                  </label>
                  <select className="bg-zinc-900 border border-zinc-800 focus:border-amber-500/50 text-white px-4 py-3 w-full rounded-sm outline-none transition-all appearance-none">
                    <option value="">Select a plan...</option>
                    {planOptions.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-wider text-zinc-300 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your goals..."
                    className="bg-zinc-900 border border-zinc-800 focus:border-amber-500/50 text-white px-4 py-3 w-full rounded-sm outline-none transition-all placeholder:text-zinc-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold py-4 w-full rounded-sm text-sm tracking-wider"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="glass rounded-sm p-8">
              <h3 className="font-display text-2xl text-white mb-6">CONTACT INFO</h3>
              <div className="space-y-6">
                {/* Location */}
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

                {/* Phone */}
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

                {/* Email */}
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

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm glass-amber flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-wider mb-1">INSTAGRAM</p>
                    <p className="text-amber-500 text-sm">@diamond9athletics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Hours */}
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
