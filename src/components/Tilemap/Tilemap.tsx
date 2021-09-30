import React, { FunctionComponent, useReducer} from 'react';
import { TileSchema } from '../..';
import { setColSize, setDragSpeedRatio, setRowSize, setTileSchema } from './context/TilemapActions';
import { TilemapContext } from './context/TilemapContext';
import { tilemapReducer } from './context/TilemapReducer';
import { initialState } from './context/TilemapState';
import Table from './components/Table';
import './tilemap.scss';
import { distpatchOnChange } from '../../hooks/dispatchOnChange';

export type TilemapProps = {
  rowSize?: number;
  colSize?: number;
  dragSpeedRatio?: number;
  tileSchemas?: TileSchema[][];
};

const Tilemap: FunctionComponent<TilemapProps> = (props) => {
  const [state, dispatch] = useReducer(tilemapReducer, initialState);

  // Props binding
  
  distpatchOnChange(
    props.rowSize,
    dispatch,
    setRowSize,
  );

  distpatchOnChange(
    props.colSize,
    dispatch,
    setColSize,
  );

  distpatchOnChange(
    props.dragSpeedRatio,
    dispatch,
    setDragSpeedRatio,
  );

  distpatchOnChange(
    props.tileSchemas,
    dispatch,
    setTileSchema,
  );

  return (
    <TilemapContext.Provider value={{state, dispatch}}>
      <Table></Table>
    </TilemapContext.Provider>
  )
};

export default Tilemap;
