import React from 'react';
import {
  Home,
  Shield,
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
  ChevronRight
} from 'lucide-react';
import { navItems } from '../data/mockData';

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Home,
  Shield,
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
    <aside className="w-56 shrink-0 bg-[#050A14] border-r border-[#1B2A4A] flex flex-col justify-between p-3 min-h-[calc(100vh-60px)] select-none">
      
      {/* Navigation List */}
      <nav className="space-y-1">
        {navItems.map((item) => {
          const IconComponent = iconMap[item.icon] || Home;
          const isActive = activeTab === item.id;

          return (
            <React.Fragment key={item.id}>
              <button
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0C3875] via-[#0A2E60] to-[#082247] text-white font-semibold border border-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                    : 'text-slate-300 font-medium hover:text-white hover:bg-[#0E1B32]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent
                    className={`w-[18px] h-[18px] shrink-0 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-blue-400'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                {item.hasSubmenu && (
                  <ChevronRight className={`w-4 h-4 text-slate-400 ${isActive ? 'text-white' : ''}`} />
                )}
              </button>

              {item.hasDividerAfter && (
                <div className="my-2.5 border-t border-[#1C2C4A]" />
              )}
            </React.Fragment>
          );
        })}
      </nav>

      {/* Bottom Stadium Card matching image */}
      <div className="mt-4 pt-2">
        <div className="relative rounded-2xl overflow-hidden border border-[#1E3258] h-40 group shadow-lg flex flex-col justify-end p-3.5">
          {/* Background Stadium Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=80')`
            }}
          />
          {/* Dark Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/70 to-transparent" />

          {/* Quote Text */}
          <div className="relative z-10 text-left space-y-0.5">
            <p className="text-xs text-slate-200 font-serif italic leading-snug">
              "More than a game."
            </p>
            <p className="text-xs text-slate-200 font-serif italic leading-snug">
              "A year of opportunities."
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
};
