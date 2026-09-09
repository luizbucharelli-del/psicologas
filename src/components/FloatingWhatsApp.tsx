import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { ThemePalette } from '../types';

interface FloatingWhatsAppProps {
  palette: ThemePalette;
  onOpenBooking: () => void;
}

export function FloatingWhatsApp({ palette, onOpenBooking }: FloatingWhatsAppProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-xl border text-xs font-semibold text-gray-800 animate-in fade-in slide-in-from-right duration-300"
          style={{ borderColor: palette.colors.border }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Dúvidas? Agende sua sessão aqui</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 text-gray-400 hover:text-gray-600 text-xs"
          >
            ×
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        id="btn-floating-whatsapp"
        onClick={onOpenBooking}
        aria-label="Falar no WhatsApp"
        className="relative group w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          backgroundColor: '#25D366',
        }}
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-pulse group-hover:opacity-50" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white text-white" />
        
        {/* Active badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full z-20" />
      </button>
    </div>
  );
}
