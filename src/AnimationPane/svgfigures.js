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
                {getAnimation(props.object)}
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
            {getAnimation(props.object)}
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
            {getAnimation(props.object)}
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

function getAnimation(object)
{
    var p;
    if (object.type === "Circle") {
        p = "cx";
    }
    if (object.type === "Square") {
        p="x";
    }
    if (object.type === "Polygon") {
        p="points";
    }

    var duration = object.animation.duration +"s";

    if (object.animation.name === "Still") {
        return;
    }
    else if (object.animation.name === "Flicker") {
        return(
            <animate attributeType="CSS" attributeName="opacity"
            from="1" to="0" dur={duration} repeatCount="indefinite" />
        );
    }
    else if (object.animation.name === "Circle") {
        return(
            <animateMotion
            dur={duration}
            begin="0s"
            fill="freeze"
            repeatCount="indefinite"
            path="M 439.48098,95.969555 L 393.34268,142.46481 L 305.91233,133.41187
            L 324.72376,114.58551 L 308.61525,98.464215 L 276.15845,130.94677
            L 185.25346,123.08136 L 201.15145,107.27643 L 186.46085,92.574165
            L 158.32,120.73735 L 45.386032,112.12042 L 15.000017,131.66667
            L 221.20641,192.48691 L 298.26133,237.01135 L 191.91028,345.62828
            L 152.82697,408.6082 L 41.549634,393.05411 L 21.037984,413.58203
            L 109.25334,470.93369 L 166.38515,558.95725 L 186.8968,538.42933
            L 171.35503,427.06371 L 234.28504,387.94939 L 342.81586,281.51396
            L 387.305,358.63003 L 448.07703,565.00001 L 467.60778,534.58989
            L 458.99769,421.56633 L 487.16033,393.38134 L 473.14247,379.35235
            L 456.6139,395.97492 L 448.79636,303.63439 L 481.25315,271.15184
            L 465.14464,255.03055 L 446.33321,273.8569 L 436.04766,185.1164
            L 482.35108,138.7864 C 501.1942,119.92833 560.62425,61.834815 564.99998,14.999985
            C 515.28999,23.707295 476.1521,61.495405 439.48098,95.969555 z " />
        );

    }
    else if (object.animation.name === "Left to Right") {
        return(
            <animate
           attributeName={p}
           from={object.x}
           to="100"
           dur={duration}
           begin="0s"
           repeatCount="indefinite"
           fill="freeze"/>
        );
    }
}

export { Circle, Square, Polygon }