import { ThemePalette } from '../types';
import { SERVICES } from '../data/content';
import { WhatsAppButton } from './WhatsAppButton';
import { Clock, Video, Building2, Users, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  palette: ThemePalette;
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getModalityIcon = (modality: 'online' | 'presencial' | 'ambas') => {
    switch (modality) {
      case 'online':
        return <Video className="w-4 h-4" />;
      case 'presencial':
        return <Building2 className="w-4 h-4" />;
      case 'ambas':
        return <Users className="w-4 h-4" />;
    }
  };

  const getModalityLabel = (modality: 'online' | 'presencial' | 'ambas') => {
    switch (modality) {
      case 'online': return 'Modalidade Online';
      case 'presencial': return 'Modalidade Presencial';
      case 'ambas': return 'Online & Presencial';
    }
  };

  return (
    <section
      id="servicos"
      className="py-20 lg:py-28 relative bg-[#F5EEF9]/50 border-t border-[#E8DBF0]"
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
            Modalidades de Atendimento
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#2A1D32]"
          >
            Serviços desenhados para a sua comodidade e evolução
          </h2>
          <p
            className="text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal leading-relaxed text-[#5A4863]"
          >
            Com flexibilidade de horários, tecnologia segura e acolhimento contínuo.
            Escolha o formato que melhor se adapta à sua rotina.
          </p>
        </motion.div>

        {/* Services Grid with motion animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`p-8 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between relative group ${
                service.highlight
                  ? 'shadow-lg border-[#845796]/40 ring-1 ring-[#845796]/20'
                  : 'shadow-2xs hover:shadow-md border-[#E8DBF0]'
              }`}
            >
              {service.highlight && (
                <div
                  className="absolute -top-3 right-8 px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-white shadow-sm bg-[#845796]"
                >
                  Mais Procurado
                </div>
              )}

              <div>
                {/* Meta badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-[#F5EEF9] text-[#845796]"
                  >
                    {getModalityIcon(service.modality)}
                    <span>{getModalityLabel(service.modality)}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs sm:text-sm font-normal text-[#5A4863] bg-[#FAF7FC] border border-[#E8DBF0]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                <h3
                  className="font-serif text-2xl sm:text-3xl font-medium mb-1.5 text-[#2A1D32]"
                >
                  {service.title}
                </h3>
                <p
                  className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 text-[#845796]"
                >
                  {service.subtitle}
                </p>

                <p
                  className="text-base font-normal leading-relaxed mb-6 text-[#5A4863]"
                >
                  {service.summary}
                </p>

                {/* Benefits */}
                <div className="space-y-2.5 pt-4 border-t border-[#F0E5F5] mb-8">
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#7A6384]">
                    O que você recebe:
                  </p>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base font-normal text-[#3A2A42]">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-1 bg-[#F5EEF9] text-[#845796]"
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: WhatsApp CTA */}
              <WhatsAppButton
                id={`btn-service-${service.id}`}
                onClick={() => onSelectService(service.title)}
                fullWidth
                size="md"
                text={`Agendar ${service.title}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
