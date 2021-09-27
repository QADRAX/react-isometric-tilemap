import { TileSchema } from "../../..";

export type TilemapState = {
    tileSchemas: TileSchema[][];
    rowSize: number;
    colSize: number;
    dragSpeedRatio: number;
};

export const initialState: TilemapState = {
    tileSchemas: [[]],
    rowSize: 0,
    colSize: 0,
    dragSpeedRatio: 0.05,
};