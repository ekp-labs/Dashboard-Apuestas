import React, { useState } from 'react';
import { Calendar, Flame, Sparkles, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

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
    { id: 'todos', label: 'TODOS (9)' },
    { id: 'live', label: 'EN VIVO 🔴 (4)', isLive: true },
    { id: 'value', label: 'VALUE BETS ✨ (5)', isValue: true },
    { id: 'top', label: 'TOP LIGAS' }
  ];

  return (
    <div className="border-b border-[#1E3254] bg-[#070D18] px-4 lg:px-6 py-2.5">
      <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: FotMob-style Day Carousel Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#12223C] transition-colors shrink-0">
            <ChevronLeft className="w-4 h-4" />
          </button>

          {days.map((d) => {
            const isSelected = selectedDate === d.id;
            return (
              <button
                key={d.id}
                onClick={() => onSelectDate(d.id)}
                className={`flex flex-col items-center justify-center px-3 py-1.5 rounded-xl transition-colors shrink-0 ${
                  isSelected
                    ? 'bg-[#00E5A0] text-[#060B14] font-black'
                    : d.isToday
                    ? 'bg-[#10223B] text-[#00E5A0] border border-[#00E5A0]/50 font-bold'
                    : 'bg-[#0A1322] border border-[#1C2E4A] text-slate-300 hover:text-white hover:bg-[#12223C]'
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

          <button className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#12223C] transition-colors shrink-0">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Quick Action Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 bg-[#091220] border border-[#1E3254] p-1 rounded-xl">
            {filterOptions.map((opt) => {
              const isActive = selectedFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => onSelectFilter(opt.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : opt.isLive
                      ? 'text-rose-400 hover:bg-[#15233D]'
                      : opt.isValue
                      ? 'text-[#00E5A0] hover:bg-[#15233D]'
                      : 'text-slate-300 hover:text-white hover:bg-[#15233D]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onSelectDate('2026-09-12')}
            className="flex items-center gap-1.5 bg-[#00E5A0]/10 border border-[#00E5A0]/40 text-[#00E5A0] px-3 py-1.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#00E5A0]/20 transition-colors shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            Hoy
          </button>
        </div>

      </div>
    </div>
  );
};

