import { useState, useEffect } from 'react';
import { ThemePalette, PsychologistProfile } from '../types';
import { ShieldCheck } from 'lucide-react';

interface HeaderProps {
  palette: ThemePalette;
  profile: PsychologistProfile;
  onOpenBooking: () => void;
}

export function Header({ profile }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initials = 'FM';

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#FAF7FC]/95 backdrop-blur-md shadow-xs border-b border-[#E8DBF0]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* Centered Monogram Brand */}
        <a href="#inicio" className="group flex items-center gap-3.5 text-center sm:text-left">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center font-serif text-lg font-medium tracking-widest transition-transform duration-300 group-hover:scale-105 border border-[#E8DBF0] bg-[#F5EEF9] text-[#845796] shadow-2xs"
          >
            {initials}
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2.5">
              <span
                className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-[#2A1D32]"
              >
                {profile.name}
              </span>
              <span
                className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#E8DBF0] bg-[#EFE2F5] text-[#6D3F80]"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                {profile.crp}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-normal tracking-wider text-[#6B5774]">
              Psicologia Clínica & Psicoterapia
            </p>
          </div>
        </a>
      </div>
    </header>
  );
}
