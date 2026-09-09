import { ThemePalette, PsychologistProfile } from '../types';
import { ASSETS } from '../data/content';
import { Sparkles, Armchair, Coffee, VolumeX, SunMedium } from 'lucide-react';
import { motion } from 'motion/react';

interface ClinicGalleryProps {
  palette: ThemePalette;
  profile: PsychologistProfile;
}

export function ClinicGallery({ profile }: ClinicGalleryProps) {
  const highlights = [
    {
      icon: VolumeX,
      title: 'Isolamento Acústico Rigoroso',
      desc: 'Portas e paredes tratadas acusticamente para privacidade e sigilo absoluto das suas palavras.',
    },
    {
      icon: SunMedium,
      title: 'Iluminação Natural & Calmaria',
      desc: 'Luz difusa, cortinas de linho e paleta de cores orgânicas que convidam ao relaxamento imediato.',
    },
    {
      icon: Armchair,
      title: 'Poltrona Bouclé Ergonômica',
      desc: 'Mobiliário selecionado para o máximo aconchego e postura confortável durante toda a sessão.',
    },
    {
      icon: Coffee,
      title: 'Cantinho de Chás & Café',
      desc: 'Infusões calmantes, café fresco e água aromatizada à sua disposição na chegada.',
    },
  ];

  return (
    <section
      id="consultorio"
      className="py-20 lg:py-28 relative bg-[#F5EEF9]/40 border-y border-[#E8DBF0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span
            className="inline-block text-xs font-light uppercase tracking-widest px-3.5 py-1 rounded-full mb-3 border border-[#E8DBF0] bg-[#EFE2F5] text-[#6D3F80]"
          >
            O Espaço Físico
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#2A1D32]"
          >
            Um santuário de paz no coração de {profile.location.split('•')[1] || 'São Paulo'}
          </h2>
          <p
            className="text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal leading-relaxed text-[#5A4863]"
          >
            Cada detalhe foi pensado arquitetonicamente para que você se desconecte do caos
            externo e encontre um porto seguro para suas emoções.
          </p>
        </motion.div>

        {/* Big Office Image Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white mb-16 aspect-[16/9] max-h-[520px] w-full"
        >
          <img
            src={ASSETS.officeRoom}
            alt="Consultório acolhedor de psicologia com poltrona confortável e iluminação natural"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          
          {/* Subtle gradient overlay with location tag */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/25 backdrop-blur-md text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D8C7E3]" />
                <span>Atendimento Presencial e Online com a Mesma Qualidade</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Consultório Privativo • {profile.location}
              </h3>
              <p className="text-sm sm:text-base font-normal text-gray-100 mt-1.5 leading-relaxed">
                Fácil acesso próximo a estações de metrô, com estacionamento privativo e total discrição.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4 Comfort Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-6 rounded-2xl bg-white border border-[#E8DBF0] shadow-2xs transition-all duration-300 hover:shadow-lg hover:border-[#845796]/40 cursor-pointer group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 bg-[#F5EEF9] text-[#845796] transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h4
                  className="font-serif text-lg font-medium mb-1.5 text-[#2A1D32]"
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm font-normal leading-relaxed text-[#5A4863]"
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
