import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-white font-display hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
          aria-label="Fionex Home"
        >
          FIONEX
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300">
          <a
            href="#capabilities"
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-amber-300/60 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Capabilities
          </a>
          <a
            href="#scale-engine"
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-amber-300/60 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            The Formula
          </a>
          <a
            href="#selected-works"
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-amber-300/60 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Selected Works
          </a>
          <a
            href="#the-collective"
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-amber-300/60 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            The Collective
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_-3px_rgba(251,191,36,0.25)] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Initiate Project
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0e] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-base font-medium text-neutral-200">
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-200 transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#scale-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-200 transition-colors"
            >
              The Formula
            </a>
            <a
              href="#selected-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-200 transition-colors"
            >
              Selected Works
            </a>
            <a
              href="#the-collective"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-200 transition-colors"
            >
              The Collective
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 to-amber-400 rounded-sm hover:brightness-110 transition-all cursor-pointer"
            >
              Initiate Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
