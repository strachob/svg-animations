
function getObjectsFromSvgString(svgString)
{
    var convert = require('xml-js');
    var result2 = convert.xml2json(svgString, {compact: false, spaces: 4});
    var obj = JSON.parse(result2);
    var jsonElems = obj.elements[0].elements;

    var svgObjects = [];
    jsonElems.forEach(element => {
        var animation = getAnimation(element);
        var attributes = element.attributes;
        var svgObject;
        if (element.name === "rect") {
            svgObject = {name: attributes.id, x: attributes.x, y: attributes.y, size: attributes.width,
            opacity: attributes.opacity, type: "Square", fillColor: attributes.fill, strokeColor: attributes.stroke,
            animation: animation};
            svgObjects.push(svgObject);
        }

        if (element.name === "circle") {
            svgObject = {name: attributes.id, cx: attributes.cx, cy: attributes.cy, diameter: attributes.r,
            opacity: attributes.opacity, type: "Circle", fillColor: attributes.fill, strokeColor: attributes.stroke,
            animation: animation};
            svgObjects.push(svgObject);
        }
        if (element.name === "polygon") {
            var points = attributes.points.split(" ");
            svgObject = {name: attributes.id, x: parseInt(points[0].split(",")[0]), y: parseInt(points[0].split(",")[1]), diameter: 5, size: 5, sides: points.length, startAngle: 90,
            opacity: attributes.opacity, type: "Polygon", fillColor: attributes.fill, strokeColor: attributes.stroke,
            animation: animation};
            svgObjects.push(svgObject);
        }
    });
    return svgObjects;
}

function getAnimation(element) {
    var animationName = "Still";
    if (element.hasOwnProperty("elements") === false ||
        element.elements[0].hasOwnProperty("attributes") === false ) {
        return(
            {name: "Still", duration: "5", r: "5"}
        );
    }
    var animation = element.elements[0];
    var attributes = animation.attributes;
    var r = 5;
    if (animation.name === "animate") {
        if (attributes.attributeName === "points" ||
        attributes.attributeName === "x" ||
        attributes.attributeName === "cx") {
            animationName = "Left to Right";
        }
        if (attributes.attributeName === "opacity") {
            animationName = "Flicker";
        }
    }
    if (animation.name === "animateMotion") {
        animationName = "Circle";
        var path = attributes.path;
        var points = path.split(" ");
        r = points[3].split(",")[0].replace("-", "");
    }
    return(
        {name: animationName, duration: attributes.dur.replace("s", ""), r: r}
    );
}

export default getObjectsFromSvgString;