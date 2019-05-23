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
      <div className="object-props pane">
        <div className="object-props-header border-bottom border-light">
          <h1 className="display-4 figure-header">Modify a figure</h1>
          <h2 className="middle">You are currently modifing {this.props.selectedItem.name}</h2>
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

export default ObjectSettings;