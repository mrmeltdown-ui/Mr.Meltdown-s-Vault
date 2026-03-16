import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Maximize2, ArrowLeft, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import AdBanner from '../components/AdBanner';
import { games } from '../data/games';

export default function GamePlayer() {
  const { id } = useParams<{ id: string }>();
  const game = games.find(g => g.id === id);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === '`') {
        window.location.href = 'https://classroom.google.com';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!game) {
    return <Navigate to="/" replace />;
  }

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (!iframe) return;

    if (!document.fullscreenElement) {
      iframe.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
        
        <div className="hidden lg:block w-[160px] xl:w-[300px] flex-shrink-0">
          <AdBanner dataAdSlot="1111111111" className="w-full h-[600px] sticky top-24" />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Vault</span>
            </Link>
            <h1 className="text-xl font-bold truncate px-4">{game.title}</h1>
            <button 
              onClick={toggleFullscreen}
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-sm transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>
          </div>

          <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
            <iframe
              id="game-iframe"
              src={game.url}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; gamepad"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              title={game.title}
            ></iframe>
          </div>

          <div className="mt-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800/50 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-zinc-400 leading-relaxed">
              <p className="font-medium text-zinc-300 mb-1">Having trouble loading the game?</p>
              <p>Some school networks or adblockers might block external game servers. If the game doesn't load, try disabling your adblocker or checking your network restrictions. Press <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300 font-mono text-xs">Esc</kbd> or <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300 font-mono text-xs">`</kbd> anytime to quickly hide the screen.</p>
            </div>
          </div>

          <div className="mt-6 w-full h-[90px]">
            <AdBanner dataAdSlot="2222222222" className="w-full h-full" />
          </div>
        </div>

        <div className="hidden xl:block w-[300px] flex-shrink-0">
          <AdBanner dataAdSlot="3333333333" className="w-full h-[600px] sticky top-24" />
        </div>

      </main>
    </div>
  );
}
