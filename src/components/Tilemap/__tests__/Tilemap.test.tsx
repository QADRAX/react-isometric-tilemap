import React from 'react';
import { Tilemap, TilemapProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TilemapProps = {
  
};

const setup = (props = defaultProps) => render(<Tilemap {...props} />);

describe('Tilemap', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
