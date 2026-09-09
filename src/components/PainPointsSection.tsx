import { useState } from 'react';
import { ThemePalette } from '../types';
import { PAIN_POINTS } from '../data/content';
import { WhatsAppButton } from './WhatsAppButton';
import { Activity, ZapOff, HeartHandshake, Sparkles, Compass, CloudRain, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PainPointsSectionProps {
  palette: ThemePalette;
  onOpenBooking: () => void;
}

export function PainPointsSection({ onOpenBooking }: PainPointsSectionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return Activity;
      case 'ZapOff': return ZapOff;
      case 'HeartHandshake': return HeartHandshake;
      case 'Sparkles': return Sparkles;
      case 'Compass': return Compass;
      case 'CloudRain': return CloudRain;
      default: return Activity;
    }
  };

  return (
    <section
      id="identificacao"
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
            Identificação
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#2A1D32]"
          >
            Você se reconhece em alguma dessas situações?
          </h2>
          <p
            className="text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal leading-relaxed text-[#5A4863]"
          >
            Muitas vezes normalizamos o cansaço extremo, a angústia constante e o medo.
            Identificar o que dói é o primeiro passo para o alívio.
          </p>
        </motion.div>

        {/* Pain Points Grid with motion and card animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_POINTS.map((item, idx) => {
            const Icon = getIcon(item.icon);
            const isSelected = selectedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => setSelectedId(isSelected ? null : item.id)}
                className={`p-7 rounded-2xl cursor-pointer border transition-all duration-300 relative group flex flex-col justify-between ${
                  isSelected
                    ? 'shadow-lg ring-1 ring-[#845796] bg-[#F5EEF9] border-[#845796]'
                    : 'bg-white shadow-2xs hover:shadow-md border-[#E8DBF0]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isSelected
                          ? 'bg-[#845796] text-white'
                          : 'bg-[#F5EEF9] text-[#845796]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-normal text-[#8A7593]">
                      {isSelected ? 'Selecionado' : 'Toque para detalhes'}
                    </span>
                  </div>

                  <h3
                    className="font-serif text-xl sm:text-2xl font-medium mb-2.5 text-[#2A1D32]"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm sm:text-base font-normal leading-relaxed mb-4 text-[#5A4863]"
                  >
                    {item.description}
                  </p>
                </div>

                {/* Symptoms / Signals list */}
                <div className="pt-3 border-t border-[#F0E5F5] space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#7A6384]">
                    Sinais comuns:
                  </p>
                  {item.symptoms.map((symptom, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-sm font-normal text-[#3A2A42]">
                      <Check
                        className="w-4 h-4 mt-0.5 shrink-0 text-[#845796]"
                      />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empathy Reassurance Banner with WhatsAppButton CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-8 sm:p-10 rounded-3xl border border-[#E8DBF0] bg-[#F5EEF9]/90 backdrop-blur-sm shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-2xl text-center md:text-left space-y-2">
            <h4
              className="font-serif text-2xl sm:text-3xl font-medium text-[#2A1D32]"
            >
              Você não precisa carregar todo esse peso sozinho(a).
            </h4>
            <p className="text-base font-normal leading-relaxed text-[#5A4863]">
              Buscar ajuda psicológica é um compromisso de amor próprio e maturidade emocional.
              Estou aqui para caminhar com você em direção à sua tranquilidade.
            </p>
          </div>

          <WhatsAppButton
            id="btn-pain-points-booking"
            onClick={onOpenBooking}
            size="md"
            text="Falar no WhatsApp"
            className="shrink-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
