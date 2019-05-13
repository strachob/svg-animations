import React from 'react';
import './ObjectProps.css';

class ObjectProps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.selectedItem.name
    }
  }
  
  render() {
    return( 
    <div className="object-props pane">
      <div className="object-pane-header">
        <h1 className="display-4 figure-header">Modify a figure</h1>
        <h2>You are currently modifing {this.props.selectedItem.name}</h2>
      </div>
      <div className="scrollable-config">
        <div className="name-textline">
          <p><strong>Figure name:</strong>
          <div className="input-group mb-3 ">
            <input typeName="text" className="form-control" 
                    placeholder={this.props.selectedItem.name} 
                    aria-label="Recipient's username" aria-describedby="basic-addon2"
                    onKeyUp={(e) => this.props.nameChange(e, "")}
                    onChange={(e) => this.setState({name: e.target.value})}/>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={(e) => this.props.nameChange(e, this.state.name)}>Save</button>
            </div>
          </div>
          </p>
        </div>

        <p><strong>Figure type:</strong>
        <div className="form-group shape-dropdown">
          <select className="form-control shape-dropdown">
            <option>Circle</option>
            <option>Square</option>
            <option>Polygon</option>
          </select>
        </div>
        </p>

        <p><strong>X position:</strong></p>
        <input type="range" className="slider" onChange={(e) => this.props.xChange(e)} value={this.props.selectedItem.x}/>
        <p>X set to: {this.props.selectedItem.x}</p>

        <p><strong>Y position:</strong></p>
        <input type="range" className="slider" onChange={(e) => this.props.yChange(e)} value={this.props.selectedItem.y}/>
        <p>Y set to: {this.props.selectedItem.y}</p>
        </div>
    </div>
    );
  }
}


  export default ObjectProps;