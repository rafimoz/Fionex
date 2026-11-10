/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AuraCursor } from './components/AuraCursor';
import { ScaleEngine } from './components/ScaleEngine';
import { ServicesSection } from './components/ServicesSection';
import { WorksSection } from './components/WorksSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CaseStudy } from './types';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenInquiry = () => setIsInquiryOpen(true);
  const handleCloseInquiry = () => setIsInquiryOpen(false);

  const handleSelectCaseStudy = (study: CaseStudy) => setSelectedCaseStudy(study);
  const handleCloseCaseStudy = () => setSelectedCaseStudy(null);

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 selection:bg-amber-400/20 selection:text-amber-200 relative">
      {/* Interactive Luxury Pointer Glow */}
      <AuraCursor />

      {/* Primary Top Bar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section with animated changing title */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Brand Attribute Marquee Ribbon */}
        <MarqueeTicker />

        {/* The Small-to-Large Scale Philosophy & Interactive Engine */}
        <ScaleEngine onOpenInquiry={handleOpenInquiry} />

        {/* Full-Spectrum 360° Capabilities */}
        <ServicesSection onOpenInquiry={handleOpenInquiry} />

        {/* Selected Works & Case Archives */}
        <WorksSection
          onSelectCaseStudy={handleSelectCaseStudy}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* The 5-Person Collective */}
        <TeamSection onOpenInquiry={handleOpenInquiry} />

        {/* Attributable Proof & Testimonials */}
        <TestimonialsSection />

        {/* Frequently Explored Questions */}
        <FaqSection />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Modals */}
      <InquiryModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={handleCloseCaseStudy}
        onOpenInquiry={handleOpenInquiry}
      />
    </div>
  );
}
