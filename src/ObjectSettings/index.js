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
      <div className="pane">
        <div className="pane-header border-bottom border-light">
          <h1 className="figure-header">Modify a figure</h1>
          <h4>You are currently modifing</h4>
          <h4 className="font-italic font-weight-bolder"><span className="rounded" style={{backgroundColor: "#fff000"}}>{this.props.selectedItem.name} </span></h4>
          <div className="btn-group">
              <button type="button" className="btn btn-sm btn-primary " onClick={() => this.setToProps()}>Change Properties</button>
              <button type="button" className="btn btn-sm btn-primary " onClick={() => this.setToAnimations()}>Change Animations</button>
          </div>
        </div>
        {this.state.showProps ? (<ObjectProps {...this.props} />) : (<ObjectAnimations {...this.props} />)}
      </div>
   );
  }
}

export default ObjectSettings;