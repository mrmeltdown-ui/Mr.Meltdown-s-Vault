import { Search, ShieldAlert, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearch }: { onSearch?: (q: string) => void }) {
  const handlePanic = () => {
    window.location.href = 'https://classroom.google.com';
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
              <Gamepad2 className="w-6 h-6 text-emerald-500" />
            </div>
            <span className="font-bold text-xl tracking-tight text-zinc-100">
              Mr.Meltdown's <span className="text-emerald-500">Vault</span>
            </span>
          </Link>

          {onSearch && (
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-zinc-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-zinc-800 rounded-xl leading-5 bg-zinc-900/50 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 sm:text-sm transition-all"
                  placeholder="Search the vault..."
                  onChange={(e) => onSearch(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={handlePanic}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-xl text-sm font-medium transition-colors"
              title="Panic Button (Esc)"
            >
              <ShieldAlert className="w-4 h-4" />
              <span className="hidden sm:inline">Panic</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
