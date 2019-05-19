import React from 'react';
import './AnimationPane.css';
import Svg from './svg';

class AnimationPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = { figures: props.figures };
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
        <div className="animation" >
        <Svg figures={this.props.figures} />
        </div>
      </div>
    }
  }

  export default AnimationPane;