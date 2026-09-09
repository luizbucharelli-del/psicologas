import { useState, useEffect, FormEvent } from 'react';
import { ThemePalette, PsychologistProfile } from '../types';
import { X, MessageCircle, CheckCircle, Calendar, Sparkles, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  palette: ThemePalette;
  profile: PsychologistProfile;
  initialService?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  palette,
  profile,
  initialService,
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [period, setPeriod] = useState<'manha' | 'tarde' | 'noite' | 'flexivel'>('flexivel');
  const [goal, setGoal] = useState('Ansiedade & Sobrecarga');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes('presencial')) {
        setModality('presencial');
      } else if (initialService.toLowerCase().includes('online')) {
        setModality('online');
      }
    }
  }, [initialService]);

  if (!isOpen) return null;

  const goalsList = [
    'Ansiedade & Sobrecarga',
    'Burnout & Estresse Profissional',
    'Relacionamentos & Família',
    'Autoestima & Insegurança',
    'Luto ou Término de Ciclo',
    'Autoconhecimento & Desenvolvimento',
    'Outro motivo específico',
  ];

  const periodLabels = {
    manha: 'Manhã (08h às 12h)',
    tarde: 'Tarde (13h às 18h)',
    noite: 'Noite (18h às 21h)',
    flexivel: 'Horário flexível',
  };

  const handleSendToWhatsapp = (e: FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    const periodText = periodLabels[period];
    const modalityText = modality === 'online' ? 'Online' : 'Presencial em SP';
    const patientName = name.trim() || 'Olá';

    const message = `Olá, ${profile.name}! Meu nome é ${patientName}. Acessei seu site e gostaria de agendar uma primeira consulta de Psicoterapia.\n\n*Modalidade desejada:* ${modalityText}\n*Preferência de período:* ${periodText}\n*Foco principal:* ${goal}\n\nPoderia me informar as próximas disponibilidades de horários e valores? Obrigado(a)!`;

    const encodedMessage = encodeURIComponent(message);
    const cleanNumber = profile.whatsappNumber.replace(/\D/g, '');
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      onClose();
      setIsSuccess(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border overflow-hidden animate-in zoom-in-95 duration-200"
        style={{ borderColor: palette.colors.border }}
      >
        {/* Header Ribbon */}
        <div
          className="p-6 text-white relative flex items-center justify-between bg-[#845796]"
        >
          <div>
            <span className="inline-flex items-center gap-1 text-[11px] font-light uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full mb-1.5">
              <Sparkles className="w-3 h-3 text-[#E8DBF0]" />
              <span>Primeiro Contato</span>
            </span>
            <h3 className="font-serif text-2xl font-normal">
              Agendamento de Consulta
            </h3>
            <p className="text-xs text-white/90 font-light mt-0.5">
              {profile.name} • {profile.crp}
            </p>
          </div>

          <button
            id="btn-close-booking-modal"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div
              className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white shadow-md animate-bounce"
              style={{ backgroundColor: palette.colors.primary }}
            >
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-gray-800">
              Redirecionando para o WhatsApp...
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Sua mensagem personalizada foi gerada com sucesso e a conversa está sendo aberta.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendToWhatsapp} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Seu Nome Completo
              </label>
              <input
                id="input-booking-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Mariana Silva"
                className="w-full px-3.5 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
                style={{
                  borderColor: palette.colors.border,
                }}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Seu WhatsApp para Retorno
              </label>
              <input
                id="input-booking-phone"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="(11) 98765-4321"
                className="w-full px-3.5 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
                style={{
                  borderColor: palette.colors.border,
                }}
              />
            </div>

            {/* Modality Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                Modalidade de Atendimento
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  id="btn-modal-online"
                  onClick={() => setModality('online')}
                  className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                    modality === 'online'
                      ? 'border-2 font-semibold shadow-xs'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    borderColor: modality === 'online' ? palette.colors.primary : undefined,
                    backgroundColor: modality === 'online' ? palette.colors.primaryLight : '#fff',
                  }}
                >
                  <p className="font-bold text-gray-900">💻 Online (Videochamada)</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Brasil e Exterior</p>
                </button>

                <button
                  type="button"
                  id="btn-modal-presencial"
                  onClick={() => setModality('presencial')}
                  className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                    modality === 'presencial'
                      ? 'border-2 font-semibold shadow-xs'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    borderColor: modality === 'presencial' ? palette.colors.primary : undefined,
                    backgroundColor: modality === 'presencial' ? palette.colors.primaryLight : '#fff',
                  }}
                >
                  <p className="font-bold text-gray-900">🏢 Presencial</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{profile.location.split('•')[0]}</p>
                </button>
              </div>
            </div>

            {/* Period Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                Melhor Período para Consulta
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs">
                {(['manha', 'tarde', 'noite', 'flexivel'] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPeriod(p)}
                    className={`py-2 px-2 rounded-lg border text-center transition-all ${
                      period === p
                        ? 'font-semibold border-2'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                    style={{
                      borderColor: period === p ? palette.colors.primary : undefined,
                      backgroundColor: period === p ? palette.colors.primaryLight : '#fff',
                    }}
                  >
                    {p === 'manha' && 'Manhã'}
                    {p === 'tarde' && 'Tarde'}
                    {p === 'noite' && 'Noite'}
                    {p === 'flexivel' && 'Flexível'}
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Dropdown */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Foco Principal
              </label>
              <select
                id="select-booking-goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-3 py-2.5 border rounded-xl text-xs sm:text-sm bg-white focus:outline-none"
                style={{ borderColor: palette.colors.border }}
              >
                {goalsList.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="btn-submit-booking-whatsapp"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-medium text-white shadow-md transition-all hover:brightness-105 active:scale-[0.98] bg-[#25D366] hover:bg-[#20bd5a]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Continuar para o WhatsApp</span>
                <Send className="w-3.5 h-3.5 ml-1" />
              </button>
              <p className="text-[11px] text-center text-gray-400 mt-2">
                🔒 Seus dados são confidenciais e protegidos sob sigilo ético profissional.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
