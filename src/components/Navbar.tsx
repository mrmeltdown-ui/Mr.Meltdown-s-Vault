import { Search, ShieldAlert, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearch }: { onSearch?: (q: string) => void }) {
  const handlePanic = () => {
    window.location.href = 'https://classroom.google.com';
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-zinc-900 border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group hover:-translate-y-1 transition-transform">
            <div className="p-2 bg-yellow-400 brutal-box -rotate-6 group-hover:rotate-0">
              <Gamepad2 className="w-8 h-8 text-black" />
            </div>
            <span className="graffiti-text text-3xl text-yellow-400 drop-shadow-[2px_2px_0_#000] -rotate-2 mt-2">
              Mr.Meltdown's <span className="text-fuchsia-500">Vault</span>
            </span>
          </Link>

          {onSearch && (
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-black font-bold" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 brutal-box bg-white text-black font-bold placeholder-zinc-500 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="SEARCH THE VAULT..."
                  onChange={(e) => onSearch(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={handlePanic}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white brutal-box font-bold text-lg -rotate-2 hover:rotate-0"
              title="Panic Button (Esc)"
            >
              <ShieldAlert className="w-5 h-5" />
              <span className="hidden sm:inline uppercase tracking-wider">Panic</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
