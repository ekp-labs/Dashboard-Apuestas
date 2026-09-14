import React, { useState } from 'react';
import { Sparkles, TrendingUp, Brain, Shield, ArrowRight, BarChart3, Activity, Zap, Target } from 'lucide-react';
import { valueBetOpportunity, liveStats } from '../data/mockData';

interface RightColumnProps {
  onSelectOdds: (match: string, oddType: string, oddValue: number) => void;
}

export const RightColumn: React.FC<RightColumnProps> = ({ onSelectOdds }) => {
  const [teamA, setTeamA] = useState('Liverpool');
  const [teamB, setTeamB] = useState('Arsenal');

  const teamOptions = [
    'Liverpool',
    'Arsenal',
    'Real Madrid',
    'FC Barcelona',
    'Manchester City',
    'Bayern München',
    'Inter Milan',
    'Francia',
    'Brasil'
  ];

  return (
    <div className="space-y-4">
      
      {/* CARD 1: SEÑAL DE VALOR DEL DÍA (VALUE BET +EV - Threat Intel Style) */}
      <div className="bg-[#050C18] rounded-2xl p-4 sm:p-5 border border-[#142844] space-y-3 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5A0]/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="flex items-center justify-between pb-2 border-b border-[#1A2E4C]">
          <div className="flex items-center gap-2">
            <div title="Señal Activa" className="w-6 h-6 rounded-full bg-[#00E5A0]/20 border border-[#00E5A0] flex items-center justify-center text-[#00E5A0] shadow-[0_0_10px_rgba(0,229,160,0.4)]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <h2 className="font-heading font-black text-sm sm:text-base text-white uppercase tracking-wider">
              SEÑAL DE VALOR IA (+EV)
            </h2>
          </div>
          <span title="Nivel de Severidad de Valor" className="text-[10px] font-mono font-bold text-[#00E5A0] bg-[#00E5A0]/10 border border-[#00E5A0]/40 px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1">
            <Zap className="w-3 h-3" /> ALTO +EV
          </span>
        </div>

        <div className="bg-[#081220] border border-[#182A45] rounded-xl p-3.5 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="font-heading font-bold text-sm text-white">
                {valueBetOpportunity.title}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                {valueBetOpportunity.match}
              </p>
            </div>
            
            {/* VALUE +8.7% Badge */}
            <div className="bg-[#00E5A0]/15 border border-[#00E5A0]/50 text-[#00E5A0] font-heading font-black text-sm px-2.5 py-1 rounded-xl shadow-[0_0_10px_rgba(0,229,160,0.2)]">
              +{valueBetOpportunity.valuePercentage}% EV
            </div>
          </div>

          {/* Probability Comparison Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-slate-300">Modelo IA: <strong className="text-[#00E5A0]">{valueBetOpportunity.modelProb}%</strong></span>
              <span className="text-slate-400">Cuota Mercado: <strong className="text-slate-200">{valueBetOpportunity.marketProb}%</strong></span>
            </div>
            
            <div className="w-full bg-[#12223A] h-2 rounded-full overflow-hidden flex shadow-inner">
              <div
                className="bg-gradient-to-r from-[#00E5A0] to-[#00B880] h-full transition-all duration-500"
                style={{ width: `${valueBetOpportunity.modelProb}%` }}
              ></div>
              <div
                className="bg-slate-600 h-full"
                style={{ width: `${100 - valueBetOpportunity.modelProb}%` }}
              ></div>
            </div>
          </div>

          <p className="text-[11px] text-slate-300 italic bg-[#0A1628] p-2.5 rounded-xl border border-[#162742] leading-snug flex items-start gap-1.5">
            <span className="text-amber-400 shrink-0">💡</span>
            <span>{valueBetOpportunity.recommendation}</span>
          </p>

          <button
            onClick={() => onSelectOdds(valueBetOpportunity.match, valueBetOpportunity.title, 2.10)}
            className="w-full py-2 bg-gradient-to-r from-[#00E5A0] to-[#00B880] text-[#060B14] font-heading font-black text-xs uppercase tracking-wider rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,229,160,0.3)]"
          >
            Añadir a Cupones Virtuales <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* CARD 2: SIMULADOR INTERACTIVO H2H & RADAR xG */}
      <div className="bg-[#050C18] rounded-2xl p-4 sm:p-5 border border-[#142844] space-y-4 shadow-xl">
        
        <div className="flex items-center justify-between pb-2 border-b border-[#1A2E4C]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400">
              <Brain className="w-3.5 h-3.5" />
            </div>
            <h2 className="font-heading font-black text-sm sm:text-base text-white uppercase tracking-wider">
              SIMULADOR H2H & RADAR xG
            </h2>
          </div>
        </div>

        {/* Selector dropdowns */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div>
            <label className="text-[10px] text-slate-400 block mb-1">EQUIPO 1</label>
            <select
              value={teamA}
              onChange={(e) => setTeamA(e.target.value)}
              className="w-full bg-[#081324] border border-[#1A2E4C] text-white p-2 rounded-xl focus:border-[#00E5A0] outline-none cursor-pointer"
            >
              {teamOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] text-slate-400 block mb-1">EQUIPO 2</label>
            <select
              value={teamB}
              onChange={(e) => setTeamB(e.target.value)}
              className="w-full bg-[#081324] border border-[#1A2E4C] text-white p-2 rounded-xl focus:border-[#00E5A0] outline-none cursor-pointer"
            >
              {teamOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Simulated Metrics Comparison */}
        <div className="space-y-3 bg-[#081220] border border-[#182A45] p-3 rounded-xl">
          <div className="text-center pb-1 border-b border-[#142640] flex items-center justify-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-[#00E5A0]" />
            <span className="text-[10px] text-[#00E5A0] font-mono uppercase font-bold">
              PROYECCIÓN NEURAL PRE-PARTIDO
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            {/* Metric 1 */}
            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                <span>{teamA} (xG 2.1)</span>
                <span className="text-slate-400 text-[10px]">Eficiencia Ofensiva</span>
                <span>{teamB} (xG 1.4)</span>
              </div>
              <div className="w-full bg-[#12223A] h-1.5 rounded-full overflow-hidden flex">
                <div className="bg-blue-500 h-full" style={{ width: '60%' }}></div>
                <div className="bg-purple-500 h-full" style={{ width: '40%' }}></div>
              </div>
            </div>

            {/* Metric 2 */}
            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                <span>{teamA} (88%)</span>
                <span className="text-slate-400 text-[10px]">Solidez Defensiva</span>
                <span>{teamB} (82%)</span>
              </div>
              <div className="w-full bg-[#12223A] h-1.5 rounded-full overflow-hidden flex">
                <div className="bg-cyan-400 h-full" style={{ width: '52%' }}></div>
                <div className="bg-indigo-400 h-full" style={{ width: '48%' }}></div>
              </div>
            </div>

            {/* Metric 3 */}
            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                <span>{teamA} (PPDA 8.4)</span>
                <span className="text-slate-400 text-[10px]">Presión Alta</span>
                <span>{teamB} (PPDA 11.2)</span>
              </div>
              <div className="w-full bg-[#12223A] h-1.5 rounded-full overflow-hidden flex">
                <div className="bg-[#00E5A0] h-full" style={{ width: '58%' }}></div>
                <div className="bg-slate-500 h-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* CARD 3: RENDIMIENTO DEL MODELO Y TELEMETRÍA */}
      <div className="bg-[#050C18] rounded-2xl p-4 border border-[#142844] space-y-3 shadow-xl">
        <div className="flex items-center justify-between pb-2 border-b border-[#1A2E4C]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
              <Activity className="w-3.5 h-3.5" />
            </div>
            <h2 className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-wider">
              TELEMETRÍA DEL MODELO IA
            </h2>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> ONLINE
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center font-mono">
          <div className="bg-[#081220] border border-[#182A45] p-2.5 rounded-xl">
            <div className="text-[9px] text-slate-400 uppercase">PRECISIÓN MES</div>
            <div className="text-base sm:text-lg font-bold text-[#00E5A0]">{liveStats.aiAccuracy}</div>
          </div>

          <div className="bg-[#081220] border border-[#182A45] p-2.5 rounded-xl">
            <div className="text-[9px] text-slate-400 uppercase">VALUE BETS HOY</div>
            <div className="text-base sm:text-lg font-bold text-white">{liveStats.valueBetsFoundToday}</div>
          </div>
        </div>
      </div>

    </div>
  );
};

