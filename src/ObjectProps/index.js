import React from 'react';
import './ObjectProps.css';
import { CircleSettings, SquareSettings, PolygonSettings } from './ShapeSettings';
import {CompactPicker} from 'react-color';

class ObjectProps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.selectedItem.name,
      displayFillPicker: false,
      displayStrokePicker: false,
      defaultColor: "#999"
    }
  }

  onFillPickerShow = () => {
    this.setState({displayFillPicker: true});
  };

  onStrokePickerShow = () => {
    this.setState({displayStrokePicker: true});
  };

  onFillPickerChanged = color => {
    this.setState({
      displayFillPicker: false
    })
    this.props.functions.generalFunctions.fillColorChange(color.hex);
  };

  onStrokePickerChanged = color => {
    this.setState({
      displayStrokePicker: false
    })
    this.props.functions.generalFunctions.strokeColorChange(color.hex);
  };

  renderBasedOnType = () => {
    switch(this.props.selectedItem.type){
      case "Circle":
        return(
          <CircleSettings
            diameterChange={this.props.functions.circleFunctions.diameterChange}
            selectedItem={this.props.selectedItem}/>
        );
      case "Square":
        return(
          <SquareSettings
            sizeChange={this.props.functions.squareFunctions.sizeChange}
            selectedItem={this.props.selectedItem} />
        );
      default:
        return(
          <PolygonSettings
            functions={this.props.functions.polygonFunctions}
            selectedItem={this.props.selectedItem} />
        );
    }
  };


  render() {
    return(
      <div className="scrollable-config">
        <div className="object-prop-control-no-marg">
          <p><strong>Figure name:</strong>
          <div className="input-group mb-3 object-prop-control">
            <input typeName="text" className="form-control"
                    placeholder={this.props.selectedItem.name}
                    aria-label="Recipient's username" aria-describedby="basic-addon2"
                    onKeyUp={(e) => this.props.functions.generalFunctions.nameChange(e, "")}
                    onBlur={(e) => {
                      this.setState({name: e.target.value});
                      e.target.value = "";
                    }} />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={(e) => this.props.functions.generalFunctions.nameChange(e, this.state.name)}>Save</button>
            </div>
          </div>
          </p>
        </div>

        <p><strong>Figure type:</strong>
        <div className="form-group object-prop-control">
          <select className="form-control object-prop-control"  value={this.props.selectedItem.type} onChange={(e) => this.props.functions.generalFunctions.typeChange(e)}>
            <option>Circle</option>
            <option>Square</option>
            <option>Polygon</option>
          </select>
        </div>
        </p>

        <p><strong>X position:</strong></p>
        <input type="range" className="slider" onChange={(e) => this.props.functions.generalFunctions.xChange(e)} value={this.props.selectedItem.x}/>
        <p>X set to: {this.props.selectedItem.x}</p>

        <p><strong>Y position:</strong></p>
        <input type="range" className="slider" onChange={(e) => this.props.functions.generalFunctions.yChange(e)} value={this.props.selectedItem.y}/>
        <p>Y set to: {this.props.selectedItem.y}</p>

        <p><strong>Opacity:</strong></p>
        <input type="range" className="slider" onChange={(e) => this.props.functions.generalFunctions.opacityChange(e)} value={this.props.selectedItem.opacity} max="1" step="0.01"/>
        <p>Opacity set to: {this.props.selectedItem.opacity}</p>

        <p><strong>Fill color:</strong>
        <div className="object-prop-control">
          <div className="input-group mb-3">
            <input type="text"
                  onClick={() => this.onFillPickerShow()}
                  value={this.props.selectedItem.fillColor}
                  className="form-control"
                  style={{backgroundColor: this.props.selectedItem.fillColor}}/>
            {this.state.displayFillPicker && <CompactPicker onChange={this.onFillPickerChanged}/>}
          </div>
        </div>
        </p>

        <p><strong>Stroke color:</strong>
        <div className="object-prop-control">
          <div className="input-group mb-3">
            <input type="text"
                  onClick={() => this.onStrokePickerShow()}
                  value={this.props.selectedItem.strokeColor}
                  className="form-control"
                  style={{backgroundColor: this.props.selectedItem.strokeColor}}/>
            {this.state.displayStrokePicker && <CompactPicker onChange={this.onStrokePickerChanged}/>}
          </div>
        </div>
        </p>
        {this.renderBasedOnType()}

        </div>
    );
  }
}


class ObjectSettings extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showProps: true
    }
  }

  setToProps = () => {
    this.setState({
      showProps: true
    })
  };

  setToAnimations = () => {
    this.setState({
      showProps: false
    })
  };

  render(){
   return(
    <div className="object-props pane">
      <div className="object-pane-header">
        <h1 className="display-4 figure-header">Modify a figure</h1>
        <h2>You are currently modifing {this.props.selectedItem.name}</h2>
        <div className="row">
            <button className="btn btn-primary" onClick={() => this.setToProps()}>Change Properties</button>
            <button className="btn btn-primary" onClick={() => this.setToAnimations()}>Change Animations</button>
        </div>
      </div>
      {this.state.showProps ? (<ObjectProps {...this.props} />) : (<ObjectAnimations {...this.props} />)}
    </div>
   );
  }
}


function ObjectAnimations(props){
  return (
    <div className="scrollable-config">
      <p><strong>Animation Preset:</strong>
        <div className="form-group object-prop-control">
          <select className="form-control object-prop-control" value={props.selectedItem.animation.name} onChange={(e) => props.functions.animationChange(e)}>
            <option>Still</option>
            <option>Flicker</option>
            <option>Circle</option>
            <option>Left to Right</option>
          </select>
        </div>
        </p>
        <p><strong>Animation duration:</strong></p>
        <input type="range" className="slider" max="20" step="0.5" onChange={(e) => props.functions.animationDuration(e)} value={props.selectedItem.animation.duration}/>
        <p>Duration set to: {props.selectedItem.animation.duration}</p>

        {props.selectedItem.animation.name === "Circle" ? 
        (
          <React.Fragment>
            <p><strong>Circle diameter:</strong></p>
            <input type="range" className="slider" max="20" step="0.5" onChange={(e) => props.functions.circleAnimationR(e)} value={props.selectedItem.animation.r}/>
            <p>Diameter set to: {props.selectedItem.animation.r}</p>
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}
    </div>
  );
}


  export default ObjectSettings;