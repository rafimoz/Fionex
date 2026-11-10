import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WorksSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenInquiry: () => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({
  onSelectCaseStudy,
  onOpenInquiry
}) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', '360° Transformation', 'Web Development', 'Digital Marketing'];

  const filteredStudies =
    filter === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === filter);

  return (
    <section id="selected-works" className="py-24 md:py-32 relative bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-amber-300 font-medium mb-3">
              <span>Case Archives</span>
              <span aria-hidden="true">·</span>
              <span>Proven Scaling Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display text-balance">
              Works Defined by Exponential Scale
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/80 rounded-lg border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 relative ${
                  filter === cat
                    ? 'bg-amber-300 text-black font-semibold shadow-sm'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Asymmetric Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectCaseStudy(study)}
                className="group rounded-xl overflow-hidden bg-neutral-900/50 border border-white/[0.08] hover:border-amber-300/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                    <img
                      src={study.heroImage}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                    {/* Corner Action Cue */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-300 group-hover:text-black group-hover:border-transparent transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    {/* Clean unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-2">
                      <span>{study.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-300/90">{study.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-100 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-xs text-neutral-300 mt-2 leading-relaxed line-clamp-2">
                      {study.tagline}
                    </p>
                  </div>
                </div>

                {/* Bottom Metric Bar */}
                <div className="px-6 py-4 bg-neutral-950/60 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-amber-200 font-display tabular-nums">
                      {study.metrics[0].value}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono">
                      {study.metrics[0].label}
                    </div>
                  </div>
                  <span className="text-xs text-amber-300/80 font-medium group-hover:underline flex items-center gap-1">
                    <span>Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-8 md:p-10 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#121118] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white font-display">
              Have an ambitious concept ready to scale?
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              Explore our strategic roadmap and timeline tailored to your exact industry.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 to-amber-300 rounded-sm hover:brightness-110 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-lg"
          >
            Request Private Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};
