import React from 'react';
import './App.css';
import ObjectsPane from './ObjectsPane';
import ObjectSettings from './ObjectProps';
import AnimationPane from './AnimationPane';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedObjectItem: 0,
      objs:  [
      {name: "Figure 1", x: 75, y: 35, diameter: 5, size: 5,
        opacity: 1, type: "Circle", fillColor: "#f1f111", strokeColor: "#6b7d1c",
        animation: {name: "Left to Right", duration: "5", r: "4"}},

      {name: "Figure 2", x: 45, y: 45, size: 10,
        opacity: 1, type: "Square", fillColor: "#f1f111", strokeColor: "#6b7d1c",
        animation: {name: "Left to Right", duration: "5", r: "4"}},

      {name: "Figure 3", x: 35, y: 75, diameter: 5, size: 5, sides: 3, startAngle: 90,
        opacity: 1, type: "Polygon", fillColor: "#f1f111", strokeColor: "#6b7d1c",
        animation: {name: "Left to Right", duration: "5", r: "4"}}
    ]
    };
  }

  addItemFunc = (e) => {
    let newObjects = [...this.state.objs];
    let num = newObjects.length+1;
    newObjects.push({
      name: "Figure "+ num,
      x: 50,
      y: 50,
      type: "Circle",
      diameter: 5,
      opacity: 1,
      fillColor: "#f1f111",
      strokeColor: "#6b7d1c",
      animation: {
        name: "Still",
        duration: "5",
        r: "4"
      }
    });
    this.setState({
      objs : newObjects,
      selectedObjectItem: newObjects.length-1
    });
  }

  selectItemFunc = (e,obj) => {
    this.setState({selectedObjectItem: obj});
  }

  deleteItemFunc = (e,obj) => {
    var newSelectedIndex = obj;
    if(obj === this.state.objs.length-1) {
      newSelectedIndex = obj - 1;
    }
    const objs = [...this.state.objs];
    objs.splice(obj, 1);
    this.setState({
      objs: objs,
      selectedObjectItem: newSelectedIndex
    });

    e.stopPropagation();
  }

  changeName = (e,name) => {
    let objects = [...this.state.objs];
    if(name !== ""){
      objects[this.state.selectedObjectItem].name = name;
    }
    else if(e.keyCode === 13){
      objects[this.state.selectedObjectItem].name = e.target.value;
      e.target.value = "";

    }
    this.setState({objs: objects});
  }

  changeX = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].x = e.target.value;
    this.setState({objs: objects});
  }

  changeY = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].y = e.target.value;
    this.setState({objs: objects});
  }

  changeOpacity = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].opacity = e.target.value;
    this.setState({objs: objects});
  }

  changeType = (e) => {
    let objects = [...this.state.objs];
    if(e.target.value === "Polygon" && objects[this.state.selectedObjectItem].sides === undefined){
      objects[this.state.selectedObjectItem].sides = 3;
      objects[this.state.selectedObjectItem].startAngle = 90;
    }
    objects[this.state.selectedObjectItem].type = e.target.value;
    this.setState({objs: objects});
  }

  changefillColor = color => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].fillColor = color;
    this.setState({
      objs: objects
    });
  }

  changeStrokeColor = color => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].strokeColor = color;
    this.setState({
      objs: objects
    });
  }

  changeDiameter = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].diameter = e.target.value;
    this.setState({objs: objects});
  }

  changeSize = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].size = e.target.value;
    this.setState({objs: objects});
  }

  changeSides = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].sides = e.target.value;
    this.setState({objs: objects});
  }

  changeStartAngle = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].startAngle = e.target.value;
    this.setState({objs: objects});
  }

  changeAnimation = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].animation.name = e.target.value;
    this.setState({objs: objects});
  }

  changeAnimationDuration = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].animation.duration = e.target.value;
    this.setState({objs: objects});
  }

  changeAnimationR = (e) => {
    let objects = [...this.state.objs];
    objects[this.state.selectedObjectItem].animation.r = e.target.value;
    this.setState({objs: objects});
  }

  functionHolder = {
    generalFunctions: {
      nameChange: this.changeName,
      xChange:this.changeX,
      yChange:this.changeY,
      opacityChange:this.changeOpacity,
      typeChange:this.changeType,
      fillColorChange:this.changefillColor,
      strokeColorChange:this.changeStrokeColor
    },
    circleFunctions: {
      diameterChange: this.changeDiameter
    },
    squareFunctions: {
      sizeChange: this.changeSize
    },
    polygonFunctions: {
      sizeChange: this.changeSize,
      sidesChange: this.changeSides,
      startAngleChange: this.changeStartAngle,
    },
    animationChange: this.changeAnimation,
    animationDuration: this.changeAnimationDuration,
    circleAnimationR: this.changeAnimationR
  };

  render(){
    return (
      <div className="app">
      <ObjectsPane
        objects={this.state.objs}
        addItem={this.addItemFunc}
        selectItem={this.selectItemFunc}
        deleteItem={this.deleteItemFunc} />

      { (this.state.objs.length !== 0) ? (
        <ObjectSettings
        selectedItem={this.state.objs[this.state.selectedObjectItem]}
        functions={this.functionHolder}
         />
      ) : (
        <div className="object-props pane">
          <div className="object-pane-header">
          </div>
        </div>
      )}

      <AnimationPane figures={this.state.objs}/>
      <div className="footer text-muted font-italic"><strong>SVG Madness</strong> - Michał Chęciński and Bartosz Strachowski</div>
      </div>
    );
  }
}

export default App;