import React from 'react';
import ObjectList from "./ObjectList";
import './ObjectPane.css';

class ObjectsPane extends React.Component {
    render() {
      return <div className="Object-Pane Pane">
        <h1>This is components pane</h1>
        <ObjectList/>
      </div>
    }
  }

  export default ObjectsPane;