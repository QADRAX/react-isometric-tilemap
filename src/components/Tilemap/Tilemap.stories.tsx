import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tilemap } from './Tilemap';

storiesOf('Example', module)
  .add('Default', () => {
    const wrapperStyle: React.CSSProperties = {
      width: '700px',
      height: '500px'
    };

    return (
      <div style={wrapperStyle}>
        <Tilemap />
      </div>
    );
  })