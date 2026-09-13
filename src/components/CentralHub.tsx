import React, { useState } from 'react';
import {
  Trophy,
  CalendarDays,
  UserCheck,
  Repeat,
  Brain,
  Shield,
  ArrowRight,
  Sparkles,
  Globe2,
  X
} from 'lucide-react';
import { focusedLeagues, hubNodes } from '../data/mockData';
import { HubNode, FocusedLeague } from '../types';

const nodeIcons: Record<string, React.ElementType> = {
  Trophy,
  CalendarDays,
  UserCheck,
  Repeat,
  Brain,
  Shield
};

interface CentralHubProps {
  onNodeClick: (node: HubNode) => void;
  onLeagueClick: (league: FocusedLeague) => void;
}

export const CentralHub: React.FC<CentralHubProps> = ({ onNodeClick, onLeagueClick }) => {
  const [hoveredNode, setHoveredNode] = useState<HubNode | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      
      {/* Left Box: COMPETICIONES EN FOCO (4 cols) */}
      <div className="lg:col-span-4 glass-panel rounded-2xl p-4 border border-[#2B4C7E] flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.4)]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#24426C] mb-3">
            <h2 className="font-heading font-black text-lg text-white uppercase tracking-wider flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#00E5A0]" />
              COMPETICIONES EN FOCO
            </h2>
            <button
              onClick={() => onLeagueClick(focusedLeagues[0])}
              className="text-xs font-semibold text-[#00E5A0] hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              Ver todas <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
            {focusedLeagues.map((league) => (
              <div
                key={league.id}
                onClick={() => onLeagueClick(league)}
                className="group flex items-center justify-between p-2.5 rounded-xl bg-[#09111E] border border-[#20375A] hover:border-[#00E5A0] hover:bg-[#0F1E36] transition-all cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">{league.flag}</span>
                  <div>
                    <div className="font-heading font-bold text-sm text-slate-100 group-hover:text-[#00E5A0] transition-colors">
                      {league.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {league.seasonInfo}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Box: GLOBAL HUB ORB & 6 ORBITING NODES (8 cols) */}
      <div className="lg:col-span-8 glass-panel rounded-2xl p-5 border border-[#2B4C7E] relative overflow-hidden flex flex-col justify-between min-h-[420px] shadow-[0_0_20px_rgba(0,0,0,0.4)]">
        
        {/* Background Ambient Glow & Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0,transparent_70%)]"></div>
        <div className="absolute top-2 left-0 right-0 text-center">
          <span className="text-[10px] font-heading font-black tracking-widest text-[#00E5A0] uppercase bg-[#00E5A0]/10 border border-[#00E5A0]/30 px-3 py-1 rounded-full">
            EL FÚTBOL NUNCA SE DETIENE
          </span>
        </div>

        {/* Center Orb Graphic */}
        <div className="relative my-auto py-8 flex flex-col items-center justify-center">
          
          {/* Orbit Rings */}
          <div className="absolute w-72 h-72 rounded-full border border-blue-500/20"></div>
          <div className="absolute w-80 h-80 rounded-full border border-cyan-500/15"></div>

          {/* Central Globe Graphic */}
          <div className="relative z-10 w-48 h-48 rounded-full bg-[#081220] border-2 border-[#3B82F6]/50 flex flex-col items-center justify-center p-4 text-center">
            <Globe2 className="w-8 h-8 text-[#00E5A0] mb-1" />
            <h3 className="font-heading font-black text-xl text-white tracking-wider uppercase leading-tight">
              FOOTBALL
            </h3>
            <div className="text-[10px] font-heading font-bold text-[#00E5A0] tracking-widest uppercase">
              ANALYTICS CENTER
            </div>
            <div className="mt-1 text-[8px] font-mono text-slate-400 border-t border-[#1E3050] pt-1">
              DATOS · ANÁLISIS · OPORTUNIDADES
            </div>
          </div>

          {/* 6 Orbiting Circular Nodes positioned radially */}
          {/* 1: Competiciones (Top Left) */}
          <button
            onClick={() => onNodeClick(hubNodes[0])}
            onMouseEnter={() => setHoveredNode(hubNodes[0])}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute -top-2 left-6 md:left-12 flex items-center gap-2 bg-[#091322] border border-blue-500/50 hover:border-[#00E5A0] hover:bg-[#102038] transition-colors p-2.5 rounded-full group"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:bg-[#00E5A0] group-hover:text-[#060B14] transition-colors">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="text-left pr-2 hidden sm:block">
              <div className="font-heading font-bold text-xs text-white uppercase group-hover:text-[#00E5A0]">COMPETICIONES</div>
              <div className="text-[9px] text-slate-400 leading-none">Ligas, copas, torneos</div>
            </div>
          </button>

          {/* 2: Partidos (Top Right) */}
          <button
            onClick={() => onNodeClick(hubNodes[1])}
            onMouseEnter={() => setHoveredNode(hubNodes[1])}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute -top-2 right-6 md:right-12 flex items-center gap-2 bg-[#091322] border border-rose-500/50 hover:border-[#00E5A0] hover:bg-[#102038] transition-colors p-2.5 rounded-full group"
          >
            <div className="w-8 h-8 rounded-full bg-rose-600/20 text-rose-400 flex items-center justify-center group-hover:bg-[#00E5A0] group-hover:text-[#060B14] transition-colors">
              <CalendarDays className="w-4 h-4" />
            </div>
            <div className="text-left pr-2 hidden sm:block">
              <div className="font-heading font-bold text-xs text-white uppercase group-hover:text-[#00E5A0]">PARTIDOS</div>
              <div className="text-[9px] text-slate-400 leading-none">Hoy, próximos, resultados</div>
            </div>
          </button>

          {/* 3: Jugadores (Middle Right) */}
          <button
            onClick={() => onNodeClick(hubNodes[2])}
            onMouseEnter={() => setHoveredNode(hubNodes[2])}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute top-1/2 -translate-y-1/2 -right-2 sm:right-2 flex items-center gap-2 bg-[#091322] border border-purple-500/50 hover:border-[#00E5A0] hover:bg-[#102038] transition-colors p-2.5 rounded-full group"
          >
            <div className="w-8 h-8 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center group-hover:bg-[#00E5A0] group-hover:text-[#060B14] transition-colors">
              <UserCheck className="w-4 h-4" />
            </div>
            <div className="text-left pr-2 hidden sm:block">
              <div className="font-heading font-bold text-xs text-white uppercase group-hover:text-[#00E5A0]">JUGADORES</div>
              <div className="text-[9px] text-slate-400 leading-none">Stats, lesiones, rating</div>
            </div>
          </button>

          {/* 4: Transferencias (Bottom Right) */}
          <button
            onClick={() => onNodeClick(hubNodes[3])}
            onMouseEnter={() => setHoveredNode(hubNodes[3])}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute -bottom-2 right-6 md:right-12 flex items-center gap-2 bg-[#091322] border border-emerald-500/50 hover:border-[#00E5A0] hover:bg-[#102038] transition-colors p-2.5 rounded-full group"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center group-hover:bg-[#00E5A0] group-hover:text-[#060B14] transition-colors">
              <Repeat className="w-4 h-4" />
            </div>
            <div className="text-left pr-2 hidden sm:block">
              <div className="font-heading font-bold text-xs text-white uppercase group-hover:text-[#00E5A0]">TRANSFERENCIAS</div>
              <div className="text-[9px] text-slate-400 leading-none">Rumores, fichajes, valores</div>
            </div>
          </button>

          {/* 5: Inteligencia (Bottom Left) */}
          <button
            onClick={() => onNodeClick(hubNodes[4])}
            onMouseEnter={() => setHoveredNode(hubNodes[4])}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute -bottom-2 left-6 md:left-12 flex items-center gap-2 bg-[#091322] border border-amber-500/50 hover:border-[#00E5A0] hover:bg-[#102038] transition-colors p-2.5 rounded-full group"
          >
            <div className="w-8 h-8 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center group-hover:bg-[#00E5A0] group-hover:text-[#060B14] transition-colors">
              <Brain className="w-4 h-4" />
            </div>
            <div className="text-left pr-2 hidden sm:block">
              <div className="font-heading font-bold text-xs text-white uppercase group-hover:text-[#00E5A0]">INTELIGENCIA</div>
              <div className="text-[9px] text-slate-400 leading-none">Predicciones, value bets</div>
            </div>
          </button>

          {/* 6: Equipos (Middle Left) */}
          <button
            onClick={() => onNodeClick(hubNodes[5])}
            onMouseEnter={() => setHoveredNode(hubNodes[5])}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute top-1/2 -translate-y-1/2 -left-2 sm:left-2 flex items-center gap-2 bg-[#091322] border border-cyan-500/50 hover:border-[#00E5A0] hover:bg-[#102038] transition-colors p-2.5 rounded-full group"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-600/20 text-cyan-400 flex items-center justify-center group-hover:bg-[#00E5A0] group-hover:text-[#060B14] transition-colors">
              <Shield className="w-4 h-4" />
            </div>
            <div className="text-left pr-2 hidden sm:block">
              <div className="font-heading font-bold text-xs text-white uppercase group-hover:text-[#00E5A0]">EQUIPOS</div>
              <div className="text-[9px] text-slate-400 leading-none">Rendimiento, forma, stats</div>
            </div>
          </button>

        </div>

        {/* Hover Banner info */}
        <div className="text-center pt-2 border-t border-[#1E3050]">
          {hoveredNode ? (
            <div className="text-xs text-[#00E5A0] font-mono animate-fade-in">
              💡 <span className="font-bold uppercase">{hoveredNode.title}:</span> {hoveredNode.description}
            </div>
          ) : (
            <div className="text-[11px] text-slate-400 font-heading font-bold tracking-widest uppercase">
              UN AÑO. TODAS LAS COMPETICIONES. UNA SOLA PLATAFORMA.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
