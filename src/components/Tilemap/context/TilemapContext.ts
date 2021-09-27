import { createContext, Dispatch } from 'react';
import { TilemapActions } from './TilemapActions';
import { TilemapState, initialState } from './TilemapState';

/**
 * Context data
 */
type Context = {
  state: TilemapState;
  dispatch: Dispatch<TilemapActions>;
};

/**
 * Initial data state
 */
const initialContext: Context = {
  state: initialState,
  dispatch: () => undefined,
};

/**
 * Timeline section Context
 */
export const TilemapContext = createContext<Context>(initialContext);