import React, { FunctionComponent, useContext } from 'react';
import { TileSchema } from '../../../../..';
import { TilemapContext } from '../../../context/TilemapContext';
import { getElementFromMatrix } from '../../../../../utils';
import Tile from './Tile/Tile';

const defaultTileSchema: TileSchema = {
  id: 'klk',
};

type ColProps = {
  rowIndex: number;
  colIndex: number;
};

const Col: FunctionComponent<ColProps> = (props) => {
  const { state } = useContext(TilemapContext);
  const colClass = `col-${props.colIndex}`;
  const xPosition = props.colIndex + 1;
  const colStyle: React.CSSProperties = {
    transform: `translateX(${xPosition * 4}em)`,
  };
  const row = props.rowIndex;
  const col = props.colIndex;
  const tileSchema = getElementFromMatrix(state.tileSchemas, row, col) ?? defaultTileSchema;

  return (
    <td className={colClass}
      style={colStyle}>
      <Tile col={props.colIndex}
        row={props.rowIndex}
        schema={tileSchema}>
      </Tile>
    </td>
  )
};

export default Col;