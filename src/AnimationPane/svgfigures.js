import React from 'react';
import './AnimationPane.css';

function Circle(props){
    return (
        <circle id={props.object.name}
                cx={props.object.x}
                cy={props.object.y}
                r={props.object.diameter}
                opacity={props.object.opacity}
                fill={props.object.fillColor}
                fill-opacity={props.object.opacity}
                stroke={props.object.strokeColor}
                stroke-width="1"
                stroke-opacity={props.object.opacity}
                stroke-dasharray="">
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
            fill-opacity={props.object.opacity}
            stroke={props.object.strokeColor}
            stroke-width="1"
            stroke-opacity={props.object.opacity}
            stroke-dasharray="">
        </rect>
      );
}

function Polygon(props){
    var points = generatePolygonPoints(props.object.x, props.object.y, props.object.size, props.object.sides, props.object.startAngle);
    console.log("points" + points);
    return (
        <polygon
            id={props.object.name}
            points={points}
            opacity={props.object.opacity}
            fill={props.object.fillColor}
            fill-opacity={props.object.opacity}
            stroke={props.object.strokeColor}
            stroke-width="1"
            stroke-opacity={props.object.opacity}
            stroke-dasharray="">
        </polygon>
    );
}

function generatePolygonPoints(cx,cy,r,n,sDeg) {
        var res='';
        cx=parseInt(cx,10); cy=parseInt(cy,10); r=parseInt(r,10); n=parseInt(n,10); sDeg=parseInt(sDeg,10);
        if(!isNaN(cx) && !isNaN(cy) && !isNaN(r) && !isNaN(n) && !isNaN(sDeg) && n>2 && r>0) {
          var centerAng = 2*Math.PI / n;
          var startAng = toRadians(sDeg);
          var vertex = [];
          var ang,vx,vy;
          for(var i=0 ; i<n ; i++) {
            ang = startAng + (i*centerAng);
            vx = (cx + r*Math.cos(ang)).toFixed(2);
            vy = (cy - r*Math.sin(ang)).toFixed(2);
            vertex.push( vx+','+vy );
          }
          res=vertex.join(' ');
        }

        return res;
}

function toRadians(degs) {
    return Math.PI*degs/180;
}

export { Circle, Square, Polygon }