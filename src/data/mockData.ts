import { Competition, Match, StandingItem, NewsItem, BookmakerOdds, ValueBet, RadarMetric, MatchTrendPoint } from '../types';

export const COMPETITIONS: Competition[] = [
  {
    id: 'wc2026',
    name: 'FIFA World Cup 2026',
    code: 'WC 2026',
    region: 'Global',
    season: '2026',
    totalTeams: 48,
    icon: '🏆',
    accentColor: '#00E5A0'
  },
  {
    id: 'ucl',
    name: 'UEFA Champions League',
    code: 'UCL',
    region: 'Europe',
    season: '2025/26',
    totalTeams: 36,
    icon: '⭐',
    accentColor: '#3B82F6'
  },
  {
    id: 'epl',
    name: 'Premier League',
    code: 'EPL',
    region: 'England',
    season: '2025/26',
    totalTeams: 20,
    icon: '🦁',
    accentColor: '#8B5CF6'
  },
  {
    id: 'laliga',
    name: 'LaLiga EA Sports',
    code: 'LALIGA',
    region: 'Spain',
    season: '2025/26',
    totalTeams: 20,
    icon: '⚡',
    accentColor: '#EF4444'
  },
  {
    id: 'seriea',
    name: 'Serie A Made in Italy',
    code: 'SERIE A',
    region: 'Italy',
    season: '2025/26',
    totalTeams: 20,
    icon: '🎨',
    accentColor: '#06B6D4'
  },
  {
    id: 'copa',
    name: 'Copa Libertadores',
    code: 'LIBERTADORES',
    region: 'South America',
    season: '2026',
    totalTeams: 32,
    icon: '🔥',
    accentColor: '#F59E0B'
  }
];

export const UPCOMING_MATCHES: Match[] = [
  {
    id: 'm1',
    competitionId: 'wc2026',
    competitionName: 'World Cup 2026 - Semi-Final',
    teamHome: 'France',
    teamAway: 'Brazil',
    flagHome: '🇫🇷',
    flagAway: '🇧🇷',
    scoreHome: 2,
    scoreAway: 1,
    minute: 74,
    isLive: true,
    status: 'LIVE',
    timeOrDate: '74\' Live',
    stadium: 'MetLife Stadium, New York',
    xGHome: 2.14,
    xGAway: 1.08,
    oddsHome: 1.92,
    oddsDraw: 3.40,
    oddsAway: 3.85,
    valueBetEV: 12.4
  },
  {
    id: 'm2',
    competitionId: 'wc2026',
    competitionName: 'World Cup 2026 - Semi-Final',
    teamHome: 'Argentina',
    teamAway: 'Spain',
    flagHome: '🇦🇷',
    flagAway: '🇪🇸',
    scoreHome: 1,
    scoreAway: 1,
    minute: 32,
    isLive: true,
    status: 'LIVE',
    timeOrDate: '32\' Live',
    stadium: 'AT&T Stadium, Dallas',
    xGHome: 1.45,
    xGAway: 1.62,
    oddsHome: 2.45,
    oddsDraw: 3.10,
    oddsAway: 2.70,
    valueBetEV: 8.7
  },
  {
    id: 'm3',
    competitionId: 'ucl',
    competitionName: 'UEFA Champions League - Final',
    teamHome: 'Real Madrid',
    teamAway: 'Man City',
    flagHome: '🇪🇸',
    flagAway: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    scoreHome: 0,
    scoreAway: 0,
    isLive: false,
    status: 'UPCOMING',
    timeOrDate: 'Tonight 20:00',
    stadium: 'Allianz Arena, Munich',
    xGHome: 1.88,
    xGAway: 1.95,
    oddsHome: 2.30,
    oddsDraw: 3.50,
    oddsAway: 2.80,
    valueBetEV: 10.1
  },
  {
    id: 'm4',
    competitionId: 'epl',
    competitionName: 'Premier League - Matchday 34',
    teamHome: 'Arsenal',
    teamAway: 'Liverpool',
    flagHome: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    flagAway: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    scoreHome: 0,
    scoreAway: 0,
    isLive: false,
    status: 'UPCOMING',
    timeOrDate: 'Tomorrow 17:30',
    stadium: 'Emirates Stadium, London',
    xGHome: 1.72,
    xGAway: 1.55,
    oddsHome: 2.15,
    oddsDraw: 3.30,
    oddsAway: 3.20,
    valueBetEV: 6.4
  }
];

export const GROUP_STANDINGS: StandingItem[] = [
  // Group A
  { position: 1, team: 'France', flag: '🇫🇷', played: 3, won: 3, drawn: 0, lost: 0, gf: 8, ga: 1, gd: 7, points: 9, isQualifying: true, group: 'Group A' },
  { position: 2, team: 'Mexico', flag: '🇲🇽', played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 3, gd: 2, points: 6, isQualifying: true, group: 'Group A' },
  { position: 3, team: 'Denmark', flag: '🇩🇰', played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 4, gd: -1, points: 3, isQualifying: false, group: 'Group A' },
  { position: 4, team: 'Cameroon', flag: '🇨🇲', played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 9, gd: -8, points: 0, isQualifying: false, group: 'Group A' },

  // Group B
  { position: 1, team: 'Brazil', flag: '🇧🇷', played: 3, won: 2, drawn: 1, lost: 0, gf: 7, ga: 2, gd: 5, points: 7, isQualifying: true, group: 'Group B' },
  { position: 2, team: 'Japan', flag: '🇯🇵', played: 3, won: 2, drawn: 0, lost: 1, gf: 4, ga: 3, gd: 1, points: 6, isQualifying: true, group: 'Group B' },
  { position: 3, team: 'Germany', flag: '🇩🇪', played: 3, won: 1, drawn: 1, lost: 1, gf: 5, ga: 4, gd: 1, points: 4, isQualifying: false, group: 'Group B' },
  { position: 4, team: 'Australia', flag: '🇦🇺', played: 3, won: 0, drawn: 0, lost: 3, gf: 0, ga: 7, gd: -7, points: 0, isQualifying: false, group: 'Group B' },

  // Group C
  { position: 1, team: 'Argentina', flag: '🇦🇷', played: 3, won: 3, drawn: 0, lost: 0, gf: 9, ga: 2, gd: 7, points: 9, isQualifying: true, group: 'Group C' },
  { position: 2, team: 'Netherlands', flag: '🇳🇱', played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 3, gd: 1, points: 4, isQualifying: true, group: 'Group C' },
  { position: 3, team: 'Nigeria', flag: '🇳🇬', played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 5, gd: -2, points: 3, isQualifying: false, group: 'Group C' },
  { position: 4, team: 'Canada', flag: '🇨🇦', played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 8, gd: -6, points: 1, isQualifying: false, group: 'Group C' }
];

export const SPORTS_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Kylian Mbappé xG Efficiency Surges +38% in World Cup Knockout Stage',
    snippet: 'FAC Neural Tracking indicates Mbappé sprint velocity reached 37.2 km/h during transition attack against Brazil.',
    category: 'TACTICAL xG',
    timeAgo: '12m ago',
    readTime: '2 min read',
    playerAvatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80',
    playerTitle: 'Kylian Mbappé',
    sentiment: 'BULLISH'
  },
  {
    id: 'n2',
    title: 'FAC AI Flags Arbitrage Opportunity on World Cup Semi-Final Goal Markets',
    snippet: 'Betcris vs Pinnacle line discrepancy creates +12.4% Expected Value edge on France Over 1.5 Team Goals.',
    category: 'VALUE BET ALERT',
    timeAgo: '28m ago',
    readTime: '3 min read',
    playerAvatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=120&q=80',
    playerTitle: 'Vinícius Júnior',
    sentiment: 'HIGH_IMPACT'
  },
  {
    id: 'n3',
    title: 'Lamine Yamal Generates Highest Expected Assists (xA/90) in International Football',
    snippet: 'Deep spatial mapping shows Spain 18yo winger completed 14 key box entries in last 3 matches.',
    category: 'PLAYER INTEL',
    timeAgo: '1h ago',
    readTime: '4 min read',
    playerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    playerTitle: 'Lamine Yamal',
    sentiment: 'BREAKING'
  }
];

export const BOOKMAKER_ODDS: BookmakerOdds[] = [
  {
    name: 'Betcris',
    logo: '🔴',
    home: 1.95,
    draw: 3.45,
    away: 3.90,
    payout: '97.2%',
    isBestValHome: true,
    isBestValDraw: true
  },
  {
    name: 'Pinnacle',
    logo: '⚡',
    home: 1.92,
    draw: 3.40,
    away: 3.85,
    payout: '98.1%',
    isBestValAway: false
  },
  {
    name: 'Bet365',
    logo: '🟢',
    home: 1.88,
    draw: 3.35,
    away: 4.10,
    payout: '95.8%',
    isBestValAway: true
  },
  {
    name: 'Unibet',
    logo: '🟡',
    home: 1.90,
    draw: 3.30,
    away: 3.80,
    payout: '96.1%'
  }
];

export const VALUE_BETS: ValueBet[] = [
  {
    id: 'vb1',
    match: 'France vs Brazil',
    competition: 'FIFA World Cup 2026',
    selection: 'France Over 1.5 Goals',
    bookmaker: 'Betcris',
    odds: 1.95,
    fairOdds: 1.73,
    evPercent: 12.4,
    confidenceStars: 5,
    stakeRecommendation: '3.2% Bankroll (Kelly Criterion)',
    reasons: [
      'FAC AI projects France xG at 2.14 vs Brazil weakened defensive line.',
      'Brazil missing primary holding midfielder due to yellow card accumulation.',
      'Betcris odds (1.95) are 12.7% above pinnacle sharp market consensus (1.73).'
    ]
  },
  {
    id: 'vb2',
    match: 'Argentina vs Spain',
    competition: 'FIFA World Cup 2026',
    selection: 'Both Teams To Score (BTTS)',
    bookmaker: 'Pinnacle',
    odds: 1.88,
    fairOdds: 1.72,
    evPercent: 9.3,
    confidenceStars: 4,
    stakeRecommendation: '2.5% Bankroll',
    reasons: [
      'Combined xG per match for both teams exceeds 3.07 over last 6 games.',
      'Spain high defensive line vulnerable to Lionel Messi trough passes.'
    ]
  }
];

export const RADAR_METRICS_FRANCE_BRAZIL: RadarMetric[] = [
  { attribute: 'Attack Rating (xG)', teamA: 92, teamB: 85, fullMark: 100 },
  { attribute: 'Defensive Solidity', teamA: 88, teamB: 79, fullMark: 100 },
  { attribute: 'Pressing (PPDA)', teamA: 84, teamB: 91, fullMark: 100 },
  { attribute: 'Transition Speed', teamA: 95, teamB: 88, fullMark: 100 },
  { attribute: 'Aerial Dominance', teamA: 78, teamB: 82, fullMark: 100 },
  { attribute: 'Shot Conversion %', teamA: 89, teamB: 80, fullMark: 100 }
];

export const MATCH_TREND_POINTS: MatchTrendPoint[] = [
  { minute: 0, timeLabel: "0'", xG_TeamA: 0.0, xG_TeamB: 0.0, possessionA: 50, possessionB: 50 },
  { minute: 15, timeLabel: "15'", xG_TeamA: 0.28, xG_TeamB: 0.12, possessionA: 58, possessionB: 42 },
  { minute: 23, timeLabel: "23'", xG_TeamA: 1.05, xG_TeamB: 0.18, possessionA: 62, possessionB: 38, event: "GOAL! K. Mbappé (23')", eventTeam: 'A' },
  { minute: 35, timeLabel: "35'", xG_TeamA: 1.22, xG_TeamB: 0.45, possessionA: 55, possessionB: 45 },
  { minute: 45, timeLabel: "45'", xG_TeamA: 1.48, xG_TeamB: 0.52, possessionA: 53, possessionB: 47 },
  { minute: 60, timeLabel: "60'", xG_TeamA: 1.62, xG_TeamB: 0.68, possessionA: 49, possessionB: 51 },
  { minute: 68, timeLabel: "68'", xG_TeamA: 1.62, xG_TeamB: 1.05, possessionA: 46, possessionB: 54, event: "GOAL! Vinícius Jr (68')", eventTeam: 'B' },
  { minute: 74, timeLabel: "74'", xG_TeamA: 2.14, xG_TeamB: 1.08, possessionA: 54, possessionB: 46, event: "GOAL! A. Griezmann (74')", eventTeam: 'A' },
  { minute: 90, timeLabel: "90'", xG_TeamA: 2.14, xG_TeamB: 1.08, possessionA: 52, possessionB: 48 }
];

export const timelineStages = [
  { id: '1', label: 'ENE', active: false },
  { id: '2', label: 'FEB', active: false },
  { id: '3', label: 'MAR', active: false },
  { id: '4', label: 'ABR', active: false },
  { id: '5', label: 'MAY', active: false },
  { id: '6', label: 'JUN', active: false },
  { id: '7', label: 'JUL', active: false },
  { id: '8', label: 'AGO', active: false },
  { id: '9', label: 'SEP', active: false },
  { id: '10', label: 'OCT', active: true },
  { id: '11', label: 'NOV', active: false },
  { id: '12', label: 'DIC', active: false }
];

export const focusLeagues = [
  { id: '1', name: 'Champions League', flag: '🇪🇺', matchCount: 8, topFavorite: 'Real Madrid' },
  { id: '2', name: 'Premier League', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', matchCount: 10, topFavorite: 'Manchester City' },
  { id: '3', name: 'La Liga EA Sports', flag: '🇪🇸', matchCount: 10, topFavorite: 'FC Barcelona' },
  { id: '4', name: 'Serie A', flag: '🇮🇹', matchCount: 10, topFavorite: 'Inter Milan' },
  { id: '5', name: 'Bundesliga', flag: '🇩🇪', matchCount: 9, topFavorite: 'Bayern München' }
];

export const featuredMatch = {
  id: 'fm1',
  homeTeam: 'Liverpool',
  awayTeam: 'Arsenal',
  leagueName: 'Premier League',
  leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  time: 'Hoy · 17:30',
  venue: 'Anfield',
  odds1: 2.10,
  oddsX: 3.40,
  odds2: 3.20,
  insight: 'Liverpool ha ganado 4 de los últimos 5 partidos en casa contra Arsenal.'
};

export const valueBetOpportunity = {
  title: 'Victoria Liverpool (Local)',
  match: 'Liverpool vs Arsenal',
  valuePercentage: 8.7,
  modelProb: 52,
  marketProb: 43.3,
  recommendation: 'Cuota 2.10 en Betcris sobreestima probabilidad implícita en un +8.7%.'
};

export const upcomingMatches = [
  { id: 'm1', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', time: '21:00', league: 'La Liga', status: 'HOY', odds1: 1.95, oddsX: 3.60, odds2: 3.50 },
  { id: 'm2', homeTeam: 'Bayern München', awayTeam: 'Dortmund', time: '18:30', league: 'Bundesliga', status: 'HOY', odds1: 1.65, oddsX: 4.10, odds2: 4.80 },
  { id: 'm3', homeTeam: 'Inter', awayTeam: 'Juventus', time: '20:45', league: 'Serie A', status: 'HOY', odds1: 2.05, oddsX: 3.25, odds2: 3.75 },
  { id: 'm4', homeTeam: 'PSG', awayTeam: 'Marseille', time: '21:00', league: 'Ligue 1', status: 'MAÑANA', odds1: 1.50, oddsX: 4.50, odds2: 5.75 }
];

export const newsArticles = [
  { id: 'n1', title: 'Mbappé alcanza récord de xG en liga española', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80', source: 'FAC Analytics', time: 'Hace 2 horas', snippet: 'El delantero acumula 14.2 goles esperados en las primeras 10 jornadas.' },
  { id: 'n2', title: 'Análisis de presión alta: Man City vs Arsenal', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80', source: 'Tactics Hub', time: 'Hace 4 horas', snippet: 'PPDA de 7.8 colocan al City como el equipo más agresivo sin balón en Europa.' }
];

export const liveStats = {
  totalMatchesAnalyzed: 1420,
  aiAccuracy: '78.4%',
  valueBetsFoundToday: 14,
  activeUsers: 3410
};

export const navItems = [
  { id: 'dashboard', label: 'Inicio', icon: 'Home' },
  { id: 'competiciones', label: 'Competiciones', icon: 'Shield' },
  { id: 'equipos', label: 'Equipos', icon: 'Users' },
  { id: 'jugadores', label: 'Jugadores', icon: 'User' },
  { id: 'partidos', label: 'Partidos', icon: 'CalendarDays' },
  { id: 'ia-predicciones', label: 'Inteligencia', icon: 'Brain', hasSubmenu: true },
  { id: 'cuotas-valor', label: 'Apuestas', icon: 'TrendingUp' },
  { id: 'comparador', label: 'Transferencias', icon: 'Repeat' },
  { id: 'noticias', label: 'Noticias', icon: 'Newspaper', hasDividerAfter: true },
  { id: 'eventos', label: 'Calendario', icon: 'Calendar' },
  { id: 'estadisticas', label: 'Live Stats', icon: 'BarChart3' },
  { id: 'configuracion', label: 'Configuración', icon: 'Settings' }
];

export const focusedLeagues = [
  { id: '1', name: 'Champions League', flag: '🇪🇺', matchCount: 8, topFavorite: 'Real Madrid' },
  { id: '2', name: 'Premier League', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', matchCount: 10, topFavorite: 'Manchester City' },
  { id: '3', name: 'La Liga EA Sports', flag: '🇪🇸', matchCount: 10, topFavorite: 'FC Barcelona' },
  { id: '4', name: 'Serie A', flag: '🇮🇹', matchCount: 10, topFavorite: 'Inter Milan' },
  { id: '5', name: 'Bundesliga', flag: '🇩🇪', matchCount: 9, topFavorite: 'Bayern München' }
];

export const hubNodes = [
  { id: 'competiciones', title: 'COMPETICIONES', subtitle: '42 Ligas activas', icon: 'Trophy', highlight: 'UCL · EPL · LALIGA', color: 'cyan' },
  { id: 'partidos', title: 'PARTIDOS EN VIVO', subtitle: '18 Encuentros hoy', icon: 'CalendarDays', highlight: 'EN VIVO & PROXIMOS', color: 'emerald' },
  { id: 'equipos', title: 'EQUIPOS & XG', subtitle: '96 Clubes analizados', icon: 'Shield', highlight: 'EFICIENCIA OFENSIVA', color: 'blue' },
  { id: 'jugadores', title: 'JUGADORES TOP', subtitle: 'Top Rendimiento', icon: 'UserCheck', highlight: 'GOLES & ASISTENCIAS', color: 'amber' },
  { id: 'ia-predicciones', title: 'IA PREDICCIONES', subtitle: 'Modelo Neural v4.8', icon: 'Brain', highlight: 'SIMULADOR DE PARTIDOS', color: 'purple' },
  { id: 'comparador', title: 'COMPARADOR CUOTAS', subtitle: '8 Casas de apuestas', icon: 'Repeat', highlight: 'ARBITRAJE Y VALUE', color: 'rose' }
];
