import Link from "next/link";
import { BUILD_VERSION } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-amber-500 text-xl">◆</span>
              <span className="font-display text-lg text-white">DIAMOND NINE</span>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed">Elite baseball training powered by Rapsodo technology.</p>
          </div>
          {/* Links */}
          <div>
            <p className="text-zinc-500 text-[10px] tracking-widest mb-3">TRAINING</p>
            <div className="space-y-2">
              <Link href="/pitching-plans" className="block text-zinc-400 text-sm hover:text-amber-400 transition-colors">Pitching Plans</Link>
              <Link href="/hitting-plans" className="block text-zinc-400 text-sm hover:text-amber-400 transition-colors">Hitting Plans</Link>
              <Link href="/appointments" className="block text-zinc-400 text-sm hover:text-amber-400 transition-colors">Book Session</Link>
            </div>
          </div>
          <div>
            <p className="text-zinc-500 text-[10px] tracking-widest mb-3">COMPANY</p>
            <div className="space-y-2">
              <Link href="/about" className="block text-zinc-400 text-sm hover:text-amber-400 transition-colors">About</Link>
              <Link href="/shop" className="block text-zinc-400 text-sm hover:text-amber-400 transition-colors">Shop</Link>
              <Link href="/contact" className="block text-zinc-400 text-sm hover:text-amber-400 transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-zinc-500 text-[10px] tracking-widest mb-3">CONNECT</p>
            <div className="space-y-2">
              <a href="https://instagram.com/diamond9athletics" target="_blank" rel="noopener noreferrer" className="block text-zinc-400 text-sm hover:text-amber-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="divider-glow mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-zinc-700 text-xs">© 2025 Diamond Nine Athletics. All rights reserved.</p>
          <p className="text-zinc-800 text-[10px] font-mono">{BUILD_VERSION}</p>
        </div>
      </div>
    </footer>
  );
}
