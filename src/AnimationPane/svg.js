import React from 'react';
// import Circle from './circle';
// import Square from './square';
import { Circle, Square, Polygon } from "./svgfigures"

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
      <svg viewBox="0 0 120 87" preserveAspectRatio="xMidYMid meet">
      {this.generateSvg()}
    </svg>
    )
  }
}