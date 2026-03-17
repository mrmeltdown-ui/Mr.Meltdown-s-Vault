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
    <div className="min-h-screen font-sans selection:bg-fuchsia-500/30 selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        
        <div className="hidden lg:block w-[160px] xl:w-[300px] flex-shrink-0">
          <AdBanner dataAdSlot="1111111111" className="w-full h-[600px] sticky top-28" />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black brutal-box font-bold hover:bg-yellow-300">
              <ArrowLeft className="w-5 h-5" />
              <span className="uppercase tracking-wider">Back</span>
            </Link>
            <h1 className="graffiti-text text-3xl sm:text-4xl text-cyan-400 drop-shadow-[3px_3px_0_#000] truncate px-4 -rotate-1">{game.title}</h1>
            <button 
              onClick={toggleFullscreen}
              className="flex items-center gap-2 px-4 py-2 bg-fuchsia-500 text-white brutal-box font-bold hover:bg-fuchsia-400"
            >
              <Maximize2 className="w-5 h-5" />
              <span className="hidden sm:inline uppercase tracking-wider">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
            </button>
          </div>

          <div className="relative w-full aspect-video bg-zinc-900 brutal-box p-2">
            <iframe
              id="game-iframe"
              src={game.url}
              className="w-full h-full border-2 border-black bg-black"
              allow="autoplay; fullscreen; gamepad"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              title={game.title}
            ></iframe>
          </div>

          <div className="mt-8 p-5 bg-yellow-400 text-black brutal-box rotate-1 flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
            <div className="text-sm font-bold leading-relaxed">
              <p className="text-lg uppercase tracking-tight mb-1">Game blocked?</p>
              <p className="text-zinc-800">Some school networks or adblockers might block external game servers. If the game doesn't load, try disabling your adblocker. Press <kbd className="px-2 py-1 bg-black text-white rounded border-b-2 border-zinc-700 font-mono text-xs mx-1">Esc</kbd> or <kbd className="px-2 py-1 bg-black text-white rounded border-b-2 border-zinc-700 font-mono text-xs mx-1">`</kbd> anytime to quickly hide the screen.</p>
            </div>
          </div>

          <div className="mt-8 w-full h-[90px]">
            <AdBanner dataAdSlot="2222222222" className="w-full h-full" />
          </div>
        </div>

        <div className="hidden xl:block w-[300px] flex-shrink-0">
          <AdBanner dataAdSlot="3333333333" className="w-full h-[600px] sticky top-28" />
        </div>

      </main>
    </div>
  );
}
