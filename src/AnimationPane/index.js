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
      return <div className="Animation-Pane Pane">
        <h1>This is animation pane</h1>
        <img src={this.state.svg} className="Animation" alt="svg animation" />
      </div>
    }
  }

  export default AnimationPane;