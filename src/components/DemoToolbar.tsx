import { useState } from 'react';
import { PaletteId, PsychologistProfile } from '../types';
import { PALETTES } from '../data/content';
import { Sparkles, Palette, Edit3, ChevronDown, ChevronUp, Check, RotateCcw } from 'lucide-react';

interface DemoToolbarProps {
  currentPaletteId: PaletteId;
  onSelectPalette: (id: PaletteId) => void;
  profile: PsychologistProfile;
  onUpdateProfile: (updated: Partial<PsychologistProfile>) => void;
  onResetProfile: () => void;
}

export function DemoToolbar({
  currentPaletteId,
  onSelectPalette,
  profile,
  onUpdateProfile,
  onResetProfile,
}: DemoToolbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'palettes' | 'personalizar'>('palettes');

  const activePalette = PALETTES[currentPaletteId] || PALETTES.terracota;

  return (
    <aside aria-label="Painel de Demonstração" className="fixed top-3 right-3 z-50 max-w-sm sm:max-w-md print:hidden">
      {/* Floating Toggle Button */}
      <button
        id="btn-toggle-demo-panel"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg text-xs font-semibold tracking-wide backdrop-blur-md transition-all duration-300 border hover:scale-105"
        style={{
          backgroundColor: activePalette.colors.bgCard,
          borderColor: activePalette.colors.primary,
          color: activePalette.colors.primary,
        }}
      >
        <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
        <span>Modo Apresentação do Cliente</span>
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: activePalette.colors.primary }}
        />
        {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {/* Expanded Controls Drawer */}
      {isOpen && (
        <div
          className="mt-2 p-4 rounded-2xl shadow-2xl border backdrop-blur-xl bg-white/95 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            borderColor: activePalette.colors.border,
            boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.15)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Demonstração Interativa
              </p>
              <h4 className="text-sm font-semibold text-gray-800">
                Personalize para o seu Cliente
              </h4>
            </div>
            <button
              id="btn-reset-demo"
              onClick={onResetProfile}
              title="Restaurar padrão"
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 my-3 p-1 bg-gray-100/80 rounded-xl">
            <button
              id="tab-palettes"
              onClick={() => setActiveTab('palettes')}
              className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'palettes'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Identidades Visuais ({Object.keys(PALETTES).length})</span>
            </button>
            <button
              id="tab-customize"
              onClick={() => setActiveTab('personalizar')}
              className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'personalizar'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Dados da Profissional</span>
            </button>
          </div>

          {/* Palette Selector Tab */}
          {activeTab === 'palettes' && (
            <div className="space-y-2">
              <p className="text-[11px] text-gray-500 mb-2">
                Troque a paleta com 1 clique para mostrar diferentes atmosferas de marca:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Object.values(PALETTES).map((pal) => {
                  const isSelected = pal.id === currentPaletteId;
                  return (
                    <button
                      key={pal.id}
                      id={`palette-${pal.id}`}
                      onClick={() => onSelectPalette(pal.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all text-xs relative ${
                        isSelected
                          ? 'border-2 shadow-sm font-semibold'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{
                        borderColor: isSelected ? pal.colors.primary : undefined,
                        backgroundColor: isSelected ? pal.colors.primaryLight : '#ffffff',
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10"
                          style={{ backgroundColor: pal.colors.primary }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10"
                          style={{ backgroundColor: pal.colors.secondary }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10"
                          style={{ backgroundColor: pal.colors.bgSubtle }}
                        />
                      </div>
                      <p className="font-medium text-gray-800">{pal.name}</p>
                      {isSelected && (
                        <Check
                          className="w-3.5 h-3.5 absolute top-2 right-2"
                          style={{ color: pal.colors.primary }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-gray-500 italic mt-2 text-center">
                {activePalette.description}
              </p>
            </div>
          )}

          {/* Customization Tab */}
          {activeTab === 'personalizar' && (
            <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1 text-xs">
              <p className="text-[11px] text-gray-500 mb-1">
                Coloque o nome e CRP da sua cliente para ela se ver imediatamente no site:
              </p>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-0.5">
                  Nome da Psicóloga
                </label>
                <input
                  id="input-demo-name"
                  type="text"
                  value={profile.name}
                  onChange={(e) => onUpdateProfile({ name: e.target.value })}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-0.5">
                  Registro CRP
                </label>
                <input
                  id="input-demo-crp"
                  type="text"
                  value={profile.crp}
                  onChange={(e) => onUpdateProfile({ crp: e.target.value })}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-0.5">
                  Abordagem / Especialidade
                </label>
                <input
                  id="input-demo-approach"
                  type="text"
                  value={profile.approach}
                  onChange={(e) => onUpdateProfile({ approach: e.target.value })}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-0.5">
                  Cidade / Bairro
                </label>
                <input
                  id="input-demo-location"
                  type="text"
                  value={profile.location}
                  onChange={(e) => onUpdateProfile({ location: e.target.value })}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-0.5">
                  WhatsApp (para teste de clique)
                </label>
                <input
                  id="input-demo-whatsapp"
                  type="text"
                  value={profile.whatsappNumber}
                  onChange={(e) => onUpdateProfile({ whatsappNumber: e.target.value })}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
