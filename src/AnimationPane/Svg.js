import React from 'react';
import { Circle, Square, Polygon } from "./SvgFigures"

function Svg(props){
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 76.5" preserveAspectRatio="xMidYMid meet">
      {generateSvg(props.figures)}
    </svg>
  );
}

function generateSvg(figures) {
  var svgElements =[];
  figures.forEach(element => {
      if (element.type === "Circle") {
          svgElements.push(<Circle key={element.name.toString()} object={element} />);
      }
      if (element.type === "Square") {
          svgElements.push(<Square key={element.name.toString()} object={element} />);
      }
      if (element.type === "Polygon") {
          svgElements.push(<Polygon key={element.name.toString()} object={element} />);
      }
  });

  return svgElements;
}

export default Svg
