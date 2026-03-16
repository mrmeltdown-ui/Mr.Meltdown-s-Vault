import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import AdBanner from '../components/AdBanner';
import { games } from '../data/games';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === '`') {
        window.location.href = 'https://classroom.google.com';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      <Navbar onSearch={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 w-full h-[90px] md:h-[120px]">
          <AdBanner dataAdSlot="1234567890" className="w-full h-full" />
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {searchQuery ? 'Search Results' : 'Featured Games'}
          </h1>
          <div className="text-sm text-zinc-500 font-mono">
            {filteredGames.length} games found
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredGames.map((game) => (
              <Link
                key={game.id}
                to={`/play/${game.id}`}
                className="group relative flex flex-col bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="aspect-square w-full overflow-hidden bg-zinc-800 relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-emerald-500 text-zinc-950 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-zinc-100 truncate">{game.title}</h3>
                  <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">{game.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No games found matching "{searchQuery}".</p>
          </div>
        )}

        <div className="mt-12 w-full h-[90px] md:h-[120px]">
          <AdBanner dataAdSlot="0987654321" className="w-full h-full" />
        </div>
      </main>
    </div>
  );
}
