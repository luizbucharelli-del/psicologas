import { ThemePalette, PsychologistProfile } from '../types';
import { ASSETS } from '../data/content';
import { GraduationCap, Heart, Lock, Brain, Sparkles, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  palette: ThemePalette;
  profile: PsychologistProfile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  const pillars = [
    {
      icon: Heart,
      title: 'Acolhimento Sem Julgamentos',
      desc: 'Um espaço seguro onde todas as suas dores, dúvidas e imperfeições são ouvidas com respeito e empatia genuína.',
    },
    {
      icon: Lock,
      title: 'Sigilo Absoluto',
      desc: 'Protegido rigorosamente pelo Código de Ética Profissional do Psicólogo. O que é dito em sessão permanece em sessão.',
    },
    {
      icon: Brain,
      title: 'Baseado em Evidências',
      desc: 'Técnicas da Terapia Cognitivo-Comportamental com validação científica comprovada para resultados reais e duradouros.',
    },
    {
      icon: Sparkles,
      title: 'Seu Próprio Ritmo',
      desc: 'Sem fórmulas mágicas ou pressões. O processo respeita o tempo da sua mente e as singularidades da sua trajetória.',
    },
  ];

  return (
    <section
      id="sobre"
      className="py-20 lg:py-28 relative bg-[#F5EEF9]/60 border-y border-[#E8DBF0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Sobre a Profissional
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#2A1D32]"
          >
            Conheça quem estará ao seu lado nesta jornada
          </h2>
          <div
            className="w-12 h-0.5 mx-auto mt-4 rounded-full bg-[#845796]/40"
          />
        </motion.div>

        {/* Main Grid: Photo + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Photo with frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl -rotate-2 border-2 border-[#B897C8]/40"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[4/5]">
                <img
                  src={ASSETS.candidAbout}
                  alt={`Dra. ${profile.name} no consultório`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quote pill */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 p-4 rounded-2xl shadow-xl backdrop-blur-md bg-white/95 border border-[#E8DBF0] max-w-xs transition-shadow"
              >
                <Quote className="w-5 h-5 mb-1.5 opacity-60 text-[#845796]" />
                <p className="text-sm font-normal italic leading-relaxed text-[#2A1D32]">
                  "{profile.bioShort}"
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Biography Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2A1D32]">
                Olá, sou a {profile.name}
              </h3>
              <p className="text-base font-medium text-[#845796]">
                {profile.approach} • {profile.crp}
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-[#54435C]">
              {profile.bioFull.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Academic Credentials */}
            <div className="pt-4">
              <h4 className="text-sm font-medium uppercase tracking-wider mb-3 text-[#5A4565] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#845796]" />
                <span>Formação Acadêmica & Credenciais</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-4 rounded-xl border border-[#E8DBF0] bg-white/95 shadow-2xs transition-shadow hover:shadow-md"
                  >
                    <p className="font-medium text-sm text-[#2A1D32] leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-xs font-normal text-[#6B5774] mt-1">
                      {edu.institution} {edu.year && `• ${edu.year}`}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars of Therapeutic Care */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2A1D32]">
              Meus Pilares de Atendimento
            </h3>
            <p className="text-base font-normal mt-2 text-[#5A4863]">
              Como cada sessão é estruturada para garantir a sua segurança e transformação real
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                  className="p-6 rounded-2xl bg-white shadow-2xs border border-[#E8DBF0] transition-all duration-300 hover:shadow-lg hover:border-[#845796]/40 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 bg-[#F5EEF9] text-[#845796]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-medium mb-2 text-[#2A1D32]">
                    {pillar.title}
                  </h4>
                  <p className="text-sm font-normal leading-relaxed text-[#5A4863]">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
