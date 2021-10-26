import React from 'react';
import { storiesOf } from '@storybook/react';
import Tilemap from './Tilemap';

import tile1 from '../../assets/tile1.png';
import tile1_2 from '../../assets/tile1_2.png';

import { Sprite, SpriteDefinition } from '../..';

storiesOf('Example', module)
  .add('Default', () => {
    const wrapperStyle: React.CSSProperties = {
      width: '100%',
      height: '700px'
    };

    const spritesDefinition: SpriteDefinition[] = [
      {
        id: 'tile1',
        sprite: new Sprite(tile1),
      },
      {
        id: 'tile2',
        sprite: new Sprite(tile1_2),
      },
    ];

    return (
      <div>
        <div style={wrapperStyle}>
          <Tilemap rowSize={12} colSize={12} spritesDefinition={spritesDefinition} />
        </div>
      </div>
    );
  })