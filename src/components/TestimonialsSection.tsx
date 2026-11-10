import React from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-amber-300 font-medium mb-3">
            <span>Direct Client Endorsements</span>
            <span aria-hidden="true">·</span>
            <span>Unfiltered Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display text-balance">
            Voices of Leaders We Scaled
          </h2>
        </motion.div>

        {/* Testimonials 3-Column Grid with staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl bg-neutral-900/60 border border-white/[0.08] hover:border-amber-300/30 transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-300/40 mb-6" />
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans">
                  “{t.quote}”
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <div className="text-sm font-bold text-white font-display">
                  {t.author}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {t.role}, <span className="text-neutral-300">{t.company}</span>
                </div>
                <div className="mt-3 text-xs font-mono font-medium text-amber-300">
                  {t.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
