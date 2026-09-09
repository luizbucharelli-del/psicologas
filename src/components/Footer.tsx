import { ThemePalette, PsychologistProfile } from '../types';
import { WhatsAppButton } from './WhatsAppButton';
import { ShieldCheck, Phone, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  palette: ThemePalette;
  profile: PsychologistProfile;
  onOpenBooking: () => void;
}

export function Footer({ profile, onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="border-t border-[#E8DBF0] pt-16 pb-12 bg-[#FAF7FC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E8DBF0]">
          {/* Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg font-medium border border-[#E8DBF0] bg-[#F5EEF9] text-[#845796]"
              >
                FM
              </div>
              <div>
                <h3
                  className="font-serif text-xl font-medium text-[#2A1D32]"
                >
                  {profile.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#7A6682] font-normal">
                  {profile.approach}
                </p>
              </div>
            </div>

            <p
              className="text-sm sm:text-base font-normal leading-relaxed max-w-sm text-[#5A4863]"
            >
              Cuidado psicológico individualizado, com ética, rigor científico e acolhimento humano para que você resgate o equilíbrio e a leveza na sua vida.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-1 rounded-full border border-[#E8DBF0] bg-[#EFE2F5] text-[#6D3F80]"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{profile.crp} • Conselho Federal de Psicologia</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base sm:text-lg font-medium text-[#2A1D32]">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm sm:text-base font-normal text-[#5A4863]">
              <li>
                <a href="#inicio" className="hover:text-[#845796] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#845796] transition-colors">Sobre Mim</a>
              </li>
              <li>
                <a href="#identificacao" className="hover:text-[#845796] transition-colors">Para Quem É a Terapia</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#845796] transition-colors">Atendimentos</a>
              </li>
              <li>
                <a href="#consultorio" className="hover:text-[#845796] transition-colors">O Espaço Físico</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#845796] transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-medium text-[#2A1D32]">
              Atendimento & Contato
            </h4>

            <div className="space-y-2.5 text-sm sm:text-base font-normal text-[#5A4863]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-1 text-[#845796]" />
                <span>{profile.location} (e Atendimento Online Global)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-[#845796]" />
                <span>WhatsApp: +{profile.whatsappNumber}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-[#845796]" />
                <span>contato@fernandamelopsicologia.com.br</span>
              </div>
            </div>

            <WhatsAppButton
              id="btn-footer-whatsapp-action"
              onClick={onOpenBooking}
              size="sm"
              text="Falar no WhatsApp"
            />
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-[#F5EEF9]/80 border border-[#E8DBF0] text-xs sm:text-sm font-normal text-[#5A4863] flex items-start sm:items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#845796] shrink-0 mt-1 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-[#2A1D32]">Aviso Importante:</strong> Este website não oferece atendimento para urgências e emergências psiquiátricas. Em caso de crise ou ideação suicida, ligue imediatamente e gratuitamente para o <strong className="font-semibold text-[#2A1D32]">CVV (Centro de Valorização da Vida) no número 188</strong> (disponível 24h) ou dirija-se ao pronto-socorro ou CAPS mais próximo.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-normal text-[#7A6384] gap-4">
          <p>
            © {currentYear} {profile.name} • Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Código de Ética do Psicólogo</span>
            <span>•</span>
            <span>Plataforma e-Psi CFP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
