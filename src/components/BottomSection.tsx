import React from 'react';
import { Newspaper, Clock, Trophy, Target, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { newsArticles, SPORTS_NEWS } from '../data/mockData';

interface BottomSectionProps {
  onSelectNews: (article: any) => void;
}

export const BottomSection: React.FC<BottomSectionProps> = ({ onSelectNews }) => {
  const topXgPlayers = [
    { rank: 1, name: 'Kylian Mbappé', team: 'Real Madrid', xG90: 1.42, goals: 14, icon: '🇫🇷' },
    { rank: 2, name: 'Erling Haaland', team: 'Man City', xG90: 1.35, goals: 16, icon: '🇳🇴' },
    { rank: 3, name: 'Mohamed Salah', team: 'Liverpool', xG90: 1.18, goals: 12, icon: '🇪🇬' },
    { rank: 4, name: 'Lamine Yamal', team: 'FC Barcelona', xG90: 0.98, goals: 8, icon: '🇪🇸' },
    { rank: 5, name: 'Harry Kane', team: 'Bayern München', xG90: 1.25, goals: 15, icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
      
      {/* COLUMN 1: INTELIGENCIA & NOTICIAS TÁCTICAS (8 Cols) */}
      <div className="lg:col-span-8 bg-[#050C18] rounded-2xl p-4 border border-[#142844] space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-[#1A2E4C]">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-blue-400" />
            <h2 className="font-heading font-black text-base text-white uppercase tracking-wider">
              NOTICIAS & ANÁLISIS DE RENDIMIENTO
            </h2>
          </div>
          <span className="text-xs font-semibold text-blue-400 hover:underline cursor-pointer">
            Ver más artículos &rarr;
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {SPORTS_NEWS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectNews(item)}
              className="group bg-[#081220] border border-[#182A45] rounded-xl p-3 hover:border-[#00E5A0] hover:bg-[#0C1B30] transition-colors cursor-pointer space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                  <span className="bg-[#10223A] border border-[#1E3456] text-[#00E5A0] px-2 py-0.5 rounded-md font-bold uppercase">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {item.timeAgo}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xs text-white group-hover:text-[#00E5A0] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-normal">
                  {item.snippet}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#142640] text-[10px] font-mono">
                <span className="text-slate-400">{item.playerTitle}</span>
                <span className="text-[#00E5A0] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                  Leer <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLUMN 2: LÍDERES DE RENDIMIENTO xG (4 Cols) */}
      <div className="lg:col-span-4 bg-[#050C18] rounded-2xl p-4 border border-[#142844] space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-[#1A2E4C]">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#00E5A0]" />
            <h2 className="font-heading font-black text-base text-white uppercase tracking-wider">
              LÍDERES xG / 90 MIN
            </h2>
          </div>
          <span className="text-[10px] font-mono text-slate-400">EUROPA 2025/26</span>
        </div>

        <div className="space-y-2">
          {topXgPlayers.map((player) => (
            <div
              key={player.rank}
              className="flex items-center justify-between p-2 bg-[#081220] border border-[#162740] rounded-xl hover:border-[#3B82F6] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-5 text-center font-mono font-bold text-xs text-[#00E5A0]">
                  #{player.rank}
                </span>
                <span className="text-sm">{player.icon}</span>
                <div>
                  <div className="font-heading font-bold text-xs text-slate-100">
                    {player.name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {player.team}
                  </div>
                </div>
              </div>

              <div className="text-right font-mono">
                <div className="text-xs font-bold text-[#00E5A0]">
                  {player.xG90} xG
                </div>
                <div className="text-[9px] text-slate-400">
                  {player.goals} goles
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
