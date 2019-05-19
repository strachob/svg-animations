import React from 'react';

export default class Circle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.object.name,
            x: props.object.x,
            y: props.object.y,
            opacity: props.object.opacity,
            fillColor: props.object.fillColor,
            strokeColor: props.object.strokeColor,
            radius: props.object.size
        };
      }

      componentDidUpdate() {
        this.render();
      }

    render() {
          return (
            <circle id={this.state.name} cx={this.state.x} cy={this.state.y} r={this.state.radius} opacity={this.state.opacity} fill={this.state.fillColor} fill-opacity={this.state.opacity} stroke={this.state.strokeColor} stroke-width="1" stroke-opacity={this.state.opacity} stroke-dasharray="">
            </circle>
          )
    }
}