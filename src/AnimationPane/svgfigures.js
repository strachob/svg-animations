import React from 'react';
import './AnimationPane.css';
import {generatePolygonPoints} from './PolygonHelpers';
import Animation from './Animation';

function Circle(props){
    return (
        <circle id={props.object.name}
                cx={props.object.x}
                cy={props.object.y}
                r={props.object.diameter}
                opacity={props.object.opacity}
                fill={props.object.fillColor}
                fillOpacity={props.object.opacity}
                stroke={props.object.strokeColor}
                strokeWidth="1"
                strokeOpacity={props.object.opacity}
                strokeDasharray="">
                <Animation object={props.object} />
        </circle>
      );
}

function Square(props){
    return (
        <rect
            id={props.object.name}
            x={props.object.x}
            y={props.object.y}
            width={props.object.size}
            height={props.object.size}
            opacity={props.object.opacity}
            fill={props.object.fillColor}
            fillOpacity={props.object.opacity}
            stroke={props.object.strokeColor}
            strokeWidth="1"
            strokeOpacity={props.object.opacity}
            strokeDasharray="">
            <Animation object={props.object} />
        </rect>
      );
}

function Polygon(props){
    var points = generatePolygonPoints(props.object.x, props.object.y, props.object.size, props.object.sides, props.object.startAngle);

    return (
        <polygon
            id={props.object.name}
            points={points}
            opacity={props.object.opacity}
            fill={props.object.fillColor}
            fillOpacity={props.object.opacity}
            stroke={props.object.strokeColor}
            strokeWidth="1"
            strokeOpacity={props.object.opacity}
            strokeDasharray="">
            <Animation object={props.object} />
        </polygon>
    );
}

export { Circle, Square, Polygon }