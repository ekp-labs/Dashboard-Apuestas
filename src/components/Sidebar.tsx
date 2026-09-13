import React from 'react';
import {
  Home,
  Trophy,
  Users,
  User,
  CalendarDays,
  Brain,
  TrendingUp,
  Repeat,
  Newspaper,
  Calendar,
  BarChart3,
  Settings,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { navItems } from '../data/mockData';

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Home,
  Trophy,
  Users,
  User,
  CalendarDays,
  Brain,
  TrendingUp,
  Repeat,
  Newspaper,
  Calendar,
  BarChart3,
  Settings
};

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelectTab }) => {
  return (
    <aside className="w-56 shrink-0 bg-[#060B14] border-r border-[#24426C] flex flex-col justify-between p-3 min-h-[calc(100vh-60px)]">
      
      {/* Navigation List */}
      <nav className="space-y-1">
        {navItems.map((item) => {
          const IconComponent = iconMap[item.icon] || Home;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-blue-700/80 via-blue-600/70 to-blue-500/50 text-white border border-blue-400/30 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#0E1A2E]'
              }`}
            >
              <div className="flex items-center gap-3">
                <IconComponent
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-[#00E5A0]' : 'text-[#64748B] group-hover:text-blue-400'
                  }`}
                />
                <span>{item.label}</span>
              </div>

              {item.hasSubmenu && (
                <ChevronRight className={`w-3.5 h-3.5 text-[#64748B] ${isActive ? 'text-[#00E5A0]' : ''}`} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Stadium Banner (Matching image) */}
      <div className="mt-6 pt-3 border-t border-[#24426C] space-y-3">
        <div className="relative rounded-2xl overflow-hidden border border-[#2B4C7E] bg-gradient-to-b from-[#0B1526] to-[#050A12] p-3 text-center group shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          {/* Background Stadium Glow Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&auto=format&fit=crop&q=80')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/60 to-transparent"></div>

          <div className="relative z-10 space-y-1.5">
            <div className="w-7 h-7 rounded-full bg-[#00E5A0]/20 border border-[#00E5A0]/50 mx-auto flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5A0]" />
            </div>
            <p className="text-[11px] italic text-slate-300 leading-tight">
              "More than a game. A year of opportunities."
            </p>
          </div>
        </div>

        {/* Version Badge */}
        <div className="text-center text-[10px] text-[#64748B] font-mono tracking-wider uppercase">
          <div>v0.1.0</div>
          <div className="text-[9px] text-[#00E5A0]/80">FOOTBALL ANALYTICS CENTER</div>
        </div>
      </div>

    </aside>
  );
};
