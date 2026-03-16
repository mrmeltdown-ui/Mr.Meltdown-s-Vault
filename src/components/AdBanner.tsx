import { useEffect } from 'react';

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  fullWidthResponsive?: boolean;
  className?: string;
}

export default function AdBanner({ 
  dataAdSlot, 
  dataAdFormat = 'auto', 
  fullWidthResponsive = true,
  className = ''
}: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden bg-zinc-900/50 rounded-lg border border-zinc-800 flex items-center justify-center ${className}`}>
      <ins className="adsbygoogle relative z-10"
           style={{ display: 'block', width: '100%', height: '100%' }}
           data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID || "ca-pub-placeholder"}
           data-ad-slot={dataAdSlot}
           data-ad-format={dataAdFormat}
           data-full-width-responsive={fullWidthResponsive.toString()}></ins>
      {/* Fallback for development/adblockers */}
      <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-sm pointer-events-none z-0">
        Advertisement
      </div>
    </div>
  );
}
