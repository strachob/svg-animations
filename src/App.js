import React from 'react';
import logo from './logo.svg';
import './App.css';
import ObjectsPane from './ObjectsPane';
import ObjectProps from './ObjectProps';
import AnimationPane from './AnimationPane';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedObjectItem: 0,
      objs:  [
      {name: "Figure 1", x: 75, opacity: 1, type: "circle", fillColor: "#f1f111", strokeColor: "#6b7d1c"},
      {name: "Figure 2", x: 45, opacity: 1, type: "circle", fillColor: "#f1f111", strokeColor: "#6b7d1c"},
      {name: "Figure 3", x: 35, opacity: 1, type: "circle", fillColor: "#f1f111", strokeColor: "#6b7d1c"}
    ]
    };
  }

  addItemFunc = (e) => {
    let newObjects = this.state.objs;
    let num = newObjects.length+1;
    newObjects.push({name: "Figure "+ num});
    this.setState({ objs : newObjects});
    this.selectItemFunc(e, newObjects.length-1);
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

  render(){
    return (
      <div className="app">
      <ObjectsPane 
        objects={this.state.objs} 
        addItem={this.addItemFunc}
        selectItem={this.selectItemFunc}
        deleteItem={this.deleteItemFunc} />

      { (this.state.objs.length !== 0) ? (
        <ObjectProps 
        selectedItem={this.state.objs[this.state.selectedObjectItem]} 
        nameChange={this.changeName}
        xChange={this.changeX}
        yChange={this.changeY}
        opacityChange={this.changeOpacity}
        typeChange={this.changeType}
        fillColorChange={this.changefillColor}
        strokeColorChange={this.changeStrokeColor}
         />
      ) : (
        <div className="object-props pane">
          <div className="object-pane-header">
          </div>
        </div> 
      )}
    
      <AnimationPane image={logo}/>
      <div className="footer text-muted font-italic"><strong>SVG Madness</strong> - Michał Chęciński and Bartosz Strachowski</div>
      </div>
    );
  }
}

export default App;