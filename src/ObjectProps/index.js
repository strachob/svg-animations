import React from 'react';
import './ObjectProps.css';

class ObjectProps extends React.Component {
  // constructor(props){
  //   super(props);
  // }

    render() {
      return <div className="Object-Props Pane">
        <h1>This is object properties pane</h1>
        <h2>You are currently modifing {this.props.selectedItem.name}</h2>
      </div>
    }
  }

  export default ObjectProps;