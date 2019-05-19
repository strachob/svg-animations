import React from 'react';

export default class Square extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.object.name.toLowerCase().replace(' ', '_'),
            x: props.object.x,
            y: props.object.y,
            opacity: props.object.opacity,
            fillColor: props.object.fillColor,
            strokeColor: props.object.strokeColor,
            size: props.object.size
        };
      }

      componentDidUpdate() {
        this.render();
      }

    render() {
          return (
            <rect id={this.state.name} cx={this.state.x} cy={this.state.y} width={this.state.size} height={this.state.size} opacity={this.state.opacity} fill={this.state.fillColor} fill-opacity={this.state.opacity} stroke={this.state.strokeColor} stroke-width="1" stroke-opacity={this.state.opacity} stroke-dasharray="">
            </rect>
          )
    }
}