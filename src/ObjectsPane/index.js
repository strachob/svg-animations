import React from 'react';
import ObjectList from "./ObjectList";
import './ObjectPane.css';

class ObjectsPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = { objects: props.objects };
  }

    render() {
      return <div className="Object-Pane Pane">
        <h1>This is components pane</h1>
        <ObjectList/>
      </div>
    }
  }

  export default ObjectsPane;