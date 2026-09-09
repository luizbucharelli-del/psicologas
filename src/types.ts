export type PaletteId = 'terracota' | 'salvia' | 'bordeaux' | 'noturno';

export interface ThemePalette {
  id: PaletteId;
  name: string;
  description: string;
  colors: {
    primary: string;         // Main accent (e.g. #9E5A44 or #506958)
    primaryHover: string;
    primaryLight: string;
    secondary: string;       // Complementary accent
    bgBase: string;          // Main page background
    bgCard: string;          // Card background
    bgSubtle: string;        // Muted section background
    textMain: string;        // Main text (#231f1d, #1e2621)
    textMuted: string;       // Secondary text
    border: string;          // Subtle divider border
    badgeBg: string;
    badgeText: string;
  };
}

export interface PsychologistProfile {
  name: string;
  title: string;
  crp: string;
  experienceYears: number;
  patientsHelped: string;
  approach: string;
  location: string;
  onlineService: string;
  whatsappNumber: string;
  heroTagline: string;
  heroDescription: string;
  bioShort: string;
  bioFull: string[];
  education: Array<{
    institution: string;
    degree: string;
    year?: string;
  }>;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  modality: 'online' | 'presencial' | 'ambas';
  summary: string;
  benefits: string[];
  highlight?: boolean;
}

export interface PainPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
  symptoms: string[];
}

export interface Testimonial {
  id: string;
  authorInitials: string;
  ageAndCity: string;
  quote: string;
  context: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'atendimento' | 'valores' | 'online' | 'geral';
}

export interface BookingFormData {
  name: string;
  whatsapp: string;
  modality: 'online' | 'presencial';
  period: 'manha' | 'tarde' | 'noite' | 'flexivel';
  goal: string;
  message?: string;
}
