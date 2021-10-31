import React, { FunctionComponent, Fragment, useContext } from 'react';
import { TileSchema } from '../../../../../..';
import classnames from 'classnames';
import { TilemapContext } from '../../../../context/TilemapContext';

export type TileProps = {
    schema?: TileSchema;
    col: number;
    row: number;
};

const BASE_Z_INDEX_CONTENT = 1000;
const BASE_Z_INDEX_TILE = 2000;

const Tile: FunctionComponent<TileProps> = (props) => {
    const { state } = useContext(TilemapContext);

    const spritePack = state.spritePack;
    const schema = props.schema;
    const spriteDefinition = schema 
        ? spritePack?.packDefinition[schema.id]
        : undefined;
    const totalSprites = spritePack 
        ? Object.keys(spritePack.packDefinition).length 
        : 1;

    if(spriteDefinition){
        
        const contentClass = classnames('sprite');

        const contentZIndex = (BASE_Z_INDEX_CONTENT + props.col + props.row) * 2;
        const tileZIndex = (BASE_Z_INDEX_TILE + props.col + props.row) * 2;

        const backgroundSize = `${totalSprites}00% 100%`;
        const backgroundPosition = `calc(${spriteDefinition.index} * var(--sprite-width) * -1) 0`;
    
        const contentStyle: React.CSSProperties = {
            zIndex: contentZIndex,
            backgroundSize,
            backgroundPosition,
        };
    
        const tileStyle: React.CSSProperties = {
            zIndex: tileZIndex,
        };
    
        return (
            <Fragment>
                <div className="tile" style={tileStyle}></div>
                <div className="tile_sprite-container">
                    <div className={contentClass} style={contentStyle}></div>
                </div>
            </Fragment>
        );
    }else {
        return null;
    }
};

export default Tile;