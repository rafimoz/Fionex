import React from 'react';
import { CaseStudy } from '../types';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenInquiry
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-[#0c0c10] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-neutral-900/60">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
            <span>Case Archive</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.year}</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">{caseStudy.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header Title Area */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display leading-tight">
              {caseStudy.title}
            </h2>
            <p className="text-amber-200/90 text-sm sm:text-base font-medium mt-1">
              {caseStudy.headline}
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Featured Image */}
          <div className="rounded-lg overflow-hidden border border-white/10 bg-black">
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Metrics Grid */}
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-300 font-mono mb-3">
              Validated Scale Metrics:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-neutral-900/80 border border-white/[0.08]"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white font-display tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-amber-300/90 mt-1">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1 leading-tight">
                    {m.context}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Starting State vs Scaled Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-neutral-950/70 border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-medium mb-2">
                <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                <span>Initial State (The Challenge)</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {caseStudy.startingState}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-neutral-950/70 border border-amber-300/30">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-300 font-medium mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
                <span>The Scaled Transformation</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {caseStudy.scaledOutcome}
              </p>
            </div>
          </div>

          {/* Scope & Deliverables */}
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-3">
              Executed Deliverables:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-neutral-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Quote */}
          {caseStudy.quote && (
            <div className="p-6 rounded-lg bg-gradient-to-r from-amber-500/10 via-neutral-900 to-neutral-900 border border-amber-300/20">
              <p className="text-sm italic text-neutral-200 leading-relaxed">
                “{caseStudy.quote.text}”
              </p>
              <div className="mt-3 text-xs text-amber-200 font-medium">
                — {caseStudy.quote.author},{' '}
                <span className="text-neutral-400">{caseStudy.quote.role}</span>
              </div>
            </div>
          )}

          {/* Team Lead credit */}
          <div className="text-xs text-neutral-400 font-mono pt-2 border-t border-white/[0.08] flex items-center justify-between">
            <span>Directed by: <strong className="text-white">{caseStudy.teamLead}</strong></span>
            <span>Client: {caseStudy.client}</span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-neutral-900/80 border-t border-white/[0.08] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs text-neutral-300 hover:text-white font-medium"
          >
            Close Case
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 to-amber-300 rounded-sm hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Commission Similar Transformation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
