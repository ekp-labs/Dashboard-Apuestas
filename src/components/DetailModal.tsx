import React from 'react';
import { X, Trophy, Brain, TrendingUp, Sparkles, AlertCircle, CheckCircle2, Shield, User } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  type: 'node' | 'league' | 'odds' | 'news' | 'search';
  data: any;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  type,
  data
}) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040810]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#081222] border border-[#1E3456] rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1E3050]">
          <div>
            <h2 className="font-heading font-black text-xl text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00E5A0]" />
              {title}
            </h2>
            {subtitle && <p className="text-xs text-slate-400 font-mono mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#0F1E36] text-slate-400 hover:text-white hover:bg-rose-500/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content based on Modal Type */}
        <div className="space-y-4 text-sm text-slate-200">
          
          {type === 'node' && (
            <div className="space-y-3">
              <div className="p-3 bg-[#0D1A30] border border-[#1E3050] rounded-xl flex items-center gap-3">
                <Brain className="w-6 h-6 text-[#00E5A0] shrink-0" />
                <div>
                  <div className="font-heading font-bold text-base text-white">{data.title}</div>
                  <div className="text-xs text-slate-300">{data.description}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-[#091324] border border-[#182B46] rounded-xl">
                  <span className="text-slate-400 font-mono block mb-1">MÉTRICAS CLAVE</span>
                  <span className="font-bold text-[#00E5A0]">48 Ligas | 1,200+ Jugadores</span>
                </div>
                <div className="p-3 bg-[#091324] border border-[#182B46] rounded-xl">
                  <span className="text-slate-400 font-mono block mb-1">FRECUENCIA DE DATOS</span>
                  <span className="font-bold text-blue-400">Sincronización en vivo (1s)</span>
                </div>
              </div>
            </div>
          )}

          {type === 'odds' && (
            <div className="space-y-3 bg-[#0D1B32] border border-[#1E3456] p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-base text-white">{data.match}</span>
                <span className="bg-[#00E5A0]/20 border border-[#00E5A0]/50 text-[#00E5A0] font-mono text-xs px-2 py-0.5 rounded-md font-bold">
                  Simulador Betcris
                </span>
              </div>
              <div className="p-3 bg-[#07101E] border border-[#162742] rounded-lg space-y-1 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selección:</span>
                  <span className="text-white font-bold">{data.oddType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cuota Betcris:</span>
                  <span className="text-[#00E5A0] font-bold text-sm">{data.oddValue?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-[#182A45] pt-1 mt-1">
                  <span className="text-slate-400">Apuesta Simulada (100 HNL):</span>
                  <span className="text-emerald-400 font-bold">Retorno Est.: {(100 * (data.oddValue || 1)).toFixed(2)} HNL</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 italic">
                ℹ️ Simulación interactiva con cuotas reales de Betcris integradas al modelo.
              </div>
            </div>
          )}

          {type === 'league' && (
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-[#0B172C] border border-[#1B2F4E] rounded-xl">
                <span className="text-2xl">{data.flag}</span>
                <div>
                  <h3 className="font-heading font-black text-lg text-white">{data.name}</h3>
                  <span className="text-xs text-[#00E5A0] font-mono">{data.seasonInfo}</span>
                </div>
              </div>
              <div className="p-3 bg-[#081120] border border-[#162842] rounded-xl text-xs space-y-1 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Código de Liga:</span>
                  <span className="text-white font-bold">{data.leagueCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estado de la temporada:</span>
                  <span className="text-[#00E5A0]">Jornadas Regulares en Curso</span>
                </div>
              </div>
            </div>
          )}

          {type === 'news' && (
            <div className="space-y-3">
              <img src={data.image} alt={data.headline} className="w-full h-40 object-cover rounded-xl border border-[#1E3252]" />
              <h3 className="font-heading font-black text-lg text-white">{data.headline}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Este reporte de inteligencia analiza el impacto táctico y de cuotas para los próximos enfrentamientos. Actualizado en vivo por el motor del Football Analytics Center.
              </p>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-[#1E3050] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#00E5A0] text-[#060B14] font-heading font-bold text-xs uppercase tracking-wider hover:bg-emerald-300 transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
