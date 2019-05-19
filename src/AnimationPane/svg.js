import React from 'react';
import Circle from './circle';
import Square from './square';

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
        this.state.figures.forEach(element => {
            if (element.type === 'circle') {
                svgElements.push(<Circle object={element} />);
            }
            if (element.type === 'square') {
                svgElements.push(<Square object={element} />);
            }
        });

        return svgElements;
    }

  render() {
    return (
      <svg viewBox="0 0 120 100" preserveAspectRatio="xMidYMid meet">
        {this.generateSvg()}
      </svg>
    )
  }
}