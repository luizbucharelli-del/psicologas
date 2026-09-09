/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PsychologistProfile } from './types';
import { PALETTES, DEFAULT_PROFILE } from './data/content';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PainPointsSection } from './components/PainPointsSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ClinicGallery } from './components/ClinicGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [profile] = useState<PsychologistProfile>(DEFAULT_PROFILE);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const activePalette = PALETTES.terracota;

  const handleOpenBooking = (serviceTitle?: string) => {
    setSelectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div
      className="min-h-screen font-sans selection:bg-[#845796]/20 transition-colors duration-500"
      style={{
        backgroundColor: activePalette.colors.bgBase,
        color: activePalette.colors.textMain,
      }}
    >
      {/* Main Navigation */}
      <Header
        palette={activePalette}
        profile={profile}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Hero Section */}
      <main>
        <Hero
          palette={activePalette}
          profile={profile}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* About the Professional */}
        <AboutSection
          palette={activePalette}
          profile={profile}
        />

        {/* Patient Resonance / Pain Points */}
        <PainPointsSection
          palette={activePalette}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Services & Modalities */}
        <ServicesSection
          palette={activePalette}
          onSelectService={(title) => handleOpenBooking(title)}
        />

        {/* Step-by-Step Flow */}
        <HowItWorksSection
          palette={activePalette}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Clinic & Atmosphere */}
        <ClinicGallery
          palette={activePalette}
          profile={profile}
        />

        {/* Ethically compliant Testimonials */}
        <TestimonialsSection
          palette={activePalette}
        />

        {/* Frequently Asked Questions */}
        <FaqSection
          palette={activePalette}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer & Ethical Disclaimers */}
      <Footer
        palette={activePalette}
        profile={profile}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        palette={activePalette}
        profile={profile}
        initialService={selectedService}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp
        palette={activePalette}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}

