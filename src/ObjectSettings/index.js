import React from 'react';
import './ObjectProps.css';
import ObjectProps from './ObjectProps';
import ObjectAnimations from './ObjectAnimations';

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
      <div className="pane my-auto">
        <div className="pane-header border-bottom border-light">
          <h1 className="figure-header">Modify a figure</h1>
          <h4>You are currently modifing</h4>
          <h5 className="font-italic">{this.props.selectedItem.name} </h5>
          <div className="">
              <button className="btn btn-primary" onClick={() => this.setToProps()}>Change Properties</button>
              <button className="btn btn-primary" onClick={() => this.setToAnimations()}>Change Animations</button>
          </div>
        </div>
        {this.state.showProps ? (<ObjectProps {...this.props} />) : (<ObjectAnimations {...this.props} />)}
      </div>
   );
  }
}

export default ObjectSettings;