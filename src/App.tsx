import React, { useState } from 'react';
import { Header } from './components/Header';
import { TimelineBar } from './components/TimelineBar';
import { Sidebar } from './components/Sidebar';
import { CentralHub } from './components/CentralHub';
import { RightColumn } from './components/RightColumn';
import { BottomSection } from './components/BottomSection';
import { FooterBar } from './components/FooterBar';
import { DetailModal } from './components/DetailModal';

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [selectedDate, setSelectedDate] = useState('2026-09-12');
  const [modalData, setModalData] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const handleOddsSelect = (match: string, type: string, value: number) => {
    setModalData({
      title: `Apuesta Seleccionada: ${match}`,
      content: (
        <div className="space-y-4 text-slate-200">
          <div className="p-4 bg-[#091220] border border-[#1C3254] rounded-xl space-y-2">
            <div className="text-xs text-slate-400 font-mono uppercase">Selección de Apuesta</div>
            <div className="text-lg font-bold text-[#00E5A0]">{type}</div>
            <div className="text-2xl font-black text-white font-mono">Cuota: {value.toFixed(2)}</div>
          </div>
          <p className="text-xs text-slate-400">
            Esta apuesta ha sido añadida a tu cupón virtual de seguimiento de Football Analytics Center.
          </p>
          <button
            onClick={() => setModalData(null)}
            className="w-full py-2.5 rounded-xl bg-[#00E5A0] text-[#060B14] font-bold uppercase text-xs hover:bg-[#00c98c] transition-colors"
          >
            Confirmar Selección
          </button>
        </div>
      )
    });
  };

  const handleLeagueClick = (league: any) => {
    setModalData({
      title: `${league.flag} ${league.name} - Centro de Análisis`,
      content: (
        <div className="space-y-4 text-slate-200">
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 bg-[#091220] border border-[#1A2D48] rounded-xl">
              <span className="text-slate-400 block">Partidos Destacados:</span>
              <strong className="text-white text-base">{league.matchCount} Encuentros</strong>
            </div>
            <div className="p-3 bg-[#091220] border border-[#1A2D48] rounded-xl">
              <span className="text-slate-400 block">Favorito Principal:</span>
              <strong className="text-[#00E5A0] text-base">{league.topFavorite}</strong>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Análisis cuantitativo de xG, probabilidad de victorias y métricas de presión avanzadas para la liga {league.name}.
          </p>
          <button
            onClick={() => setModalData(null)}
            className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold uppercase text-xs hover:bg-blue-500 transition-colors"
          >
            Cerrar Vista Detallada
          </button>
        </div>
      )
    });
  };

  const handleMatchClick = (match: any) => {
    setModalData({
      title: `${match.homeTeam} vs ${match.awayTeam}`,
      content: (
        <div className="space-y-4 text-slate-200">
          <div className="flex items-center justify-between p-3 bg-[#091220] border border-[#1C3254] rounded-xl">
            <span className="font-bold text-white">{match.homeTeam}</span>
            <span className="text-xs font-mono text-[#00E5A0]">{match.time} ({match.status})</span>
            <span className="font-bold text-white">{match.awayTeam}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2 bg-[#0C1728] border border-[#1E304C] rounded-lg">
              <div className="text-[10px] text-slate-400">1 (Local)</div>
              <div className="text-white font-bold">{match.odds1.toFixed(2)}</div>
            </div>
            <div className="p-2 bg-[#0C1728] border border-[#1E304C] rounded-lg">
              <div className="text-[10px] text-slate-400">X (Empate)</div>
              <div className="text-white font-bold">{match.oddsX.toFixed(2)}</div>
            </div>
            <div className="p-2 bg-[#0C1728] border border-[#1E304C] rounded-lg">
              <div className="text-[10px] text-slate-400">2 (Visitante)</div>
              <div className="text-white font-bold">{match.odds2.toFixed(2)}</div>
            </div>
          </div>
          <button
            onClick={() => setModalData(null)}
            className="w-full py-2.5 rounded-xl bg-[#00E5A0] text-[#060B14] font-bold uppercase text-xs hover:bg-[#00c98c] transition-colors"
          >
            Cerrar Ficha de Partido
          </button>
        </div>
      )
    });
  };

  const handleNewsClick = (article: any) => {
    setModalData({
      title: article.title,
      content: (
        <div className="space-y-4 text-slate-200">
          <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-xl border border-[#1E3252]" />
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Fuente: {article.source}</span>
            <span>{article.time}</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            {article.snippet} Reporte detallado de rendimiento y estadísticas en tiempo real generado por Football Analytics Center.
          </p>
          <button
            onClick={() => setModalData(null)}
            className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold uppercase text-xs hover:bg-blue-500 transition-colors"
          >
            Entendido
          </button>
        </div>
      )
    });
  };

  return (
    <div className="min-h-screen bg-[#040812] text-slate-100 flex flex-col font-sans selection:bg-[#00E5A0] selection:text-[#060B14]">
      {/* Header Bar */}
      <Header onSearchOpen={() => {}} />

      {/* Timeline Bar */}
      <TimelineBar
        selectedFilter={selectedFilter}
        onSelectFilter={setSelectedFilter}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />

      {/* Main Layout Area */}
      <div className="flex-1 flex max-w-[1920px] w-full mx-auto">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />

        {/* Central Dashboard Grid */}
        <main className="flex-1 p-4 lg:p-6 space-y-6 overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left/Center Hub Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <CentralHub
                onSelectMatch={handleMatchClick}
                onLeagueClick={handleLeagueClick}
                selectedFilter={selectedFilter}
              />
            </div>

            {/* Right Featured Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <RightColumn onSelectOdds={handleOddsSelect} />
            </div>
          </div>

          {/* Bottom Grid Section */}
          <BottomSection
            onSelectNews={handleNewsClick}
          />
        </main>
      </div>

      {/* Footer Bar */}
      <FooterBar />

      {/* Detail Modal */}
      {modalData && (
        <DetailModal
          isOpen={true}
          onClose={() => setModalData(null)}
          title={modalData.title}
        >
          {modalData.content}
        </DetailModal>
      )}
    </div>
  );
}

export default App;
