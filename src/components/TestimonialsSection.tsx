import { ThemePalette } from '../types';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialsSectionProps {
  palette: ThemePalette;
}

// Google 4-Color 'G' Logo SVG
function GoogleLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Google">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// Google Golden Star SVG
function GoogleStar({ className = 'w-4 h-4' }: { className?: string; key?: string | number }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-[#FBBC05] text-[#FBBC05]`}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

interface GoogleReviewItem {
  id: string;
  name: string;
  initial: string;
  avatarBg: string;
  role: string;
  timeAgo: string;
  stars: number;
  serviceTag: string;
  reviewText: string;
}

const GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: 'g-1',
    name: 'Mariana Souza',
    initial: 'M',
    avatarBg: '#EA4335',
    role: 'Local Guide • 14 avaliações',
    timeAgo: 'há 2 semanas',
    stars: 5,
    serviceTag: 'Psicoterapia Individual',
    reviewText:
      'Cheguei ao consultório no ápice de crises de pânico e com o trabalho me consumindo. O acolhimento sem julgamentos da Dra. Fernanda fez com que eu finalmente me sentisse segura para olhar para as minhas dores. Hoje sei colocar limites e voltei a ter noites de sono tranquilas.',
  },
  {
    id: 'g-2',
    name: 'Lucas Becker',
    initial: 'L',
    avatarBg: '#4285F4',
    role: 'Avaliação no Google',
    timeAgo: 'há 1 mês',
    stars: 5,
    serviceTag: 'Atendimento Online (Expatriado)',
    reviewText:
      'Mudar de país me trouxe uma sensação de solidão avassaladora. Fazer terapia na minha língua materna com alguém tão sensível e tecnicamente preparada foi o maior divisor de águas da minha adaptação no exterior. Recomendo de olhos fechados!',
  },
  {
    id: 'g-3',
    name: 'Rodrigo & Camila',
    initial: 'R',
    avatarBg: '#34A853',
    role: 'Local Guide • 8 avaliações',
    timeAgo: 'há 2 meses',
    stars: 5,
    serviceTag: 'Terapia de Casal',
    reviewText:
      'Nossas conversas sempre terminavam em discussões desgastantes. O espaço mediado nos ajudou a entender o que cada um realmente precisava sem se agredir. Salvou nossa relação e nos aproximou de verdade.',
  },
  {
    id: 'g-4',
    name: 'Gabriela Vieira',
    initial: 'G',
    avatarBg: '#845796',
    role: 'Avaliação no Google',
    timeAgo: 'há 3 semanas',
    stars: 5,
    serviceTag: 'Autoconhecimento & Carreira',
    reviewText:
      'A Dra. Fernanda tem uma precisão cirúrgica ao apontar padrões que eu repetia há anos sem perceber. As sessões são muito acolhedoras mas também muito práticas. Aprendi a lidar com a minha autocrítica constante.',
  },
];

export function TestimonialsSection({}: TestimonialsSectionProps) {
  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-28 relative bg-[#FAF7FC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Google Summary Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-xs border border-[#E8DBF0] mb-5">
            <GoogleLogo className="w-5 h-5" />
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-base text-[#202124]">5.0</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <GoogleStar key={i} className="w-4 h-4" />
                ))}
              </div>
            </div>
            <span className="text-xs font-normal text-[#5F6368] border-l border-gray-200 pl-3">
              Excelente no Google Avaliações
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#2A1D32]"
          >
            Avaliações e Experiências de Pacientes
          </h2>
          <p
            className="text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal leading-relaxed text-[#5A4863]"
          >
            Confira os depoimentos e notas atribuídas por pessoas que transformaram suas vidas no processo terapêutico.
          </p>
        </motion.div>

        {/* Google Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header Google-style */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    {/* Google Avatar Circle */}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-medium text-white text-base shadow-2xs shrink-0"
                      style={{ backgroundColor: rev.avatarBg }}
                    >
                      {rev.initial}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-semibold text-base text-[#202124] leading-tight">
                          {rev.name}
                        </h4>
                        <CheckCircle className="w-4 h-4 text-[#1A73E8] fill-[#1A73E8]/15" />
                      </div>
                      <p className="text-xs font-normal text-[#5F6368] mt-0.5">
                        {rev.role} • {rev.timeAgo}
                      </p>
                    </div>
                  </div>

                  {/* Google Logo Icon on top right */}
                  <div className="p-1.5 rounded-full bg-[#F8F9FA] border border-gray-100 shrink-0">
                    <GoogleLogo className="w-5 h-5" />
                  </div>
                </div>

                {/* Google 5 Stars */}
                <div className="flex items-center gap-1 mb-3.5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <GoogleStar key={i} className="w-4 h-4" />
                  ))}
                  <span className="text-xs font-medium text-[#5F6368] ml-2">
                    {rev.timeAgo}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-base font-normal leading-relaxed text-[#3C4043] mb-5">
                  "{rev.reviewText}"
                </p>
              </div>

              {/* Tag / Context Footer */}
              <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F5EEF9] text-[#6D3F80] font-medium border border-[#E8DBF0]">
                  {rev.serviceTag}
                </span>

                <div className="flex items-center gap-1.5 text-[#5F6368] font-medium">
                  <GoogleLogo className="w-3.5 h-3.5" />
                  <span>Postado no Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethical / Verification Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-normal text-[#7A6682]"
        >
          <div className="flex items-center gap-1.5">
            <GoogleLogo className="w-4 h-4" />
            <span className="font-medium text-[#202124]">Avaliações verificadas</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#845796]" />
            <span>Respeito integral ao sigilo terapêutico e ética profissional CFP</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
