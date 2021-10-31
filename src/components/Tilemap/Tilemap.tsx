import React, { FunctionComponent, useReducer, useEffect } from 'react';
import { Sprite, TileSchema } from '../..';
import { setColSize, setDragSpeedRatio, setRowSize, setSpritePack, setTileSchema } from './context/TilemapActions';
import { TilemapContext } from './context/TilemapContext';
import { tilemapReducer } from './context/TilemapReducer';
import { initialState } from './context/TilemapState';
import Table from './components/Table';
import './tilemap.scss';
import { distpatchOnChange } from '../../hooks/dispatchOnChange';
import { buildSpritePack } from './SpritePackBuilder';
import GlobalStyleVariables from './components/GlobalStyleVariables';

export type TilemapProps = {
  rowSize?: number;
  colSize?: number;
  dragSpeedRatio?: number;
  sprites?: Sprite[];
  schema?: TileSchema[][];
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
    props.schema,
    dispatch,
    setTileSchema,
  );

  const buildPack = async () => {
    if (props.sprites) {
      const spritePack = await buildSpritePack(props.sprites);
      dispatch(setSpritePack(spritePack));
    }
  };

  useEffect(() => {
    buildPack();
  }, [props.sprites])

  return (
    <TilemapContext.Provider value={{ state, dispatch }}>
      <GlobalStyleVariables>
        <Table />
      </GlobalStyleVariables>
    </TilemapContext.Provider>
  );
};

export default Tilemap;
