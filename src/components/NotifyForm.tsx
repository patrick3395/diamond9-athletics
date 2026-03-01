"use client";

export default function NotifyForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 bg-zinc-800 border border-zinc-700 rounded-sm px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
      />
      <button
        type="submit"
        className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-sm text-sm tracking-wider transition-all duration-200 whitespace-nowrap"
      >
        NOTIFY ME
      </button>
    </form>
  );
}
