"use client";

import type { FormEvent } from "react";

const plans = [
  "Diamond Plan - $300",
  "Gold Plan - $275",
  "Single Session - $100",
  "Half Session - $50",
  "College Summer - $1,100",
  "Hitting Plans (Coming Soon)",
  "Other",
];

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-500 font-bold tracking-[0.3em] text-sm mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-wider mb-4">
            CONTACT <span className="text-amber-500">US</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have questions about our training programs? Ready to get started?
            Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold tracking-wider text-zinc-300 mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wider text-zinc-300 mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
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
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold tracking-wider text-zinc-300 mb-2">
                  PLAN OF INTEREST
                </label>
                <select className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                  <option value="">Select a plan...</option>
                  {plans.map((plan) => (
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
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-sm tracking-wider transition-all duration-200 w-full sm:w-auto"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
              <h3 className="text-white font-black tracking-wider text-sm mb-4">
                CONTACT INFO
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-500 text-xs tracking-wider mb-1">
                    LOCATION
                  </p>
                  <p className="text-zinc-300 text-sm">
                    Diamond Nine Athletics
                    <br />
                    Training Facility
                  </p>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs tracking-wider mb-1">
                    PHONE
                  </p>
                  <p className="text-zinc-300 text-sm">(555) 123-4567</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs tracking-wider mb-1">
                    EMAIL
                  </p>
                  <p className="text-amber-500 text-sm">
                    info@diamond9athletics.com
                  </p>
                </div>
              </div>
            </div>

            {/* Training Hours */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
              <h3 className="text-white font-black tracking-wider text-sm mb-4">
                TRAINING HOURS
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Monday - Friday</span>
                  <span className="text-zinc-300">3:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Saturday</span>
                  <span className="text-zinc-300">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Sunday</span>
                  <span className="text-zinc-300">By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
