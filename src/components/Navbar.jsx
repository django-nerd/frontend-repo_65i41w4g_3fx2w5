import { Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-full mt-4 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
          <div className="flex items-center gap-3 pl-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500" />
            <span className="text-xs tracking-widest text-gray-600">ITALIAN</span>
            <span className="font-semibold tracking-widest text-gray-900">ULTRA NICHE</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#collection" className="hover:text-gray-900 transition-colors">Collection</a>
            <a href="#philosophy" className="hover:text-gray-900 transition-colors">Philosophy</a>
            <a href="#stockists" className="hover:text-gray-900 transition-colors">Stockists</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3 pr-4">
            <button className="hidden sm:flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/70 border border-white/50">
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
