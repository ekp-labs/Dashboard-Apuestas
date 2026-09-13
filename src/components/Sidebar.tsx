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
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors group ${
                  isActive
                    ? 'bg-[#0A2E60] text-white font-semibold border border-[#2563EB]'
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

      {/* Bottom Card */}
      <div className="mt-4 pt-2">
        <div className="rounded-2xl border border-[#1E3258] bg-[#081324] flex flex-col justify-end p-3.5 space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex rounded-full h-2 w-2 bg-[#00E5A0]" />
            <p className="text-sm font-heading font-black text-white uppercase tracking-wider">
              Live Stats
            </p>
          </div>
          <p className="text-[11px] text-slate-300 font-medium leading-tight">
            Análisis y cuotas actualizadas en tiempo real
          </p>
        </div>
      </div>

    </aside>
  );
};
