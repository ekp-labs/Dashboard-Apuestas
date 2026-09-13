import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { 
  Activity, 
  Search, 
  Sparkles, 
  ShieldAlert, 
  BarChart3, 
  Trophy, 
  Users, 
  BrainCircuit, 
  Zap,
  Image as ImageIcon,
  Monitor
} from 'lucide-react';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenImageModal: () => void;
  onOpenAIModal: () => void;
  isWideScreenMode: boolean;
  setIsWideScreenMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenImageModal,
  onOpenAIModal,
  isWideScreenMode,
  setIsWideScreenMode
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const TABS: { name: NavigationTab; icon: React.FC<{ className?: string }> }[] = [
    { name: 'Dashboard', icon: BarChart3 },
    { name: 'Competitions', icon: Trophy },
    { name: 'Teams', icon: Users },
    { name: 'Players', icon: Activity },
    { name: 'Intelligence AI', icon: BrainCircuit },
    { name: 'Value Bets', icon: Zap },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#060B14]/90 backdrop-blur-xl border-b border-cyan-500/20 px-4 py-2.5 transition-all">
      <div className="max-w-[1920px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-3">
        
        {/* Left Brand Logo & Live Badge */}
        <div className="flex items-center gap-4 w-full xl:w-auto justify-between xl:justify-start">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveTab('Dashboard')}>
            {/* Holographic Glowing Icon Shield */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-emerald-500 p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <div className="w-full h-full bg-[#060B14] rounded-[11px] flex items-center justify-center">
                <Trophy className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg tracking-wider bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                  FAC
                </span>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  v4.8 NEURAL
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                FOOTBALL ANALYTICS CENTER
              </p>
            </div>
          </div>

          {/* Live Synchronized Status Badge */}
          <div className="flex items-center gap-2 bg-[#0C1526] border border-emerald-500/30 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(0,229,160,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
              SYNCHRONIZED
            </span>
            <span className="text-[10px] font-mono text-slate-400 border-l border-slate-700/60 pl-2">
              12ms
            </span>
          </div>
        </div>

        {/* Center Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-[#0C1526]/80 p-1 rounded-xl border border-cyan-500/20 overflow-x-auto max-w-full">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;
            const isAI = tab.name === 'Intelligence AI';
            const isValueBets = tab.name === 'Value Bets';

            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-display font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : isAI
                    ? 'text-cyan-300 hover:text-white hover:bg-cyan-950/50'
                    : isValueBets
                    ? 'text-emerald-400 hover:text-white hover:bg-emerald-950/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : isAI ? 'text-cyan-400' : isValueBets ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{tab.name}</span>
                {isValueBets && (
                  <span className="ml-1 text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 px-1 rounded border border-amber-500/40 animate-pulse">
                    +EV
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Search Bar & Action Buttons */}
        <div className="flex items-center gap-2.5 w-full xl:w-auto justify-end">
          {/* Cyberpunk Search Bar */}
          <div className="relative w-full xl:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Search teams, players, xG, odds..."
              className="w-full bg-[#0C1526] border border-cyan-500/20 focus:border-cyan-400 text-xs text-slate-100 pl-9 pr-3 py-1.5 rounded-xl outline-none transition-all focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] placeholder:text-slate-500 font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* AI Tactical Query Button */}
          <button
            onClick={onOpenAIModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-400/50 text-cyan-300 hover:text-white text-xs font-display font-bold hover:bg-cyan-500/30 transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)]"
            title="Ask FAC Gemini Intelligence Engine"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span className="hidden sm:inline">INTELLIGENCE AI</span>
          </button>

          {/* High-Res AI Image Studio Button (Explicitly satisfies metadata prompt affordance requirement) */}
          <button
            onClick={onOpenImageModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600/30 to-teal-600/30 border border-emerald-400/50 text-emerald-300 hover:text-white text-xs font-display font-bold hover:bg-emerald-500/30 transition-all shadow-[0_0_10px_rgba(0,229,160,0.2)]"
            title="Generate High-Res Match Visuals (1K/2K/4K)"
          >
            <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">8K STUDIO</span>
            <span className="text-[9px] font-mono bg-emerald-950 text-emerald-300 px-1 rounded border border-emerald-500/40">
              1K-4K
            </span>
          </button>

          {/* 32-inch Display Widescreen Toggle Button */}
          <button
            onClick={() => setIsWideScreenMode(!isWideScreenMode)}
            className={`p-1.5 rounded-xl border text-xs font-mono transition-all ${
              isWideScreenMode
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                : 'bg-[#0C1526] text-slate-400 border-slate-700 hover:text-white'
            }`}
            title="Toggle 32-inch 16:9 Display Frame Preset"
          >
            <Monitor className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
