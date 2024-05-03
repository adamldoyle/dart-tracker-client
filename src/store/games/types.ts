import { IMonitoredState } from '@adamldoyle/reduxjs-toolkit-monitored-slice';

export interface IPlayerGameStats {
  email: string;
  total: number;
  remaining: number;
  roundsPlayed: number;
  ranking: number;
  busts: number;
  zeroes: number;
  forfeit?: boolean;
}

export interface IGameConfig {
  datePlayed: number;
  players: string[];
  goal: number;
  forfeits?: string[];
}

export type IRounds = Record<string, number>[];
export type IEditRounds = Record<string, string>[];
export type IAllPlayerGameStats = Record<string, IPlayerGameStats>;

export interface IGameData {
  config: IGameConfig;
  rounds: IRounds;
  playerStats: IAllPlayerGameStats;
}

export interface IGame {
  leagueKey: string;
  gameId: string;
  data: IGameData;
  createdAt: number;
  updatedAt: number;
}

export type ILeagueGamesState = IMonitoredState<IGame[]>;
