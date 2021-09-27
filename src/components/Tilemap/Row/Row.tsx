import React, { FunctionComponent, useContext } from 'react';
import { TilemapContext } from '../context/TilemapContext';
import Col from './Col/Col';

type RowProps = {
  rowIndex: number;
};

const Row: FunctionComponent<RowProps> = (props) => {
  const { state } = useContext(TilemapContext);
  const rowClass = `row-${props.rowIndex}`;
  const rowPosition = props.rowIndex + 1;

  const rowStyle: React.CSSProperties = {
    transform: `translateY(${rowPosition * 4}em)`,
  };

  const cols: JSX.Element[] = [];
  for (let i = 0; i < state.colSize; i++) {
    cols.push(
      <Col key={i}
        colIndex={i}
        rowIndex={props.rowIndex} />
    );
  }

  return (
    <tr className={rowClass}
      style={rowStyle}>
      {cols}
    </tr>
  );
};

export default Row;