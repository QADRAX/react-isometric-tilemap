import React from 'react';
import { storiesOf } from '@storybook/react';
import Tilemap from './Tilemap';

import tile1 from '../../assets/tile1.png';
import tile1_2 from '../../assets/tile1_2.png';

import { Sprite, TileSchema } from '../..';
import { useEffect, useState } from '@storybook/addons';

enum SpriteName {
  tile1 = 'tile1',
  tile2 = 'tile2',
};

const sprites: Sprite[] = [
  new Sprite(SpriteName.tile1, tile1),
  new Sprite(SpriteName.tile2, tile1_2),
];

const schema1: TileSchema[][] = [
  [{ id: SpriteName.tile1 }, { id: SpriteName.tile2 }],
  [{ id: SpriteName.tile1 }, { id: SpriteName.tile2 }],
];

const schema2: TileSchema[][] = [
  [{ id: SpriteName.tile2 }, { id: SpriteName.tile1 }],
  [{ id: SpriteName.tile1 }, { id: SpriteName.tile2 }],
];

const schema3: TileSchema[][] = [
  [{ id: SpriteName.tile1 }, { id: SpriteName.tile2 }],
  [{ id: SpriteName.tile2 }, { id: SpriteName.tile1 }],
];

const wrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '700px'
};

storiesOf('Example', module)
  .add('Default', () => {
    return (
      <div style={wrapperStyle}>
        <Tilemap rowSize={2} colSize={2} sprites={sprites} schema={schema1} />
      </div>
    );
  }).add('Changing schemas', () => {
    const [tick, setTick] = useState<number>(0);

    useEffect(() => {
      let timeoutId = window.setInterval(() => {
        const nextTick = tick + 1;
        setTick(nextTick);
      }, 1000);
      return () => {
        if(timeoutId){
          window.clearTimeout(timeoutId);
        }
      };
    }, [tick]);
    
    const schemas = [schema1, schema2, schema3];
    const numOfSchemas = schemas.length;

    const currentSchemaId = tick % numOfSchemas;
    const currentSchema = schemas[currentSchemaId];

    return (
      <div style={wrapperStyle}>
        <Tilemap rowSize={2} colSize={2} sprites={sprites} schema={currentSchema} />
      </div>
    );
  })