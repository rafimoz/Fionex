import React, { useState } from 'react';
import { TEAM_MEMBERS, TEAM_IMAGE } from '../data/agencyData';
import { ArrowUpRight, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TeamSectionProps {
  onOpenInquiry: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenInquiry }) => {
  const [activeMemberId, setActiveMemberId] = useState<string>('julian');

  const activeMember = TEAM_MEMBERS.find((m) => m.id === activeMemberId) || TEAM_MEMBERS[0];

  return (
    <section id="the-collective" className="py-24 md:py-32 relative bg-[#09090d] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-amber-300 font-medium mb-3">
            <span>The Core Collective</span>
            <span aria-hidden="true">·</span>
            <span>Five Dedicated Masters</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display text-balance">
            Every Growth Element in Five Disciplined Hands
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-300 leading-relaxed text-balance">
            At Fionex, there are no layers of account managers, interns, or offshore middlemen. You work directly with five experienced practitioners who hold every crucial capability required to scale a brand in the modern digital era.
          </p>
        </motion.div>

        {/* Studio Atelier Photo Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl mb-16 group"
        >
          <img
            src={TEAM_IMAGE}
            alt="The Fionex collective in their design atelier"
            className="w-full h-[320px] sm:h-[440px] md:h-[540px] object-cover object-center filter brightness-[0.9] transition-all duration-700 group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 pointer-events-none">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-mono font-medium">
                Unified Atelier Workflow
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white font-display mt-1">
                “Five specialists operating in tight synchronicity generate more momentum than an agency of fifty.”
              </h3>
            </div>
          </div>
        </motion.div>

        {/* The 5 Members Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Member List Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            {TEAM_MEMBERS.map((member, idx) => {
              const isSelected = member.id === activeMemberId;
              return (
                <button
                  key={member.id}
                  onClick={() => setActiveMemberId(member.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-neutral-800/90 border-amber-300/40 shadow-xl'
                      : 'bg-neutral-900/40 border-white/[0.06] hover:border-white/20 hover:bg-neutral-900/70'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeMemberGlow"
                      className="absolute inset-0 bg-amber-400/[0.04] pointer-events-none"
                    />
                  )}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono text-amber-300/80 font-medium">
                      0{idx + 1} · {member.pillar}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {member.experienceYears} Yrs Craft
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mt-1 relative z-10">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-300 relative z-10">
                    {member.role}
                  </p>
                </button>
              );
            })}
          </motion.div>

          {/* Member Profile Deep-Dive Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-neutral-900/80 border border-white/10 rounded-xl p-8 sm:p-10 backdrop-blur-md shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono">
                      Pillar Leadership · {activeMember.pillar}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                      {activeMember.name}
                    </h3>
                    <p className="text-sm text-neutral-400 font-sans">
                      {activeMember.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-400 font-mono uppercase">Mastery Experience</div>
                    <div className="text-2xl font-bold text-amber-200 font-display tabular-nums">
                      {activeMember.experienceYears}+ Years
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm sm:text-base text-neutral-200 leading-relaxed">
                  {activeMember.bio}
                </p>

                {/* Quote / Philosophy */}
                <div className="mt-6 p-5 rounded-lg bg-neutral-950/70 border border-amber-300/20">
                  <span className="text-[11px] uppercase tracking-wider text-amber-300 font-mono block mb-1">
                    Personal Philosophy
                  </span>
                  <p className="text-sm italic text-neutral-200 leading-relaxed font-sans">
                    “{activeMember.philosophy}”
                  </p>
                </div>

                {/* Specialties & Stack */}
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-3">
                    Core Domains &amp; Toolstack:
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {activeMember.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1.5 rounded bg-neutral-950 border border-white/[0.08] text-neutral-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notable Achievement */}
                <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                      Track Record Highlight:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                      {activeMember.notableAchievement}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex justify-end">
                  <button
                    onClick={onOpenInquiry}
                    className="text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 to-amber-300 px-5 py-2.5 rounded-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Engage With The Team</span>
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
