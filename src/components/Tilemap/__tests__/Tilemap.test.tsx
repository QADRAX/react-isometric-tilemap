import React from 'react';
import Tilemap, { TilemapProps } from '../Tilemap';
import { render } from '@testing-library/react';

const defaultProps: TilemapProps = {
  rowSize: 1,
  colSize: 1,
};

const setup = (props = defaultProps) => render(<Tilemap {...props} />);

describe('Tilemap', () => {
  it('renders', () => {
    setup();

    const tilemap = document.getElementsByClassName('tilemap');
    const isOneElementRendered = tilemap.length == 1;

    expect(isOneElementRendered == true);
  });

  it('render expecteed tiles', () => {
    const numberOfRows = 7;
    const numberOfCols = 4;
    const expectedTiles = numberOfCols * numberOfRows;

    setup({rowSize: numberOfRows, colSize: numberOfCols});
    
    const tiles = document.getElementsByClassName('tile');
    const sameAsExpected = tiles.length == expectedTiles;

    expect(sameAsExpected == true);
  })
});
