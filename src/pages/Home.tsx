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
    <div className="min-h-screen font-sans selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar onSearch={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10 w-full h-[90px] md:h-[120px]">
          <AdBanner dataAdSlot="1234567890" className="w-full h-full" />
        </div>

        <div className="flex items-center justify-between mb-10">
          <h1 className="graffiti-text text-4xl sm:text-5xl text-cyan-400 drop-shadow-[3px_3px_0_#000] -rotate-1 inline-block">
            {searchQuery ? 'Search Results' : 'Featured Games'}
          </h1>
          <div className="text-sm text-black bg-yellow-400 brutal-box px-3 py-1 font-bold rotate-2">
            {filteredGames.length} GAMES
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {filteredGames.map((game) => (
              <Link
                key={game.id}
                to={`/play/${game.id}`}
                className="group relative flex flex-col bg-zinc-100 p-3 brutal-box even:rotate-1 odd:-rotate-1 hover:rotate-0 hover:z-10"
              >
                <div className="aspect-square w-full overflow-hidden border-2 border-black bg-black relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-fuchsia-500 text-black brutal-box rounded-full p-3 transform scale-50 group-hover:scale-100 transition-all">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <div className="pt-3 pb-1">
                  <h3 className="font-bold text-black text-lg uppercase tracking-tight truncate">{game.title}</h3>
                  <p className="text-sm text-fuchsia-600 font-bold uppercase tracking-wider">{game.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900 brutal-box max-w-2xl mx-auto -rotate-1">
            <p className="graffiti-text text-3xl text-zinc-500">No games found matching "{searchQuery}"</p>
          </div>
        )}

        <div className="mt-16 w-full h-[90px] md:h-[120px]">
          <AdBanner dataAdSlot="0987654321" className="w-full h-full" />
        </div>
      </main>
    </div>
  );
}
