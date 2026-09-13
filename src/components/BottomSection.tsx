import React, { useState } from 'react';
import { Calendar, ArrowRight, Grid, Goal, TrendingUp, Target, Newspaper, Clock } from 'lucide-react';
import { upcomingMatches, newsArticles, realTimeMetrics } from '../data/mockData';
import { UpcomingMatch, NewsArticle } from '../types';

interface BottomSectionProps {
  onSelectUpcomingMatch: (match: UpcomingMatch) => void;
  onSelectNews: (article: NewsArticle) => void;
}

export const BottomSection: React.FC<BottomSectionProps> = ({
  onSelectUpcomingMatch,
  onSelectNews
}) => {
  const [filterDay, setFilterDay] = useState<'hoy' | 'manana' | '7dias'>('hoy');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
      
      {/* COLUMN 1: PRÓXIMOS PARTIDOS (5 Cols) */}
      <div className="lg:col-span-5 glass-panel rounded-2xl p-4 border border-[#2B4C7E]">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#24426C] mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#00E5A0]" />
            <h2 className="font-heading font-black text-base text-white uppercase tracking-wider">
              PRÓXIMOS PARTIDOS
            </h2>
          </div>

          <div className="flex items-center gap-1 bg-[#09111E] p-1 rounded-lg border border-[#20375A]">
            <button
              onClick={() => setFilterDay('hoy')}
              className={`px-2 py-0.5 rounded text-[10px] font-heading font-bold uppercase transition-all ${
                filterDay === 'hoy'
                  ? 'bg-[#00E5A0] text-[#060B14]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Hoy
            </button>
            <button
              onClick={() => setFilterDay('manana')}
              className={`px-2 py-0.5 rounded text-[10px] font-heading font-bold uppercase transition-all ${
                filterDay === 'manana'
                  ? 'bg-[#00E5A0] text-[#060B14]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mañana
            </button>
            <button
              onClick={() => setFilterDay('7dias')}
              className={`px-2 py-0.5 rounded text-[10px] font-heading font-bold uppercase transition-all ${
                filterDay === '7dias'
                  ? 'bg-[#00E5A0] text-[#060B14]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Próximos 7 días
            </button>
          </div>
        </div>

        {/* Match Rows */}
        <div className="space-y-2">
          {upcomingMatches.map((match) => (
            <div
              key={match.id}
              onClick={() => onSelectUpcomingMatch(match)}
              className="group flex items-center justify-between p-2 bg-[#08111F] border border-[#162740] rounded-xl hover:border-[#3B82F6] hover:bg-[#0D1C34] transition-all cursor-pointer"
            >
              {/* Time & Teams */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#00E5A0] shrink-0 bg-[#00E5A0]/10 px-2 py-1 rounded-md">
                  {match.time}
                </span>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-slate-100 group-hover:text-[#00E5A0] transition-colors">
                    <span>{match.homeFlag}</span>
                    <span>{match.homeTeam}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">vs</span>
                  <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-slate-100 group-hover:text-[#00E5A0] transition-colors">
                    <span>{match.awayTeam}</span>
                    <span>{match.awayFlag}</span>
                  </div>
                </div>
              </div>

              {/* Odds Badges */}
              <div className="flex items-center gap-1 text-[11px] font-mono">
                <span className="bg-[#122038] border border-[#1E3456] text-slate-200 px-2 py-0.5 rounded-md hover:bg-[#00E5A0] hover:text-[#060B14] transition-colors">
                  {match.odds1.toFixed(2)}
                </span>
                <span className="bg-[#122038] border border-[#1E3456] text-slate-200 px-2 py-0.5 rounded-md hover:bg-[#00E5A0] hover:text-[#060B14] transition-colors">
                  {match.oddsX.toFixed(2)}
                </span>
                <span className="bg-[#122038] border border-[#1E3456] text-slate-200 px-2 py-0.5 rounded-md hover:bg-[#00E5A0] hover:text-[#060B14] transition-colors">
                  {match.odds2.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLUMN 2: NOTICIAS RELEVANTES (4 Cols) */}
      <div className="lg:col-span-4 glass-panel rounded-2xl p-4 border border-[#2B4C7E]">
        <div className="flex items-center justify-between pb-3 border-b border-[#24426C] mb-3">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-blue-400" />
            <h2 className="font-heading font-black text-base text-white uppercase tracking-wider">
              NOTICIAS RELEVANTES
            </h2>
          </div>
          <span className="text-xs font-semibold text-blue-400 hover:underline cursor-pointer">
            Ver todas &rarr;
          </span>
        </div>

        <div className="space-y-2.5">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectNews(article)}
              className="flex items-center gap-3 p-2 bg-[#08111F] border border-[#20375A] rounded-xl hover:border-[#00E5A0] hover:bg-[#0D1C34] transition-all cursor-pointer group shadow-sm"
            >
              <img
                src={article.image}
                alt={article.headline}
                className="w-14 h-14 rounded-lg object-cover border border-[#20375A] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-semibold text-slate-200 group-hover:text-[#00E5A0] line-clamp-2 leading-snug transition-colors">
                  {article.headline}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] text-slate-400 font-mono">
                  <Clock className="w-3 h-3 text-[#64748B]" />
                  <span>{article.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLUMN 3: ESTADÍSTICAS EN TIEMPO REAL (3 Cols) */}
      <div className="lg:col-span-3 glass-panel rounded-2xl p-4 border border-[#2B4C7E] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#24426C] mb-3">
            <h2 className="font-heading font-black text-base text-white uppercase tracking-wider">
              ESTADÍSTICAS EN TIEMPO REAL
            </h2>
            <span className="text-xs font-semibold text-[#00E5A0] hover:underline cursor-pointer">
              Ver más &rarr;
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            
            {/* Stat 1 */}
            <div className="bg-[#08111F] border border-[#162740] rounded-xl p-2.5">
              <div className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center mb-1">
                <Grid className="w-3.5 h-3.5" />
              </div>
              <div className="font-heading font-black text-xl text-white leading-none">342</div>
              <div className="text-[10px] text-slate-400 leading-tight mt-1">Partidos esta semana</div>
              <div className="text-[9px] font-mono text-[#00E5A0] mt-0.5">↑ +12%</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#08111F] border border-[#162740] rounded-xl p-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-1">
                <Goal className="w-3.5 h-3.5" />
              </div>
              <div className="font-heading font-black text-xl text-white leading-none">892</div>
              <div className="text-[10px] text-slate-400 leading-tight mt-1">Goles esta temporada</div>
              <div className="text-[9px] font-mono text-[#00E5A0] mt-0.5">↑ +8%</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#08111F] border border-[#162740] rounded-xl p-2.5">
              <div className="w-6 h-6 rounded-lg bg-cyan-600/20 text-cyan-400 flex items-center justify-center mb-1">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <div className="font-heading font-black text-xl text-white leading-none">2.61</div>
              <div className="text-[10px] text-slate-400 leading-tight mt-1">Promedio goles/partido</div>
              <div className="text-[9px] font-mono text-[#00E5A0] mt-0.5">↑ +5%</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-[#08111F] border border-[#162740] rounded-xl p-2.5">
              <div className="w-6 h-6 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center mb-1">
                <Target className="w-3.5 h-3.5" />
              </div>
              <div className="font-heading font-black text-xl text-white leading-none">48%</div>
              <div className="text-[10px] text-slate-400 leading-tight mt-1">Ambos anotan (BTTS)</div>
              <div className="text-[9px] font-mono text-[#00E5A0] mt-0.5">↑ +3%</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
