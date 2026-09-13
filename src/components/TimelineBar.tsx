import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { timelineStages } from '../data/mockData';

interface TimelineBarProps {
  selectedView: string;
  onSelectView: (view: string) => void;
}

export const TimelineBar: React.FC<TimelineBarProps> = ({ selectedView, onSelectView }) => {
  const [selectedSeason, setSelectedSeason] = useState('Temporada 2024/25');
  const [activeStageId, setActiveStageId] = useState('10'); // OCT active

  const viewOptions = [
    { id: 'temporal', label: 'VISTA TEMPORAL' },
    { id: 'competicion', label: 'VISTA POR COMPETICIÓN' },
    { id: 'equipo', label: 'VISTA POR EQUIPO' },
    { id: 'jugador', label: 'VISTA POR JUGADOR' }
  ];

  return (
    <div className="border-b border-[#24426C] bg-[#070D18] px-4 lg:px-6 py-3">
      <div className="max-w-[1920px] mx-auto space-y-3">
        
        {/* Top Control Bar: Views & Season Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Views Selector Tabs */}
          <div className="flex items-center gap-1.5 bg-[#0B1322] border border-[#24426C] p-1 rounded-xl">
            {viewOptions.map((view) => {
              const isActive = selectedView === view.id;
              return (
                <button
                  key={view.id}
                  onClick={() => onSelectView(view.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#15233D]'
                  }`}
                >
                  {view.label}
                </button>
              );
            })}
          </div>

          {/* Season Selector & Today Button */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#0B1322] border border-[#1B2A45] rounded-xl px-2 py-1 text-xs text-slate-200">
              <button className="p-1 hover:text-[#00E5A0] transition-colors">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="font-heading font-bold px-2 uppercase tracking-wider text-[#00E5A0]">
                {selectedSeason}
              </span>
              <button className="p-1 hover:text-[#00E5A0] transition-colors">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => setActiveStageId('10')}
              className="flex items-center gap-1.5 bg-[#00E5A0]/10 border border-[#00E5A0]/40 text-[#00E5A0] px-3 py-1.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#00E5A0]/20 transition-all shadow-[0_0_10px_rgba(0,229,160,0.15)]"
            >
              <Calendar className="w-3.5 h-3.5" />
              Hoy
            </button>
          </div>

        </div>

        {/* Horizontal Timeline Bar across Months */}
        <div className="relative pt-1 pb-1 overflow-x-auto no-scrollbar">
          {/* Connecting Line */}
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-[#1E3254] z-0"></div>

          <div className="grid grid-cols-12 min-w-[650px] gap-1 relative z-10">
            {timelineStages.map((stage) => {
              const isActive = activeStageId === stage.id;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className="flex flex-col items-center group cursor-pointer select-none"
                >
                  {/* Month Marker Circle */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-mono font-bold transition-colors ${
                      isActive
                        ? 'bg-[#00E5A0] text-[#060B14] font-black'
                        : 'bg-[#0E1B2E] border border-[#203654] text-[#94A3B8] group-hover:border-[#3B82F6] group-hover:text-white'
                    }`}
                  >
                    {stage.label}
                  </div>

                  {/* Stage Label Below Marker */}
                  <div
                    className={`text-[10px] text-center mt-1 leading-tight px-0.5 ${
                      isActive
                        ? 'text-[#00E5A0] font-bold uppercase tracking-tight'
                        : 'text-[#64748B] group-hover:text-slate-300'
                    }`}
                  >
                    {stage.stageName}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
