import { ActionType, TilemapActions } from "./TilemapActions";
import { TilemapState } from "./TilemapState";

/**
 * Tilemap reducer
 * @param state 
 * @param action 
 * @returns 
 */
export function tilemapReducer(
    state: TilemapState,
    action: TilemapActions
): TilemapState {
    const nextState = { ...state };

    switch (action.type) {

        case ActionType.SetColSize:
            nextState.colSize = action.payload.colSize;
            return nextState;

        case ActionType.SetRowSize:
            nextState.rowSize = action.payload.rowSize;
            return nextState;

        case ActionType.SetTileSchemas:
            nextState.tileSchemas = action.payload.tileSchemas;
            return nextState;

        case ActionType.SetDragSpeedRatio:
            nextState.dragSpeedRatio = action.payload.dragSpeedRatio;
            return nextState;
        
        case ActionType.SetZoom:
            nextState.currentZoom = action.payload.zoom;
            return nextState;

        case ActionType.SetSpritePack:
            nextState.spritePack = action.payload.spritePack;
            return nextState;
            
        default:
            return state;
    }
};