export enum Trend {
    None = "none",
    Up = "up",
    Down = "down",
    Same = "same",
}

export interface WsResponseCell {
    id: number;
    coeff: number;
}