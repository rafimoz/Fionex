import React, { useState } from 'react';
import { SCALE_STAGES } from '../data/agencyData';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScaleEngineProps {
  onOpenInquiry: () => void;
}

export const ScaleEngine: React.FC<ScaleEngineProps> = ({ onOpenInquiry }) => {
  const [activeStageId, setActiveStageId] = useState<string>('catalyst');
  const [clientTier, setClientTier] = useState<'early' | 'growth' | 'enterprise'>('growth');

  const activeStage = SCALE_STAGES.find((s) => s.id === activeStageId) || SCALE_STAGES[0];

  const tierDetails = {
    early: {
      name: 'Boutique or Seed Venture',
      startingPoint: 'Exceptional craftsmanship or product, but minimal digital identity and zero predictable acquisition channels.',
      targetOutcomes: 'Establish immediate category prestige, launch digital flagship, and generate first $1M–$5M in validated digital sales.',
      multiplier: '5.2x Valuation Uplift',
      timeline: '8 Weeks to Market'
    },
    growth: {
      name: 'Scaling Middle-Market Brand',
      startingPoint: 'Strong initial traction ($1M–$10M) hindered by legacy website tech, fragmented branding, and plateaued advertising spend.',
      targetOutcomes: 'Unified 360° brand architecture, headless high-performance web migration, and systematic omnichannel paid acquisition.',
      multiplier: '4.4x Revenue Expansion',
      timeline: '10–12 Weeks Orchestration'
    },
    enterprise: {
      name: 'Enterprise / Modernization',
      startingPoint: 'Established market player ($10M–$50M+) with institutional baggage, losing modern digital market share to agile new entrants.',
      targetOutcomes: 'Total luxury brand modern overhaul, sub-second platform engineering, global localization, and market leadership reaffirmation.',
      multiplier: '10x+ Market Capitalization',
      timeline: 'Phased Strategic Sprints'
    }
  };

  const currentTier = tierDetails[clientTier];

  return (
    <section id="scale-engine" className="py-24 md:py-32 relative bg-[#09090d] border-t border-b border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header with scroll motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-amber-300 font-medium mb-3">
            <span>The Fionex Scaling Formula</span>
            <span aria-hidden="true">·</span>
            <span>Micro-Precision to Macro-Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display text-balance">
            How Five Hands Turn Small Ideas Into Market Behemoths
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-300 leading-relaxed text-balance">
            Every massive digital empire started with a small, unyielding detail. We do not throw generic brute force at growth. We isolate the single critical catalyst—a sharper narrative, an instantaneous interface, an undeniable aesthetic—and scale it methodically across all digital dimensions.
          </p>
        </motion.div>

        {/* Interactive Scale Stages Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stage Selector Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            {SCALE_STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-neutral-800/95 border-amber-300/40 shadow-xl'
                      : 'bg-neutral-900/40 border-white/[0.06] hover:border-white/20 hover:bg-neutral-900/70'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeStageGlow"
                      className="absolute inset-0 bg-amber-400/[0.04] pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center justify-between mb-1.5 relative z-10">
                    <span className="text-xs font-mono font-medium text-amber-300/90">
                      Phase {stage.stageNumber}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {stage.timeline}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white font-display relative z-10">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-1 relative z-10">
                    {stage.concept}
                  </p>
                </button>
              );
            })}

            {/* Interactive Tier Switcher */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-3">
                Simulate For Your Scale:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['early', 'growth', 'enterprise'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setClientTier(tier)}
                    className={`py-2 px-3 text-xs font-medium rounded transition-all cursor-pointer capitalize text-center ${
                      clientTier === tier
                        ? 'bg-amber-300 text-black font-semibold shadow-sm'
                        : 'bg-neutral-800/60 text-neutral-300 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Deep Stage & Simulation Breakdown Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-neutral-900/80 border border-white/10 rounded-xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono">
                      Scale Blueprint · Phase {activeStage.stageNumber}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                      {activeStage.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-400 font-mono uppercase">Target Impact</div>
                    <div className="text-xl font-bold text-amber-200 font-display">
                      {activeStage.multiplier}
                    </div>
                  </div>
                </div>

                {/* Small Thing vs Large Scale Comparison Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-neutral-950/60 border border-white/[0.06] hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-medium mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>The Micro-Craft (Small Seed)</span>
                    </div>
                    <p className="text-sm text-neutral-200 leading-relaxed font-normal">
                      {activeStage.smallElement}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-neutral-950/60 border border-amber-300/20 hover:border-amber-300/40 transition-colors">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-300 font-medium mb-2">
                      <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
                      <span>The Scaled Transformation (Macro)</span>
                    </div>
                    <p className="text-sm text-neutral-200 leading-relaxed font-normal">
                      {activeStage.scaledTransformation}
                    </p>
                  </div>
                </div>

                {/* Deliverables Produced in this Phase */}
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-3">
                    Key Engineered Deliverables:
                  </div>
                  <div className="space-y-2">
                    {activeStage.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-300/90 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Selected Tier Impact Analysis */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] bg-neutral-950/40 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                <span>Application to: <strong className="text-white">{currentTier.name}</strong></span>
                <span className="text-amber-300 font-mono">{currentTier.timeline}</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <span className="text-white font-medium">Trajectory:</span> {currentTier.targetOutcomes}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-amber-300/90 font-medium">
                  Projected: {currentTier.multiplier}
                </span>
                <button
                  onClick={onOpenInquiry}
                  className="text-xs font-semibold text-black bg-amber-300 hover:bg-amber-200 px-4 py-2 rounded-sm transition-all flex items-center gap-1.5 cursor-pointer hover:shadow-lg active:scale-95"
                >
                  <span>Build This Scale Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
