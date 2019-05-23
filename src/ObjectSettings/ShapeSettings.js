import React from 'react';
import './ObjectProps.css';

function CircleSettings(props) {
    return(
        <div>
            <p><strong>Circle diameter:</strong></p>
            <input type="range" className="slider" onChange={(e) => props.diameterChange(e)} value={props.selectedItem.diameter} min="1"/>
            <p>Diameter set to: {props.selectedItem.diameter}</p>
        </div>
    );
}

function SquareSettings(props) {
    return(
        <div>
            <p><strong>Square size:</strong></p>
            <input type="range" className="slider" onChange={(e) => props.sizeChange(e)} value={props.selectedItem.size} min="1"/>
            <p>Square size set to: {props.selectedItem.size}</p>
        </div>
    );
}

function PolygonSettings(props) {
    return(
        <div>
            <p><strong>Polygon sie:</strong></p>
            <input type="range" className="slider" onChange={(e) => props.functions.sizeChange(e)} value={props.selectedItem.size} min="1"/>
            <p>Polygon size set to: {props.selectedItem.size}</p>

            <p><strong>Sides:</strong></p>
            <input type="range" className="slider" onChange={(e) => props.functions.sidesChange(e)} value={props.selectedItem.sides} min="3" max="10"/>
            <p>Number of sides set to: {props.selectedItem.sides}</p>

            <p><strong>Start angle:</strong></p>
            <input type="range" className="slider" onChange={(e) => props.functions.startAngleChange(e)} value={props.selectedItem.startAngle} max="120"/>
            <p>Start angle set to: {props.selectedItem.startAngle}</p>
        </div>
    );
}

export { CircleSettings, SquareSettings, PolygonSettings }