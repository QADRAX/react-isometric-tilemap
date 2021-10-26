import { TileSchema } from "../../..";
import { SpritePack } from "../SpritePackBuilder";

export type TilemapState = {
    tileSchemas: TileSchema[][];
    rowSize: number;
    colSize: number;
    dragSpeedRatio: number;
    currentZoom: number;
    spritePack?: SpritePack;
};

export const initialState: TilemapState = {
    tileSchemas: [[]],
    rowSize: 0,
    colSize: 0,
    dragSpeedRatio: 1,
    currentZoom: 16,
};