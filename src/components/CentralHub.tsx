import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Trophy,
  Activity,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap
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
  // Keep track of collapsed league sections
  const [collapsedLeagues, setCollapsedLeagues] = useState<Record<string, boolean>>({});

  const toggleLeague = (leagueId: string) => {
    setCollapsedLeagues((prev) => ({
      ...prev,
      [leagueId]: !prev[leagueId]
    }));
  };

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
      {/* Top Banner: Quick Summary Indicator */}
      <div className="flex items-center justify-between bg-[#071324] border border-[#1B3254] px-4 py-2.5 rounded-2xl">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#00E5A0]" />
          <span className="font-heading font-black text-sm text-white uppercase tracking-wider">
            PARTIDOS Y PREDICCIONES CUANTITATIVAS DEL DÍA
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            <span className="text-white font-bold">4</span> En Vivo
          </span>
          <span className="text-[#00E5A0] font-bold">5 Value Bets (+EV)</span>
        </div>
      </div>

      {/* League Accordion List (FotMob-Style) */}
      {filteredLeagues.length === 0 ? (
        <div className="p-8 text-center bg-[#071324] border border-[#1B3254] rounded-2xl space-y-2">
          <p className="text-slate-300 font-medium">No hay partidos que coincidan con el filtro seleccionado.</p>
          <p className="text-xs text-slate-500">Prueba cambiando el filtro a "TODOS" en la barra superior.</p>
        </div>
      ) : (
        filteredLeagues.map((league) => {
          const isCollapsed = collapsedLeagues[league.id];

          return (
            <div
              key={league.id}
              className="bg-[#050C18] border border-[#142844] rounded-2xl overflow-hidden"
            >
              {/* League Header (Accordion Bar) */}
              <div
                onClick={() => toggleLeague(league.id)}
                className="flex items-center justify-between px-4 py-3 bg-[#081528] border-b border-[#142844] cursor-pointer hover:bg-[#0B1E38] transition-colors"
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
                  <span className="text-xs font-mono text-[#00E5A0] font-semibold">
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
                <div className="divide-y divide-[#102038]">
                  {league.matches.map((match) => (
                    <div
                      key={match.id}
                      onClick={() => onSelectMatch(match)}
                      className="group p-3 sm:p-4 hover:bg-[#09182E] transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3"
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

                        {/* Teams & Score / VS */}
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

                      {/* Right: AI Intelligence & Odds */}
                      <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-[#12243E]">
                        
                        {/* AI xG & Win Prob Badges */}
                        <div className="flex items-center gap-2">
                          <div className="bg-[#09172A] border border-[#1A3050] px-2.5 py-1 rounded-xl text-[11px] font-mono text-slate-300">
                            <span className="text-slate-400 text-[9px] block">PROY. xG</span>
                            <span className="font-bold text-[#00E5A0]">{match.xGHome}</span>
                            <span className="text-slate-500 mx-1">-</span>
                            <span className="font-bold text-slate-200">{match.xGAway}</span>
                          </div>

                          {match.valueBetEV && (
                            <div className="bg-[#00E5A0]/10 border border-[#00E5A0]/40 text-[#00E5A0] px-2 py-1 rounded-xl text-[10px] font-heading font-black tracking-wider uppercase">
                              +EV {match.valueBetEV}%
                            </div>
                          )}
                        </div>

                        {/* Odds 1 X 2 */}
                        <div className="flex items-center gap-1 font-mono text-xs">
                          <span className="bg-[#0A182C] border border-[#1B3252] text-slate-200 px-2 py-1 rounded-lg hover:border-[#00E5A0] transition-colors">
                            {match.odds1.toFixed(2)}
                          </span>
                          <span className="bg-[#0A182C] border border-[#1B3252] text-slate-200 px-2 py-1 rounded-lg hover:border-[#00E5A0] transition-colors">
                            {match.oddsX.toFixed(2)}
                          </span>
                          <span className="bg-[#0A182C] border border-[#1B3252] text-slate-200 px-2 py-1 rounded-lg hover:border-[#00E5A0] transition-colors">
                            {match.odds2.toFixed(2)}
                          </span>
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
