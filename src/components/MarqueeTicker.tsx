import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    '360° BRAND ARCHITECTURE',
    'AVANT-GARDE UI/UX',
    'FULL-STACK WEB SYSTEMS',
    'OMNICHANNEL ACQUISITION',
    '3D & SPATIAL INTERACTION',
    'ATELIER OF FIVE MASTERS',
    'SUB-SECOND PERFORMANCE',
    'EXPONENTIAL SCALE'
  ];

  return (
    <div className="py-6 bg-[#08080c] border-t border-b border-white/[0.07] overflow-hidden select-none relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-12">
        {[...items, ...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-8 text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase whitespace-nowrap shrink-0 hover:text-amber-200 transition-colors"
          >
            <span>{text}</span>
            <span aria-hidden="true" className="text-amber-400/50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
