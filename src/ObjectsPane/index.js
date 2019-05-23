import React from 'react';
import ObjectList from "./ObjectList";
import './ObjectPane.css';

function ObjectsPane(props){
  return(
    <div className="object-pane pane border-right border-light my-auto">
      <div className="pane-header border-bottom border-light">
        <h1 className="figure-header">Select or Add a figure</h1>
        <button onClick={(e) => props.addItem()}
                className="btn btn-primary"
                type="button">
                  <i className="fa fa-plus"></i>
            Add new figure
        </button>
      </div>
      <ObjectList
          objects={props.objects}
          selectItem={props.selectItem}
          deleteItem={props.deleteItem} />
    </div>
  );
}

export default ObjectsPane;