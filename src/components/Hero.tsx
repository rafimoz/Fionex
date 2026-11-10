import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_IMAGE } from '../data/agencyData';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const dynamicWords = [
    'Monumental Impact',
    'Enduring Prestige',
    'Exponential Growth',
    'Category Dominance',
    'Unrivaled Authority'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle ambient luxury background lighting with slow pulse */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.09, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-amber-400 blur-[170px] pointer-events-none rounded-full"
      />
      <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] bg-stone-700/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top editorial headline area */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Subtle animated kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-amber-200/90 font-medium"
          >
            <span>All-Spectrum Digital Branding</span>
            <span aria-hidden="true" className="text-amber-500/40">·</span>
            <span>Atelier of Five Masters</span>
          </motion.div>

          {/* Main Headline with Smooth Dynamic Rotating Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight text-white leading-[1.08] text-balance"
          >
            Where Subtle Craft Scales Into{' '}
            <span className="inline-block relative min-h-[1.25em] sm:min-h-[1.2em] whitespace-nowrap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={dynamicWords[currentWordIndex]}
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block italic font-serif font-normal text-amber-200/95"
                >
                  {dynamicWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Fionex is a premier 5-specialist digital branding collective. We harness the power of microscopic detail—sharpened positioning, haute design, full-stack web engineering, and high-velocity digital marketing—to scale ambitious ventures into category leaders.
          </motion.p>

          {/* Primary CTA and Secondary Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_-5px_rgba(251,191,36,0.35)] flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Initiate Discovery</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="#selected-works"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 border border-white/15 hover:border-amber-300/40 hover:text-white rounded-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>View Case Studies</span>
              <ChevronDown className="w-4 h-4 text-neutral-400" />
            </a>
          </motion.div>
        </div>

        {/* Marquee Visual Frame with subtle parallax feel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 md:mt-20 relative group"
        >
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-700 ease-out group-hover:border-amber-300/30">
            <img
              src={HERO_IMAGE}
              alt="Fionex atelier architecture and creative direction workspace"
              className="w-full h-[380px] sm:h-[480px] md:h-[620px] object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-all duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            {/* Elegant glass overlay caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 pointer-events-none">
              <div className="max-w-xl">
                <p className="text-xs tracking-widest uppercase text-amber-300 font-medium mb-1">
                  The Atelier Philosophy
                </p>
                <h3 className="text-xl md:text-2xl font-light tracking-wide text-white font-display">
                  “Give us a single authentic ember, and our five hands will build your digital empire.”
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Claim-to-Proof Metric Strip with staggered entrance */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              num: '5',
              kicker: 'Core Masters',
              desc: 'Every deliverable crafted directly by our 5 hands-on discipline leads. Zero outsourcing.'
            },
            {
              num: '$320M+',
              kicker: 'Valuation Created',
              desc: 'Capital, acquisitions, and market capitalization generated across our client roster.'
            },
            {
              num: '360°',
              kicker: 'Digital Scope',
              desc: 'End-to-end synergy: Branding, UI/UX, Full-Stack Web Development & Growth Marketing.'
            },
            {
              num: '4.2x',
              kicker: 'Average Scale Multiplier',
              desc: 'Measured revenue and conversion velocity achieved within 12 months of transformation.'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-lg bg-neutral-900/60 border border-white/[0.08] backdrop-blur-sm hover:border-amber-400/30 transition-all cursor-default"
            >
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display tabular-nums">
                {item.num}
              </div>
              <div className="text-xs uppercase tracking-wider text-amber-300/80 mt-1 font-medium">
                {item.kicker}
              </div>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
