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
                fillOpacity={props.object.opacity}
                stroke={props.object.strokeColor}
                strokeWidth="1"
                strokeOpacity={props.object.opacity}
                strokeDasharray="">
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
            fillOpacity={props.object.opacity}
            stroke={props.object.strokeColor}
            strokeWidth="1"
            strokeOpacity={props.object.opacity}
            strokeDasharray="">
            {getAnimation(props.object)}
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

function generateMovedPolygonPoints(cx,cy,r,n,sDeg) {
    var res='';
    cx=parseInt(cx,10); cy=parseInt(cy,10); r=parseInt(r,10); n=parseInt(n,10); sDeg=parseInt(sDeg,10);
    if(!isNaN(cx) && !isNaN(cy) && !isNaN(r) && !isNaN(n) && !isNaN(sDeg) && n>2 && r>0) {
      var centerAng = 2*Math.PI / n;
      var startAng = toRadians(sDeg);
      var maxVx = 0.0;
      var ang,vx,vy;
      for(var i=0 ; i<n ; i++) {
        ang = startAng + (i*centerAng);
        vx = (cx + r*Math.cos(ang)).toFixed(2);
        if (vx > maxVx) {
            maxVx = vx;
        }
      }

      var vertex = [];
      for(i=0 ; i<n ; i++) {
        ang = startAng + (i*centerAng);
        vx = (cx + r*Math.cos(ang)).toFixed(2);
        var move = 100-(maxVx-vx);
        vx = move;
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
    var duration = object.animation.duration +"s";

    var p;
    if (object.type === "Circle") {
        p = "cx";
    }
    if (object.type === "Square") {
        p="x";
    }
    if (object.type === "Polygon") {
        p="points";
        if (object.animation.name === "Left to Right") {
            return(
                <animate attributeName="points" dur={duration} fill="freeze" repeatCount="indefinite"
                  from={generatePolygonPoints(object.x, object.y, object.size, object.sides, object.startAngle)}
                  to={generateMovedPolygonPoints(object.x, object.y, object.size, object.sides, object.startAngle)} />
            );
        }
    }

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
        // var r=Math.abs(object.x-50);
        var r = object.animation.r;
        var rr = 2*r;

        var path = "M 0,0 m -"+ r +", 0 a " + r + "," +r + " 0 1,0 " + rr + ",0 a " + r + "," +r + " 0 1,0 -" + rr + ",0";
        return(
            <animateMotion
            dur={duration}
            begin="0s"
            fill="freeze"
            repeatCount="indefinite"
            path={path} />
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