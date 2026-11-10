import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onOpenInquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('branding');

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="capabilities" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-amber-300 font-medium mb-3">
              <span>Full-Spectrum Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>All-Rounding Digital Branding</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display text-balance">
              The Four Pillars of Digital Supremacy
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md leading-relaxed">
            We reject fragmented vendor handoffs. Our collective covers the entire lifecycle—from the first brand sketch to custom code and multi-million dollar ad engines.
          </p>
        </motion.div>

        {/* 4 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Cards on Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            {SERVICES_DATA.map((service, idx) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-6 rounded-lg border transition-all cursor-pointer group relative overflow-hidden ${
                    isSelected
                      ? 'bg-neutral-900 border-amber-300/50 shadow-xl'
                      : 'bg-neutral-950/40 border-white/[0.06] hover:border-white/20 hover:bg-neutral-900/60'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeServiceIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 to-amber-500"
                    />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-amber-300/80">
                      Pillar {service.num}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono tracking-wider">
                      {service.impactMetric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mt-2 group-hover:text-amber-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {service.subtitle}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-amber-300/90 font-medium pt-3 border-t border-white/[0.06]">
                    <span>Explore details &amp; deliverables</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'rotate-90 text-amber-300' : 'text-neutral-500'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Expanded Deep-Dive Blueprint on Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-neutral-900/80 border border-white/10 rounded-xl p-8 sm:p-10 backdrop-blur-md shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono">
                      Discipline {activeService.num} · Architecture
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                      {activeService.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1 font-sans">
                      {activeService.subtitle}
                    </p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="text-2xl font-bold text-amber-200 font-display tabular-nums">
                      {activeService.impactMetric}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono max-w-[130px] leading-tight">
                      {activeService.impactLabel}
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm sm:text-base text-neutral-200 leading-relaxed">
                  {activeService.description}
                </p>

                {/* Deliverables List */}
                <div className="mt-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-4 font-mono">
                    Included Core Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded bg-neutral-950/70 border border-white/[0.06] flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities pill-less tag row */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                    <span className="text-neutral-500 font-medium">Methodologies:</span>
                    {activeService.capabilities.map((cap, i) => (
                      <React.Fragment key={cap}>
                        <span className="text-neutral-300">{cap}</span>
                        {i < activeService.capabilities.length - 1 && (
                          <span aria-hidden="true" className="text-neutral-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    onClick={onOpenInquiry}
                    className="text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 to-amber-300 px-5 py-2.5 rounded-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <span>Commission This Discipline</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
