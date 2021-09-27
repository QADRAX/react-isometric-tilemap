import React, { FunctionComponent, useReducer, useEffect} from 'react';
import { TileSchema } from '../..';
import { setColSize, setDragSpeedRatio, setRowSize, setTileSchema } from './context/TilemapActions';
import { TilemapContext } from './context/TilemapContext';
import { tilemapReducer } from './context/TilemapReducer';
import { initialState } from './context/TilemapState';
import Table from './Table';
import './tilemap.scss';

type TilemapProps = {
  rowSize?: number;
  colSize?: number;
  dragSpeedRatio?: number;
  tileSchemas?: TileSchema[][];
};

const Tilemap: FunctionComponent<TilemapProps> = (props) => {
  const [state, dispatch] = useReducer(tilemapReducer, initialState);

  useEffect(() => {
    if(props.rowSize){
      dispatch(setRowSize(props.rowSize));
    }
  }, [props.rowSize]);

  useEffect(() => {
    if(props.colSize){
      dispatch(setColSize(props.colSize));
    }
  }, [props.colSize]);

  useEffect(() => {
    if(props.dragSpeedRatio){
      dispatch(setDragSpeedRatio(props.dragSpeedRatio));
    }
  }, [props.dragSpeedRatio]);

  useEffect(() => {
    if(props.tileSchemas){
      dispatch(setTileSchema(props.tileSchemas));
    }
  }, [props.tileSchemas])


  return (
    <TilemapContext.Provider value={{state, dispatch}}>
      <Table></Table>
    </TilemapContext.Provider>

  )
};

export default Tilemap;
