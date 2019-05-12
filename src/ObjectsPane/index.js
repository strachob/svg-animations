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
  }

  deleteItemFunc = (e,obj) => {
 
    let objects = this.state.objects
    let newSelectedIndex = obj;
    if(obj === this.state.objects.length){
      newSelectedIndex = obj-2;
    }
    this.props.selectItem(e,newSelectedIndex);
    this.state.objects.splice(obj, 1);

    this.setState({objects});
  }

  onClickAdd = (event) => {
    let newObjects = this.state.objects;
    let num = newObjects.length+1;
    newObjects.push({name: "Figure "+ num});
    this.setState({ objects : newObjects});
    this.props.selectItem(event, newObjects.length-1);
    event.preventDefault();
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
      <ObjectList 
          objects={this.state.objects} 
          selectItem={this.props.selectItem} 
          deleteItem={this.deleteItemFunc} />
    </div>
    );
  }
  }




  export default ObjectsPane;