import React, { useRef, useState, useContext, useEffect } from 'react';
import { Position } from '../../..';
import { TilemapContext } from '../context/TilemapContext';
import Row from './Row/Row';
import { useResizeDetector } from 'react-resize-detector';
import { setZoom } from '../context/TilemapActions';

/**
 * Sprite pack CSS var name
 */
const SPRITE_PACK_CSS_VAR = '--sprite-pack';

/**
 * Main wrapper for react isometric tilemap.
 * Responsive changes, dragrable movement 
 * and scrollable zoom in/out functionallity is here.
 * 
 * @returns tile table
 */
const Table = () => {
    // Context
    const { state, dispatch } = useContext(TilemapContext);

    // Refs
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Resize Hook
    const { width: wrapperWidth, height: wrapperHeight } = useResizeDetector({
        targetRef: wrapperRef,
    });

    // State
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [mousePosition, setMousePosition] = useState<Position | null>(null);
    const [mapPosition, setMapPosition] = useState<Position>({ x: 0, y: 0 });

    // Events

    const onMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const nextMousePosition: Position = {
            x: event.pageX,
            y: event.pageY,
        };
        const nextMapPosition: Position = {
            x: mapPosition.x,
            y: mapPosition.y,
        };

        setMousePosition(nextMousePosition);
        setMapPosition(nextMapPosition);
        setIsDragging(true);
    };

    const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDragging && mousePosition != null) {
            const dragSpeedRatio = state.dragSpeedRatio;

            const relativeMovementX = (event.pageX - mousePosition.x) * (dragSpeedRatio);
            const relativeMovementY = (event.pageY - mousePosition.y) * (dragSpeedRatio);

            const nextMousePosition: Position = {
                x: event.pageX,
                y: event.pageY,
            };
            const nextMapPosition: Position = {
                x: mapPosition.x + relativeMovementX,
                y: mapPosition.y + relativeMovementY,
            };

            setMousePosition(nextMousePosition);
            setMapPosition(nextMapPosition);
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        const deltaY = event.deltaY;
        if (deltaY < 0) {
            const nextZoom = state.currentZoom + 1;
            dispatch(setZoom(nextZoom));
        } else {
            if (state.currentZoom > 0) {
                const nextZoom = state.currentZoom - 1;
                dispatch(setZoom(nextZoom));
            }
        }
    };

    /**
     * Set initial position when resizing
     */
    useEffect(() => {
        if (wrapperHeight && wrapperWidth) {
            const initialPos: Position = {
                x: wrapperWidth / 2,
                y: 0,
            };
            setMapPosition(initialPos)
        }
    }, [wrapperHeight, wrapperWidth]);

    // Computed fields

    const tableStyle: React.CSSProperties = {
        left: `${mapPosition.x}px`,
        top: `${mapPosition.y}px`,
    };
    if (state.spritePack) {
        const spritePackCSSVar = `url('${state.spritePack.base64}')`;
        tableStyle[SPRITE_PACK_CSS_VAR] = spritePackCSSVar;
    }


    const wrapperStyle: React.CSSProperties = {
        fontSize: `${state.currentZoom}px`,
    };

    const rows: JSX.Element[] = [];
    for (let i = 0; i < state.rowSize; i++) {
        rows.push(
            <Row key={i} rowIndex={i} />
        );
    }

    return (
        <div className="tilemap"
            style={wrapperStyle}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onWheel={onWheel}
            ref={wrapperRef}>
            <table style={tableStyle}>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
