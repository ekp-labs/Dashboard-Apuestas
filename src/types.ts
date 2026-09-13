export type NavigationTab = 
  | 'Dashboard' 
  | 'Competitions' 
  | 'Teams' 
  | 'Players' 
  | 'Intelligence AI' 
  | 'Value Bets';

export interface Competition {
  id: string;
  name: string;
  code: string;
  region: string;
  season: string;
  totalTeams: number;
  icon: string;
  accentColor: string;
}

export interface Match {
  id: string;
  competitionId: string;
  competitionName: string;
  teamHome: string;
  teamAway: string;
  flagHome: string;
  flagAway: string;
  scoreHome: number;
  scoreAway: number;
  minute?: number;
  isLive: boolean;
  status: 'LIVE' | 'UPCOMING' | 'FINISHED';
  timeOrDate: string;
  stadium: string;
  xGHome: number;
  xGAway: number;
  oddsHome: number;
  oddsDraw: number;
  oddsAway: number;
  valueBetEV?: number;
}

export interface StandingItem {
  position: number;
  team: string;
  flag: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  isQualifying: boolean;
  group: 'Group A' | 'Group B' | 'Group C' | 'Group D';
}

export interface NewsItem {
  id: string;
  title: string;
  snippet: string;
  category: string;
  timeAgo: string;
  readTime: string;
  playerAvatar: string;
  playerTitle: string;
  sentiment: 'BULLISH' | 'HIGH_IMPACT' | 'BREAKING' | 'NEUTRAL';
}

export interface BookmakerOdds {
  name: string;
  logo: string;
  home: number;
  draw: number;
  away: number;
  payout: string;
  isBestValHome?: boolean;
  isBestValDraw?: boolean;
  isBestValAway?: boolean;
}

export interface ValueBet {
  id: string;
  match: string;
  competition: string;
  selection: string;
  bookmaker: string;
  odds: number;
  fairOdds: number;
  evPercent: number;
  confidenceStars: number; // 1 to 5
  stakeRecommendation: string;
  reasons: string[];
}

export interface RadarMetric {
  attribute: string;
  teamA: number;
  teamB: number;
  fullMark: number;
}

export interface MatchTrendPoint {
  minute: number;
  timeLabel: string;
  xG_TeamA: number;
  xG_TeamB: number;
  possessionA: number;
  possessionB: number;
  event?: string;
  eventTeam?: 'A' | 'B';
}
