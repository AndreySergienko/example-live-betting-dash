export interface MatchesModel {
    id: number
    teamA: string;
    teamB: string;
    score: string;
    coeff: number;
    newCoeff?: number;
}