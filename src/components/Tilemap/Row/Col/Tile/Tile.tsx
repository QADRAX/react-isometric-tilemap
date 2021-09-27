import React, { FunctionComponent } from 'react';
import { TileSchema } from '../../../../..';

export type TileProps = {
    schema?: TileSchema;
    col: number;
    row: number;
};

const Tile: FunctionComponent<TileProps> = () => {
    const contentClass = `tile-0`;
    return (
        <div className="tile">
            <div className={contentClass}></div>
        </div>
    )
};

export default Tile;