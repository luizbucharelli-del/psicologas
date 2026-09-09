import { ThemePalette } from '../types';
import { HOW_IT_WORKS } from '../data/content';
import { WhatsAppButton } from './WhatsAppButton';
import { MessageSquare, Calendar, Compass, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface HowItWorksSectionProps {
  palette: ThemePalette;
  onOpenBooking: () => void;
}

export function HowItWorksSection({ onOpenBooking }: HowItWorksSectionProps) {
  const stepIcons = [MessageSquare, Calendar, Compass, TrendingUp];

  return (
    <section
      id="como-funciona"
      className="py-20 lg:py-28 relative bg-[#FAF7FC]"
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
            Passo a Passo
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#2A1D32]"
          >
            Como funciona o início da sua psicoterapia?
          </h2>
          <p
            className="text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal leading-relaxed text-[#5A4863]"
          >
            Sem burocracias, com clareza e respeito absoluto ao seu momento.
          </p>
        </motion.div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = stepIcons[index] || MessageSquare;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className="p-7 rounded-3xl bg-white border border-[#E8DBF0] shadow-2xs transition-all duration-300 hover:shadow-lg hover:border-[#845796]/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#F5EEF9] text-[#845796] transition-transform duration-300 group-hover:scale-110"
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="font-serif text-3xl font-medium opacity-30 text-[#845796]"
                    >
                      {item.step}
                    </span>
                  </div>

                  <h3
                    className="font-serif text-xl sm:text-2xl font-medium mb-3 text-[#2A1D32]"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm sm:text-base font-normal leading-relaxed text-[#5A4863]"
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className="w-8 h-0.5 mt-6 rounded-full bg-[#B897C8]"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <WhatsAppButton
            id="btn-how-it-works-start"
            onClick={onOpenBooking}
            size="lg"
            text="Iniciar Primeiro Passo no WhatsApp"
          />
        </motion.div>
      </div>
    </section>
  );
}
