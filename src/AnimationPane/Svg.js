import React from 'react';
import { Circle, Square, Polygon } from "./SvgFigures"

export default class Svg extends React.Component {
    constructor(props) {
        super(props);

        this.state = { figures: props.figures };
      }

      componentDidUpdate() {
        this.render();
      }

    generateSvg()
    {
        var svgElements =[];
        this.props.figures.forEach(element => {
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

  render() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
      {this.generateSvg()}
    </svg>
    )
  }
}