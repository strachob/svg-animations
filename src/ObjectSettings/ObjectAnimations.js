import React from 'react';
import './ObjectProps.css';

function ObjectAnimations(props){
    return (
        <div className="scrollable-config pl-5">
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

export default ObjectAnimations;

  