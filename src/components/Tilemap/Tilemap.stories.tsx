import React from 'react';
import { storiesOf } from '@storybook/react';
import Tilemap from './Tilemap';

storiesOf('Example', module)
  .add('Default', () => {
    const wrapperStyle: React.CSSProperties = {
      width: '100%',
      height: '700px'
    };

    return (
      <div style={wrapperStyle}>
        <Tilemap rowSize={12} colSize={12} />
      </div>
    );
  })