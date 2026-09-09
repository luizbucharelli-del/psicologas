import { ThemePalette, PsychologistProfile } from '../types';
import { ASSETS } from '../data/content';
import { WhatsAppButton } from './WhatsAppButton';
import { ShieldCheck, Sparkles, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  palette: ThemePalette;
  profile: PsychologistProfile;
  onOpenBooking: () => void;
}

export function Hero({ profile, onOpenBooking }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-[#FAF7FC]"
    >
      {/* Delicate organic lilac ambient glows */}
      <div
        className="absolute top-12 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-35 pointer-events-none bg-[#EBDDF4]"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none bg-[#E2CEEE]"
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#845796_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Top authority badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-light tracking-wide border border-[#E8DBF0] bg-[#EFE2F5] text-[#6D3F80] shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Psicoterapia Acolhedora & Baseada em Evidências</span>
              </span>
              <span
                className="inline-flex items-center gap-1 text-xs font-light px-3 py-1.5 rounded-full bg-white/90 border border-[#E8DBF0] text-[#55425F] shadow-xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#845796]" />
                <span>{profile.crp} • Ativa</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.14] text-[#2A1D32]"
            >
              {profile.heroTagline}
            </h1>

            {/* Description Subtitle */}
            <p
              className="text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 text-[#54435C]"
            >
              {profile.heroDescription}
            </p>

            {/* Trust highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-[#3A2A42] font-normal">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#845796]" />
                <span>Espaço 100% livre de julgamentos</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-[#3A2A42] font-normal">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#845796]" />
                <span>Sigilo ético absoluto (Código CFP)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-[#3A2A42] font-normal">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#845796]" />
                <span>Online (mundo todo) ou Presencial em SP</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-[#3A2A42] font-normal">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#845796]" />
                <span>Recibo para reembolso em planos de saúde</span>
              </div>
            </div>

            {/* Primary & Secondary CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <WhatsAppButton
                id="btn-hero-primary-cta"
                onClick={onOpenBooking}
                size="lg"
                text="Agendar Consulta pelo WhatsApp"
              />

              <a
                href="#sobre"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full text-base font-medium text-[#4A3853] border border-[#E0D1E8] bg-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-[#7F4E92] shadow-2xs hover:shadow-xs"
              >
                <span>Conhecer Minha Abordagem</span>
              </a>
            </div>

            {/* Quick credentials strip */}
            <div
              className="pt-6 border-t border-[#E8DBF0] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-normal text-[#6B5774]"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#845796]" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#845796]" />
                <span>Atendimento Online Global</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1 rounded-full border border-[#E8DBF0]">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="font-semibold text-[#2A1D32]">5.0</span>
                <span className="text-xs text-[#5A4863]">Google Avaliações</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait with Framing & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Elegant organic background shape */}
            <div
              className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] rotate-1 opacity-80 bg-[#F3EBF7] border border-[#E8DBF0]"
            />

            {/* Portrait Frame Container */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-[2.2rem] overflow-hidden shadow-xl border-4 border-white">
              <img
                src={ASSETS.heroPortrait}
                alt={`Retrato profissional de ${profile.name}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle bottom gradient overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60" />

              {/* In-photo Badge at bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl backdrop-blur-md bg-white/95 border border-white/60 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#2A1D32] leading-tight">
                      {profile.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-normal text-[#6B5774]">
                      {profile.approach}
                    </p>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-[#F5EEF9] text-[#845796]"
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Experience Badge */}
            <div
              className="absolute -top-3 -left-3 sm:-left-6 p-3.5 rounded-2xl shadow-lg backdrop-blur-md bg-white/95 border border-[#E8DBF0] flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-serif text-sm font-medium bg-[#845796]"
              >
                +{profile.experienceYears}
              </div>
              <div className="text-left pr-2">
                <p className="text-[11px] uppercase font-medium tracking-wider text-[#8A7593]">
                  Experiência Clínica
                </p>
                <p className="text-sm font-semibold text-[#2A1D32]">
                  {profile.patientsHelped} vidas acolhidas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
