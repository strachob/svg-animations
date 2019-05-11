import React from 'react';
import './ObjectProps.css';

class ObjectProps extends React.Component {
  constructor(props){
    super(props);


  }

  // handleChange (event){
  //  // console.log(event.target.value);
  //   console.log(this.props.selectedItem.name);
  //   this.props.selectedItem.name = "dwadawd";
  // }

    render() {
      return <div className="object-props pane">
        <h1>This is object properties pane</h1>
        <h2>You are currently modifing {this.props.selectedItem.name}</h2>
        <p>X position:</p>
        <input type="range" className="slider" onChange={this.props.posChange.bind(this)} value={this.props.selectedItem.x}/>
        <p>Current {this.props.selectedItem.name} X is set to: {this.props.selectedItem.x}</p>
      </div>
    }
  }

  export default ObjectProps;