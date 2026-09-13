import React from 'react';
import { Activity, Radio, BarChart3, Trophy } from 'lucide-react';

export const FooterBar: React.FC = () => {
  return (
    <footer className="border-t border-[#1E2E48]/80 bg-[#040812] px-4 lg:px-6 py-2.5 mt-4 text-xs">
      <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-400">
        
        {/* Left: App Logo & Tagline */}
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#00E5A0]" />
          <span className="font-heading font-black text-sm text-white uppercase tracking-wider">
            FOOTBALL ANALYTICS CENTER <span className="text-[10px] text-[#00E5A0]">v0.1.0</span>
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-[11px] font-mono text-slate-400">
            Data. Insight. Better Decisions.
          </span>
        </div>

        {/* Right: Live Sync Indicators */}
        <div className="flex items-center gap-4 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 bg-[#0A1628] border border-[#182A45] px-2.5 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-ping"></span>
            <span className="text-[#00E5A0] font-bold">Live Data</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <Radio className="w-3.5 h-3.5 text-blue-400" />
            <span>UTC - 6 (Honduras)</span>
          </div>

          <button className="text-slate-400 hover:text-white transition-colors" title="Ver rendimiento del sistema">
            <BarChart3 className="w-4 h-4 text-[#00E5A0]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
