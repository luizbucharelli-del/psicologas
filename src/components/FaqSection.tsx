import { useState } from 'react';
import { ThemePalette } from '../types';
import { FAQ_ITEMS } from '../data/content';
import { WhatsAppButton } from './WhatsAppButton';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  palette: ThemePalette;
  onOpenBooking: () => void;
}

export function FaqSection({ onOpenBooking }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>('reembolso');
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'valores', label: 'Planos & Reembolso' },
    { id: 'atendimento', label: 'Formato & Sessões' },
    { id: 'online', label: 'Terapia Online' },
  ];

  const filteredItems = activeCategory === 'todos'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 relative bg-[#F5EEF9]/50 border-t border-[#E8DBF0]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span
            className="inline-block text-xs font-light uppercase tracking-widest px-3.5 py-1 rounded-full mb-3 border border-[#E8DBF0] bg-[#EFE2F5] text-[#6D3F80]"
          >
            Esclarecimentos
          </span>
          <h2
            className="text-3xl sm:text-4xl font-serif font-medium tracking-tight text-[#2A1D32]"
          >
            Dúvidas Frequentes
          </h2>
          <p
            className="text-base sm:text-lg mt-3 font-normal leading-relaxed text-[#5A4863]"
          >
            Respostas transparentes sobre funcionamento, investimento e metodologia.
          </p>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                  isActive
                    ? 'text-white shadow-xs bg-[#845796] border border-[#845796]'
                    : 'bg-white hover:bg-[#FAF7FC] text-[#5A4863] border border-[#E8DBF0]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl bg-white border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#845796]/50 shadow-md ring-1 ring-[#845796]/10'
                    : 'border-[#E8DBF0] shadow-2xs hover:border-[#845796]/30'
                }`}
              >
                <button
                  id={`btn-faq-${item.id}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span
                    className="font-serif text-lg sm:text-xl font-medium pr-2 text-[#2A1D32]"
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#845796] text-white' : 'bg-[#F5EEF9] text-[#845796]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-1 text-base font-normal leading-relaxed text-[#54435C] border-t border-[#F0E5F5]"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact Prompt with WhatsAppButton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-white border border-[#E8DBF0] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs"
        >
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl font-medium text-[#2A1D32]">
              Ficou com alguma dúvida específica?
            </h4>
            <p className="text-sm font-normal text-[#5A4863] mt-1">
              Me chame no WhatsApp e tire qualquer dúvida antes de agendar.
            </p>
          </div>
          <WhatsAppButton
            id="btn-faq-whatsapp"
            onClick={onOpenBooking}
            size="sm"
            text="Falar no WhatsApp"
            className="shrink-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
