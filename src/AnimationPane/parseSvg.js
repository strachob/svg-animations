
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
            svgObject = {name: attributes.id, cx: attributes.x, cy: attributes.y, r: attributes.r,
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
    console.log(svgObjects);
    return svgObjects;
}

function getAnimation(element) {
    return(
        {name: "Still", duration: "0"}
    );
}

export default getObjectsFromSvgString;