import { TileSchema } from "../../..";
import { SpritePack } from "../SpritePackBuilder";

/**
 * Set col size action
 */
export interface SetColSize {
    type: ActionType.SetColSize;
    payload: {
        colSize: number;
    };
};

export interface SetRowSize {
    type: ActionType.SetRowSize;
    payload: {
        rowSize: number;
    }
};

export interface SetTileSchemas {
    type: ActionType.SetTileSchemas,
    payload: {
        tileSchemas: TileSchema[][];
    },
};

export interface SetDragSpeedRatio {
    type: ActionType.SetDragSpeedRatio,
    payload: {
        dragSpeedRatio: number;
    },
};

export interface SetZoom {
    type: ActionType.SetZoom,
    payload: {
        zoom: number;
    },
};

export interface SetSpritePack {
    type: ActionType.SetSpritePack,
    payload: {
        spritePack: SpritePack,
    }
}


/**
 * Action types enum
 */
export enum ActionType {
    // eslint-disable-next-line no-unused-vars
    SetColSize,
    SetRowSize,
    SetTileSchemas,
    SetDragSpeedRatio,
    SetZoom,
    SetSpritePack,
};

/**
 * Types for diferent actions
 */
export type TilemapActions = SetColSize | SetRowSize | SetTileSchemas | SetDragSpeedRatio | SetZoom | SetSpritePack;

// helper functions to simplify the caller

export const setColSize = (
    colSize: number,
): SetColSize => ({
    type: ActionType.SetColSize,
    payload: { colSize },
});

export const setRowSize = (
    rowSize: number,
): SetRowSize => ({
    type: ActionType.SetRowSize,
    payload: { rowSize },
});

export const setTileSchema = (
    tileSchemas: TileSchema[][],
): SetTileSchemas => ({
    type: ActionType.SetTileSchemas,
    payload: { tileSchemas },
});

export const setDragSpeedRatio = (
    dragSpeedRatio: number,
): SetDragSpeedRatio => ({
    type: ActionType.SetDragSpeedRatio,
    payload: { dragSpeedRatio },
});

export const setZoom = (
    zoom: number,
): SetZoom => ({
    type: ActionType.SetZoom,
    payload: { zoom },
});

export const setSpritePack = (
    spritePack: SpritePack,
): SetSpritePack => ({
    type: ActionType.SetSpritePack,
    payload: { spritePack },
});