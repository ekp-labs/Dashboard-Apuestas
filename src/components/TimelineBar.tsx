import React from 'react';
import { Calendar, Radio, Sparkles, Trophy, Layers, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

interface TimelineBarProps {
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export const TimelineBar: React.FC<TimelineBarProps> = ({
  selectedFilter,
  onSelectFilter,
  selectedDate,
  onSelectDate
}) => {
  const days = [
    { id: '2026-09-10', dayName: 'Mié', dayNum: '10' },
    { id: '2026-09-11', dayName: 'Jue', dayNum: '11', isYesterday: true },
    { id: '2026-09-12', dayName: 'HOY', dayNum: '12', isToday: true },
    { id: '2026-09-13', dayName: 'Sáb', dayNum: '13' },
    { id: '2026-09-14', dayName: 'Dom', dayNum: '14' },
    { id: '2026-09-15', dayName: 'Lun', dayNum: '15' },
    { id: '2026-09-16', dayName: 'Mar', dayNum: '16' }
  ];

  const filterOptions = [
    { id: 'todos', label: 'Todos los Partidos', icon: Layers, count: '9', color: 'blue' },
    { id: 'live', label: 'Partidos en Vivo', icon: Radio, count: '4', isLive: true, color: 'rose' },
    { id: 'value', label: 'Value Bets (+EV)', icon: Sparkles, count: '5', isValue: true, color: 'emerald' },
    { id: 'top', label: 'Top Ligas', icon: Trophy, count: '4', color: 'amber' }
  ];

  return (
    <div className="border-b border-[#182B48] bg-[#050B15] px-4 lg:px-6 py-2">
      <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: FotMob-style Day Carousel Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-[#0F1E36] transition-all shrink-0">
            <ChevronLeft className="w-4 h-4" />
          </button>

          {days.map((d) => {
            const isSelected = selectedDate === d.id;
            return (
              <button
                key={d.id}
                onClick={() => onSelectDate(d.id)}
                className={`flex flex-col items-center justify-center px-3.5 py-1.5 rounded-xl transition-all shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#00E5A0] to-[#00B880] text-[#040812] font-black shadow-[0_0_12px_rgba(0,229,160,0.35)] scale-105'
                    : d.isToday
                    ? 'bg-[#0E1D34] text-[#00E5A0] border border-[#00E5A0]/50 font-bold'
                    : 'bg-[#081222] border border-[#162945] text-slate-300 hover:text-white hover:bg-[#0E1D34] hover:border-[#223E66]'
                }`}
              >
                <span className="text-[10px] font-heading uppercase tracking-wider leading-none">
                  {d.dayName}
                </span>
                <span className="text-sm font-mono font-bold leading-tight mt-0.5">
                  {d.dayNum}
                </span>
              </button>
            );
          })}

          <button className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-[#0F1E36] transition-all shrink-0">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Cyber Threat Intel Style Circular Icon Command Rail */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 bg-[#081324] border border-[#172B47] p-1.5 rounded-2xl">
            {filterOptions.map((opt) => {
              const Icon = opt.icon;
              const isActive = selectedFilter === opt.id;

              return (
                <button
                  key={opt.id}
                  onClick={() => onSelectFilter(opt.id)}
                  title={opt.label}
                  className={`group relative flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                    isActive
                      ? opt.isLive
                        ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.6)] ring-2 ring-rose-400'
                        : opt.isValue
                        ? 'bg-[#00E5A0] text-[#040812] shadow-[0_0_15px_rgba(0,229,160,0.6)] ring-2 ring-[#00E5A0]'
                        : 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] ring-2 ring-blue-400'
                      : opt.isLive
                      ? 'bg-[#150A14] border border-rose-500/40 text-rose-400 hover:border-rose-400 hover:bg-rose-950/40'
                      : opt.isValue
                      ? 'bg-[#081816] border border-[#00E5A0]/40 text-[#00E5A0] hover:border-[#00E5A0] hover:bg-[#00E5A0]/10'
                      : 'bg-[#0C1729] border border-[#1A2F4E] text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-[#12223C]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${opt.isLive && !isActive ? 'animate-pulse' : ''}`} />

                  {/* Count badge */}
                  <span className={`absolute -top-1 -right-1 text-[9px] font-mono font-black px-1.5 py-0.2 rounded-full border ${
                    isActive
                      ? 'bg-[#040812] text-white border-white/40'
                      : 'bg-[#0E1D34] text-slate-200 border-[#20395E]'
                  }`}>
                    {opt.count}
                  </span>

                  {/* Tooltip on Hover */}
                  <span className="absolute bottom-full mb-2 hidden group-hover:block whitespace-nowrap bg-[#0B172A] border border-[#1C3357] text-white text-[10px] font-mono px-2 py-1 rounded-md shadow-xl z-50 pointer-events-none">
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onSelectDate('2026-09-12')}
            title="Ir a Hoy"
            className="flex items-center justify-center w-9 h-9 bg-[#00E5A0]/10 border border-[#00E5A0]/40 text-[#00E5A0] rounded-full hover:bg-[#00E5A0]/20 transition-all shadow-[0_0_10px_rgba(0,229,160,0.15)] shrink-0"
          >
            <Calendar className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};


