import React, { FunctionComponent, useReducer, useEffect} from 'react';
import { SpriteDefinition, TileSchema } from '../..';
import { setColSize, setDragSpeedRatio, setRowSize, setSpritePack, setTileSchema } from './context/TilemapActions';
import { TilemapContext } from './context/TilemapContext';
import { tilemapReducer } from './context/TilemapReducer';
import { initialState } from './context/TilemapState';
import Table from './components/Table';
import './tilemap.scss';
import { distpatchOnChange } from '../../hooks/dispatchOnChange';
import { buildSpritePack } from './SpritePackBuilder';

export type TilemapProps = {
  rowSize?: number;
  colSize?: number;
  dragSpeedRatio?: number;
  spritesDefinition?: SpriteDefinition[];
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

  const buildPack = async () =>  {
    if(props.spritesDefinition){
      const spritePack = await buildSpritePack(props.spritesDefinition);
      dispatch(setSpritePack(spritePack));
    }
  };

  useEffect(() => {
    buildPack();
  }, [props.spritesDefinition])

  return (
    <TilemapContext.Provider value={{state, dispatch}}>
      {
        state.spritePack != null && 
        <img src={state.spritePack.base64} />
      }
      <Table></Table>
    </TilemapContext.Provider>
  )
};

export default Tilemap;
