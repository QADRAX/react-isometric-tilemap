import React, { FunctionComponent, Fragment } from 'react';
import { TileSchema } from '../../../../../..';
import classnames from 'classnames';

export type TileProps = {
    schema?: TileSchema;
    col: number;
    row: number;
};

const BASE_Z_INDEX_CONTENT = 1000;
const BASE_Z_INDEX_TILE = 2000;

const Tile: FunctionComponent<TileProps> = (props) => {
    const contentClass = classnames('tile_prueba');

    const contentZIndex = (BASE_Z_INDEX_CONTENT + props.col + props.row) * 2;
    const tileZIndex = (BASE_Z_INDEX_TILE + props.col + props.row) * 2;

    const contentStyle: React.CSSProperties = {
        zIndex: contentZIndex,
    };

    const tileStyle: React.CSSProperties = {
        zIndex: tileZIndex,
    };

    return (
        <Fragment>
            <div className="tile" style={tileStyle}></div>
            <div className="tile_image-container">
                <div className={contentClass} style={contentStyle}></div>
            </div>
        </Fragment>
    )
};

export default Tile;