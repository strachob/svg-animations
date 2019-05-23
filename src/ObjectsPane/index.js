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



  render() {
    return(
      <div className="object-pane pane border-right border-light my-auto">
        <div className="pane-header border-bottom border-light">
          <h1 className="figure-header">Select or Add a figure</h1>
          <button onClick={(e) => this.props.addItem()}
                  className="btn btn-primary"
                  type="button">
                    <i className="fa fa-plus"></i>
              Add new figure
          </button>
        </div>
        <ObjectList
            objects={this.props.objects}
            selectItem={this.props.selectItem}
            deleteItem={this.props.deleteItem} />
      </div>

    );
  }
  }




  export default ObjectsPane;