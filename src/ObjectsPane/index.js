import React from 'react';
import ObjectList from "./ObjectList";
import './ObjectPane.css';

class ObjectsPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      objects: props.objects,
      selected: undefined 
    };

    this.trasnportObjectToParent = this.trasnportObjectToParent.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onClickAdd(event) {
    let newObjects = this.state.objects;
    let num = newObjects.length+1;
    newObjects.push({name: "Figure "+ num});
    this.setState({ objects : newObjects});
    this.props.selectItem(newObjects.length-1);
    event.preventDefault();
  }

  trasnportObjectToParent(obj){
    this.props.selectItem(obj);
  }

    render() {
      return( 
      <div className="object-pane pane">
        <div className="object-pane-header">
          <h4 className="display-4 figure-header">Select or Add a figure</h4>
          <button onClick={this.onClickAdd} 
                  className="btn btn-primary new-obj-btn" 
                  type="button">
                   <i className="fa fa-plus"></i>
              Add new figure
             
          </button>
        </div>
        <ObjectList objects={this.state.objects} selectItem={this.trasnportObjectToParent} />
      </div>
      );
    }
  }




  export default ObjectsPane;