import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const [londonTime, setLondonTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLondonTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#050507] border-t border-white/[0.08] text-neutral-400 py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-3xl font-bold tracking-tight text-white font-display inline-block"
            >
              FIONEX
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              An all-types-of-digital-branding service atelier. Directed by five hands-on specialists engineering exponential scale for ambitious companies.
            </p>
            <div className="pt-2 text-xs text-neutral-400 font-mono">
              Atelier Time: <span className="text-amber-200 tabular-nums">{londonTime} GMT</span>
            </div>
          </div>

          {/* Nav Mirror */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-300/90 font-medium">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Capabilities &amp; Services
                </a>
              </li>
              <li>
                <a href="#scale-engine" className="hover:text-white transition-colors">
                  The Scaling Formula
                </a>
              </li>
              <li>
                <a href="#selected-works" className="hover:text-white transition-colors">
                  Case Archives
                </a>
              </li>
              <li>
                <a href="#the-collective" className="hover:text-white transition-colors">
                  The 5-Person Collective
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiry */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-300/90 font-medium">
              Direct Contact
            </div>
            <p className="text-sm text-neutral-400">
              Inquiries reviewed directly by the 5 founding partners.
            </p>
            <div className="pt-1">
              <a
                href="mailto:partner@fionex.studio"
                className="text-white hover:text-amber-200 text-sm font-medium transition-colors"
              >
                partner@fionex.studio
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 to-amber-300 px-4 py-2.5 rounded-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} Fionex Collective Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>London · New York</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span>Digital Branding · Engineering · Scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
