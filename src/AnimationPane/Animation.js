import React from 'react';
import {generatePolygonPoints, generateMovedPolygonPoints} from './PolygonFunctions';

function Animation(props)
{
    const object = props.object;
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
        return "";
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

export default Animation

