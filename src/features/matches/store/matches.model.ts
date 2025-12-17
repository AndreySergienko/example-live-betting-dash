import type {Trend} from "@features/matches/lib/types.ts";

export interface MatchesModel {
    id: number
    teamA: string;
    teamB: string;
    score: string;
    coeff: number;

    // Данные вычисления должны выполнять на бэкенде
    // Для примера разместим их в FE
    trend: Trend
    delta: number
}