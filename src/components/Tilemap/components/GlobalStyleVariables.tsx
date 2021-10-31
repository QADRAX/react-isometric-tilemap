import React, { FunctionComponent, useContext } from 'react';
import { TilemapContext } from '../context/TilemapContext';

/**
 * Sprite pack CSS var name
 */
const SPRITE_PACK_CSS_VAR = '--sprite-pack';

const GlobalStyleVariables: FunctionComponent = (props) => {
    const { state } = useContext(TilemapContext);

    const cssGlobalVariables: React.CSSProperties = {};
    if (state.spritePack) {
        const spritePackCSSVar = `url('${state.spritePack.base64}')`;
        cssGlobalVariables[SPRITE_PACK_CSS_VAR] = spritePackCSSVar;
    }

    return (
        <div className="tilemap_wrapper" style={cssGlobalVariables}>
            {
                state.spritePack != null &&
                <img src={state.spritePack.base64} />
            }
            {props.children}
        </div>
    )
};

export default GlobalStyleVariables;