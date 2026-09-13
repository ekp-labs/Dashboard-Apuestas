import React, { useState } from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';
import { featuredMatch, valueBetOpportunity } from '../data/mockData';

interface RightColumnProps {
  onSelectOdds: (match: string, oddType: string, oddValue: number) => void;
}

// Premier League Lion SVG emblem matching reference
const PremierLeagueLogo: React.FC = () => (
  <svg className="w-4 h-4 text-[#A5B4FC] fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

// High-fidelity Liverpool Liverbird Vector
const LiverpoolCrest: React.FC = () => (
  <svg viewBox="0 0 100 120" className="w-16 h-20 text-[#E31B23]">
    <g fill="currentColor">
      <path d="M50,8 C54,16 64,20 68,26 C62,28 57,31 52,36 C62,36 74,42 77,52 C69,54 64,57 58,62 C68,67 74,78 71,88 C64,85 57,88 54,93 C49,88 43,85 36,88 C33,78 39,67 49,62 C43,57 38,54 30,52 C33,42 45,36 55,36 C50,31 45,28 39,26 C43,20 53,16 50,8 Z" />
      <text x="50" y="112" textAnchor="middle" fontSize="16" fontWeight="900" letterSpacing="1">L.F.C.</text>
    </g>
  </svg>
);

// High-fidelity Arsenal Crest Vector
const ArsenalCrest: React.FC = () => (
  <svg viewBox="0 0 100 120" className="w-16 h-20">
    <path d="M10 15 L90 15 L90 70 C90 95 50 115 50 115 C50 115 10 95 10 70 Z" fill="#DB0007" stroke="#E3B23C" strokeWidth="3" />
    <path d="M10 15 L28 15 L28 75 C19 70 13 60 10 50 Z" fill="#063672" />
    <path d="M90 15 L72 15 L72 75 C81 70 87 60 90 50 Z" fill="#063672" />
    <rect x="22" y="25" width="56" height="16" fill="#FFFFFF" rx="2" />
    <text x="50" y="37" textAnchor="middle" fontSize="10" fontWeight="900" fill="#063672" fontFamily="sans-serif">Arsenal</text>
    <g fill="#E3B23C" transform="translate(25, 52)">
      <rect x="5" y="12" width="38" height="7" rx="2" />
      <circle cx="12" cy="15.5" r="7" fill="#063672" stroke="#E3B23C" strokeWidth="2" />
      <path d="M38 8 L48 15.5 L38 23 Z" />
    </g>
  </svg>
);

export const RightColumn: React.FC<RightColumnProps> = ({ onSelectOdds }) => {
  const [selectedOddKey, setSelectedOddKey] = useState<string>('1'); // Default '1' highlighted as in screenshot

  const handleOddsClick = (key: string, type: string, value: number) => {
    setSelectedOddKey(key);
    onSelectOdds(`${featuredMatch.homeTeam} vs ${featuredMatch.awayTeam}`, type, value);
  };

  return (
    <div className="space-y-4">
      
      {/* CARD 1: PARTIDO DESTACADO - MATCHING SCREENSHOT EXACTLY */}
      <div className="bg-[#040A15] rounded-2xl p-4 sm:p-5 border border-[#122A4A] shadow-[0_0_25px_rgba(0,0,0,0.6)] space-y-4">
        
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-black text-base text-white uppercase tracking-wider">
            PARTIDO DESTACADO
          </h2>
          <div className="flex items-center gap-1.5 text-xs text-[#A5B4FC]">
            <PremierLeagueLogo />
            <span className="font-semibold text-[#818CF8]">Premier League</span>
          </div>
        </div>

        {/* Match / Teams Central Layout */}
        <div className="flex items-center justify-between py-1">
          {/* Liverpool Crest (Left) */}
          <div className="w-20 flex justify-center items-center shrink-0">
            <LiverpoolCrest />
          </div>

          {/* Teams Text & Time (Center) */}
          <div className="text-center space-y-0.5">
            <div className="text-xl font-bold text-white tracking-wide">
              {featuredMatch.homeTeam}
            </div>
            <div className="text-xs text-slate-400 font-mono">vs</div>
            <div className="text-xl font-bold text-white tracking-wide">
              {featuredMatch.awayTeam}
            </div>
            <div className="text-xs text-cyan-400/90 font-medium pt-1">
              {featuredMatch.time} · {featuredMatch.venue}
            </div>
          </div>

          {/* Arsenal Crest (Right) */}
          <div className="w-20 flex justify-center items-center shrink-0">
            <ArsenalCrest />
          </div>
        </div>

        {/* Odds Row - 3 Side-by-Side Interactive Buttons */}
        <div className="grid grid-cols-3 gap-3">
          
          {/* Button 1 (Home - Highlighted green as in screenshot) */}
          <button
            onClick={() => handleOddsClick('1', 'Victoria Local (1)', featuredMatch.odds1)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all border ${
              selectedOddKey === '1'
                ? 'bg-[#061424] border-[#00E5A0] shadow-[0_0_12px_rgba(0,229,160,0.25)]'
                : 'bg-[#081324] border-[#162742] text-slate-200 hover:border-[#00E5A0]'
            }`}
          >
            <span className="font-bold text-[#00E5A0]">1</span>
            <span className="font-bold text-[#00E5A0] text-base">{featuredMatch.odds1.toFixed(2)}</span>
          </button>

          {/* Button X (Draw) */}
          <button
            onClick={() => handleOddsClick('X', 'Empate (X)', featuredMatch.oddsX)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all border ${
              selectedOddKey === 'X'
                ? 'bg-[#061424] border-[#00E5A0] shadow-[0_0_12px_rgba(0,229,160,0.25)]'
                : 'bg-[#081324] border-[#162742] hover:border-[#3B82F6]'
            }`}
          >
            <span className="font-bold text-[#60A5FA]">X</span>
            <span className="font-bold text-white text-base">{featuredMatch.oddsX.toFixed(2)}</span>
          </button>

          {/* Button 2 (Away) */}
          <button
            onClick={() => handleOddsClick('2', 'Victoria Visitante (2)', featuredMatch.odds2)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all border ${
              selectedOddKey === '2'
                ? 'bg-[#061424] border-[#00E5A0] shadow-[0_0_12px_rgba(0,229,160,0.25)]'
                : 'bg-[#081324] border-[#162742] hover:border-[#3B82F6]'
            }`}
          >
            <span className="font-bold text-[#60A5FA]">2</span>
            <span className="font-bold text-white text-base">{featuredMatch.odds2.toFixed(2)}</span>
          </button>

        </div>

        {/* Insight Bottom Container */}
        <div className="flex items-center gap-3 bg-[#061120] border border-[#162A46] rounded-xl p-3">
          <div className="p-2 rounded-lg bg-[#00E5A0]/10 border border-[#00E5A0]/40 shrink-0">
            <TrendingUp className="w-4 h-4 text-[#00E5A0]" />
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            {featuredMatch.insight}
          </p>
        </div>

      </div>

      {/* CARD 2: OPORTUNIDAD DEL DÍA (VALUE BET) */}
      <div className="bg-[#040A15] rounded-2xl p-4 sm:p-5 border border-[#122A4A] space-y-3 relative overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.6)]">
        
        <div className="flex items-center justify-between pb-2 border-b border-[#1A2E4C]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00E5A0] animate-pulse" />
            <h2 className="font-heading font-black text-base text-white uppercase tracking-wider">
              OPORTUNIDAD DEL DÍA
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#00E5A0] cursor-pointer hover:underline">
            Ver más &rarr;
          </span>
        </div>

        <div className="bg-[#081220] border border-[#182A45] rounded-xl p-3 space-y-2.5">
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
            <div className="bg-[#00E5A0]/15 border border-[#00E5A0]/50 text-[#00E5A0] font-heading font-black text-sm px-2.5 py-1 rounded-xl shadow-[0_0_12px_rgba(0,229,160,0.2)]">
              VALUE +{valueBetOpportunity.valuePercentage}%
            </div>
          </div>

          {/* Probability Comparison Bar */}
          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-slate-300">Modelo: <strong className="text-[#00E5A0]">{valueBetOpportunity.modelProb}%</strong></span>
              <span className="text-slate-400">Mercado: <strong className="text-slate-200">{valueBetOpportunity.marketProb}%</strong></span>
            </div>
            
            <div className="w-full bg-[#12223A] h-2 rounded-full overflow-hidden flex">
              <div
                className="bg-gradient-to-r from-emerald-500 to-[#00E5A0] h-full transition-all duration-500"
                style={{ width: `${valueBetOpportunity.modelProb}%` }}
              ></div>
              <div
                className="bg-slate-600 h-full"
                style={{ width: `${100 - valueBetOpportunity.modelProb}%` }}
              ></div>
            </div>
          </div>

          <p className="text-[10px] text-slate-400 italic bg-[#0A1628] p-2 rounded-lg border border-[#162742]">
            💡 {valueBetOpportunity.recommendation}
          </p>

        </div>

      </div>

    </div>
  );
};
