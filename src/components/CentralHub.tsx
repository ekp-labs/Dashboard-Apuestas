import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  Radio,
  Target,
  Flame,
  Activity,
  Award,
  Clock,
  TrendingUp,
  Shield,
  BarChart2
} from 'lucide-react';
import { LEAGUE_MATCHES } from '../data/mockData';

interface CentralHubProps {
  onSelectMatch: (match: any) => void;
  onLeagueClick: (league: any) => void;
  selectedFilter: string;
}

export const CentralHub: React.FC<CentralHubProps> = ({
  onSelectMatch,
  onLeagueClick,
  selectedFilter
}) => {
  const [collapsedLeagues, setCollapsedLeagues] = useState<Record<string, boolean>>({});

  const toggleLeague = (leagueId: string) => {
    setCollapsedLeagues((prev) => ({
      ...prev,
      [leagueId]: !prev[leagueId]
    }));
  };

  // Extract top live hero match (e.g. France vs Brazil or Liverpool vs Arsenal)
  const heroMatch = LEAGUE_MATCHES.flatMap(l => l.matches).find(m => m.id === 'wc1') || 
                    LEAGUE_MATCHES.flatMap(l => l.matches).find(m => m.status === 'LIVE');

  // Filter matches inside each league based on selectedFilter
  const filteredLeagues = LEAGUE_MATCHES.map((league) => {
    let matches = league.matches;

    if (selectedFilter === 'live') {
      matches = matches.filter((m) => m.status === 'LIVE');
    } else if (selectedFilter === 'value') {
      matches = matches.filter((m) => m.valueBetEV && m.valueBetEV > 0);
    } else if (selectedFilter === 'top') {
      matches = league.isTopLeague ? matches : [];
    }

    return {
      ...league,
      matches
    };
  }).filter((league) => league.matches.length > 0);

  return (
    <div className="space-y-4">

      {/* HERO MATCH CENTER BANNER (Inspired by Dribbble Live Football Platform) */}
      {heroMatch && (
        <div className="relative overflow-hidden bg-gradient-to-br from-[#071329] via-[#0A1A36] to-[#050C1A] border border-[#1B345A] rounded-2xl p-4 sm:p-5 shadow-[0_0_25px_rgba(0,0,0,0.5)]">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E5A0]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Bar inside Hero */}
          <div className="flex items-center justify-between pb-3 border-b border-[#162D4E]">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              <span className="font-heading font-black text-xs text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5" /> MATCH CENTER EN VIVO — {heroMatch.time}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span title="Value Bet Detectado (+EV)" className="flex items-center gap-1 bg-[#00E5A0]/15 border border-[#00E5A0]/40 text-[#00E5A0] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" /> +EV {heroMatch.valueBetEV}%
              </span>
              <span title="Estadio / Sede" className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-[#0C1A2F] border border-[#192F50] px-2 py-0.5 rounded-full">
                📍 MetLife Stadium
              </span>
            </div>
          </div>

          {/* Center Match Display */}
          <div
            onClick={() => onSelectMatch(heroMatch)}
            className="cursor-pointer py-4 flex items-center justify-between gap-4 group"
          >
            {/* Home Team */}
            <div className="flex-1 flex flex-col items-center sm:items-end text-center sm:text-right">
              <div className="w-12 h-12 rounded-2xl bg-[#0F2038] border border-[#20395E] flex items-center justify-center text-2xl shadow-md group-hover:scale-110 group-hover:border-[#00E5A0] transition-all">
                {heroMatch.homeFlag}
              </div>
              <h3 className="font-heading font-black text-base sm:text-lg text-white mt-2 group-hover:text-[#00E5A0] transition-colors">
                {heroMatch.homeTeam}
              </h3>
              <span className="text-[10px] font-mono text-slate-400">Local • 55% Prob IA</span>
            </div>

            {/* Score & Minute Display */}
            <div className="flex flex-col items-center justify-center px-4">
              <div className="bg-[#050C17] border border-[#1D365C] px-5 py-2 rounded-2xl flex items-center gap-3 shadow-inner">
                <span className="font-mono font-black text-2xl sm:text-3xl text-white">
                  {heroMatch.scoreHome}
                </span>
                <span className="text-rose-500 font-bold text-lg animate-pulse">:</span>
                <span className="font-mono font-black text-2xl sm:text-3xl text-white">
                  {heroMatch.scoreAway}
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-rose-400 mt-1.5 uppercase tracking-wider">
                {heroMatch.minute}' Minuto
              </span>
            </div>

            {/* Away Team */}
            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#0F2038] border border-[#20395E] flex items-center justify-center text-2xl shadow-md group-hover:scale-110 group-hover:border-[#00E5A0] transition-all">
                {heroMatch.awayFlag}
              </div>
              <h3 className="font-heading font-black text-base sm:text-lg text-white mt-2 group-hover:text-[#00E5A0] transition-colors">
                {heroMatch.awayTeam}
              </h3>
              <span className="text-[10px] font-mono text-slate-400">Visitante • xG 1.08</span>
            </div>
          </div>

          {/* Telemetry Bar (Icon-Identified Gauges - Threat Intel Style) */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#162D4E] font-mono text-xs text-center">
            
            {/* Projected xG Metric */}
            <div title="Goles Esperados Proyectados (xG)" className="bg-[#09172B] border border-[#172D4D] p-2 rounded-xl flex flex-col items-center">
              <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-0.5">
                <Target className="w-3 h-3 text-[#00E5A0]" />
                <span className="font-bold text-slate-300">xG PROY.</span>
              </div>
              <span className="font-bold text-white text-xs">
                <strong className="text-[#00E5A0]">{heroMatch.xGHome}</strong> - <strong className="text-slate-300">{heroMatch.xGAway}</strong>
              </span>
            </div>

            {/* Dominance Gauge */}
            <div title="Dominio / Posesión de Balón" className="bg-[#09172B] border border-[#172D4D] p-2 rounded-xl flex flex-col items-center">
              <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-0.5">
                <BarChart2 className="w-3 h-3 text-blue-400" />
                <span className="font-bold text-slate-300">DOMINIO</span>
              </div>
              <div className="w-full bg-[#12243F] h-1.5 rounded-full overflow-hidden flex mt-1">
                <div className="bg-blue-500 h-full" style={{ width: '58%' }}></div>
                <div className="bg-yellow-500 h-full" style={{ width: '42%' }}></div>
              </div>
            </div>

            {/* AI Win Prob Gauge */}
            <div title="Probabilidad de Victoria del Modelo IA" className="bg-[#09172B] border border-[#172D4D] p-2 rounded-xl flex flex-col items-center">
              <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-0.5">
                <Activity className="w-3 h-3 text-purple-400" />
                <span className="font-bold text-slate-300">PROB. IA</span>
              </div>
              <span className="font-bold text-[#00E5A0] text-xs">
                {heroMatch.aiWinProbHome}% ⚽
              </span>
            </div>

          </div>
        </div>
      )}

      {/* League Accordion List (FotMob + Threat Intel Style) */}
      {filteredLeagues.length === 0 ? (
        <div className="p-8 text-center bg-[#050C18] border border-[#142844] rounded-2xl space-y-2">
          <p className="text-slate-300 font-medium">No hay partidos que coincidan con el filtro seleccionado.</p>
          <p className="text-xs text-slate-500 font-mono">Prueba haciendo clic en el ícono de capas (Todos) en la barra superior.</p>
        </div>
      ) : (
        filteredLeagues.map((league) => {
          const isCollapsed = collapsedLeagues[league.id];

          return (
            <div
              key={league.id}
              className="bg-[#050C18] border border-[#142844] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* League Header */}
              <div
                onClick={() => toggleLeague(league.id)}
                className="flex items-center justify-between px-4 py-3 bg-[#081528] border-b border-[#142844] cursor-pointer hover:bg-[#0B1E38] transition-colors select-none"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xl leading-none">{league.flag}</span>
                  <div>
                    <h2 className="font-heading font-black text-sm text-white uppercase tracking-wider flex items-center gap-2">
                      {league.name}
                      <span className="text-[10px] font-mono font-normal text-slate-400 bg-[#0F223D] px-2 py-0.5 rounded-full">
                        {league.region}
                      </span>
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#00E5A0] font-bold">
                    {league.matches.length} {league.matches.length === 1 ? 'partido' : 'partidos'}
                  </span>
                  <button className="p-1 text-slate-400 hover:text-white transition-colors">
                    {isCollapsed ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronUp className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Match Rows inside League */}
              {!isCollapsed && (
                <div className="divide-y divide-[#0E1C32]">
                  {league.matches.map((match) => (
                    <div
                      key={match.id}
                      onClick={() => onSelectMatch(match)}
                      className="group p-3 sm:p-4 hover:bg-[#09182E] transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3"
                    >
                      {/* Left: Status & Teams */}
                      <div className="flex items-center gap-4 flex-1">
                        {/* Time / Live Indicator */}
                        <div className="w-20 shrink-0 text-center">
                          {match.status === 'LIVE' ? (
                            <div className="flex flex-col items-center">
                              <span className="inline-flex items-center gap-1 bg-rose-600/20 text-rose-400 border border-rose-500/40 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                {match.time}
                              </span>
                            </div>
                          ) : match.status === 'FINISHED' ? (
                            <span className="text-[10px] font-mono font-bold text-slate-400 bg-[#0F2036] px-2 py-0.5 rounded-full">
                              FINAL
                            </span>
                          ) : (
                            <span className="text-[11px] font-mono font-bold text-blue-400 bg-blue-900/20 border border-blue-500/30 px-2 py-0.5 rounded-md">
                              {match.time}
                            </span>
                          )}
                        </div>

                        {/* Teams & Score */}
                        <div className="flex-1 space-y-1">
                          {/* Home Team */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{match.homeFlag}</span>
                              <span className="font-heading font-bold text-sm text-slate-100 group-hover:text-[#00E5A0] transition-colors">
                                {match.homeTeam}
                              </span>
                            </div>
                            <span className="font-mono font-black text-sm text-white">
                              {match.scoreHome !== undefined ? match.scoreHome : '-'}
                            </span>
                          </div>

                          {/* Away Team */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{match.awayFlag}</span>
                              <span className="font-heading font-bold text-sm text-slate-100 group-hover:text-[#00E5A0] transition-colors">
                                {match.awayTeam}
                              </span>
                            </div>
                            <span className="font-mono font-black text-sm text-white">
                              {match.scoreAway !== undefined ? match.scoreAway : '-'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right: AI Intelligence & Odds (Icon-only & Pill Badges) */}
                      <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-[#12243E]">
                        
                        {/* Icon-Identified xG & Value Bet Badges */}
                        <div className="flex items-center gap-2">
                          {/* Target icon for xG */}
                          <div title="xG Proyectado (Goles Esperados)" className="bg-[#09172A] border border-[#1A3050] px-2.5 py-1 rounded-xl text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                            <Target className="w-3.5 h-3.5 text-[#00E5A0]" />
                            <span className="font-bold text-[#00E5A0]">{match.xGHome}</span>
                            <span className="text-slate-500">-</span>
                            <span className="font-bold text-slate-200">{match.xGAway}</span>
                          </div>

                          {/* Sparkles icon for Value Bet */}
                          {match.valueBetEV && (
                            <div title="Value Bet Detectado (+EV)" className="bg-[#00E5A0]/10 border border-[#00E5A0]/40 text-[#00E5A0] px-2 py-1 rounded-xl text-[10px] font-heading font-black tracking-wider uppercase flex items-center gap-1">
                              <Sparkles className="w-3 h-3" /> +EV {match.valueBetEV}%
                            </div>
                          )}
                        </div>

                        {/* Interactive Odds 1 X 2 */}
                        <div className="flex items-center gap-1 font-mono text-xs">
                          <button title="Cuota Victoria Local (1)" className="bg-[#0A182C] border border-[#1B3252] text-slate-200 px-2 py-1 rounded-lg hover:border-[#00E5A0] hover:text-[#00E5A0] transition-colors">
                            {match.odds1.toFixed(2)}
                          </button>
                          <button title="Cuota Empate (X)" className="bg-[#0A182C] border border-[#1B3252] text-slate-200 px-2 py-1 rounded-lg hover:border-[#00E5A0] hover:text-[#00E5A0] transition-colors">
                            {match.oddsX.toFixed(2)}
                          </button>
                          <button title="Cuota Victoria Visitante (2)" className="bg-[#0A182C] border border-[#1B3252] text-slate-200 px-2 py-1 rounded-lg hover:border-[#00E5A0] hover:text-[#00E5A0] transition-colors">
                            {match.odds2.toFixed(2)}
                          </button>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

