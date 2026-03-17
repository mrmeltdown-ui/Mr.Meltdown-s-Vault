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
    <div className={`relative overflow-hidden bg-zinc-800 brutal-box flex items-center justify-center ${className}`}>
      <ins className="adsbygoogle relative z-10"
           style={{ display: 'block', width: '100%', height: '100%' }}
           data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID || "ca-pub-placeholder"}
           data-ad-slot={dataAdSlot}
           data-ad-format={dataAdFormat}
           data-full-width-responsive={fullWidthResponsive.toString()}></ins>
      {/* Fallback for development/adblockers */}
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 pointer-events-none z-0">
        <div className="border-4 border-dashed border-zinc-700 w-[95%] h-[90%] flex items-center justify-center">
          <span className="graffiti-text text-zinc-700 text-2xl -rotate-2">AD SPACE</span>
        </div>
      </div>
    </div>
  );
}
