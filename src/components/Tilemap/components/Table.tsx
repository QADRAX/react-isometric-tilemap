import React, { FunctionComponent, useRef, useState, useContext } from 'react';
import { Position } from '../../..';
import { TilemapContext } from '../context/TilemapContext';
import Row from './Row/Row';

const initialMapPosition: Position = {
    x: 0,
    y: 0,
};

const Table: FunctionComponent<{}> = () => {
    const { state } = useContext(TilemapContext);

    // Refs

    const containerRef = useRef<HTMLDivElement>(null);

    // State

    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [mousePosition, setMousePosition] = useState<Position | null>(null);
    const [mapPosition, setMapPosition] = useState<Position>(initialMapPosition);

    // Actions

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
        const container = containerRef.current;
        if (isDragging && mousePosition != null && container) {
            const dragSpeedRatio = state.dragSpeedRatio;
            const containerWidth = container.clientWidth;
            const conteinerHeight = container.clientHeight;

            const relativeMovementX = (event.pageX - mousePosition.x) / (containerWidth * dragSpeedRatio);
            const relativeMovementY = (event.pageY - mousePosition.y) / (conteinerHeight * dragSpeedRatio);

            const nextMapPosition: Position = {
                x: mapPosition.x + relativeMovementX,
                y: mapPosition.y + relativeMovementY,
            };
            setMapPosition(nextMapPosition);
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    // Computed fields

    const tableStyle: React.CSSProperties = {
        left: `${mapPosition.x}px`,
        top: `${mapPosition.y}px`,
    };

    const rows: JSX.Element[] = [];
    for (let i = 0; i < state.rowSize; i++) {
        rows.push(
            <Row key={i} rowIndex={i} />
        );
    }

    return (
        <div className="tilemap"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            ref={containerRef}>
            <table style={tableStyle}>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
