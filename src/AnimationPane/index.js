import React from 'react';
import './AnimationPane.css';

class AnimationPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = { svg: props.image };
  }

  componentDidUpdate() {
    this.render();
  }

    render() {
      return <div className="animation-pane pane">
      <div>
        <h1 className="display-4 figure-header">See what happends
        <button className="btn btn-primary export"> Export SVG </button></h1>
        
      </div>
        <img src={this.state.svg} className="animation" alt="svg animation" />
      </div>
    }
  }

  export default AnimationPane;