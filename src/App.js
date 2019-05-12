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
      objs: objects
    };
  }

  selectItemFunc = (e,obj) => {
    if(e.target.innerHTML === "")
    {
      e.preventDefault();
      if(obj === this.state.objs.length)
      // this.setState({selectedObjectItem: obj-1});
    }else{
    this.setState({selectedObjectItem: obj});
    }
  }


  changeName = (e,name) => {
    if(name !== ""){
      objects[this.state.selectedObjectItem].name = name;
    }
    else if(e.keyCode == 13){
      objects[this.state.selectedObjectItem].name = e.target.value;
      
    }
    this.setState({objs: objects});
  }

  changeX = (e) => {
    objects[this.state.selectedObjectItem].x = e.target.value;
    this.setState({objs: objects});
  }

  changeY = (e) => {
    objects[this.state.selectedObjectItem].y = e.target.value;
    this.setState({objs: objects});
  }

  render(){
    return (
      <div className="app">
      <ObjectsPane 
        objects={this.state.objs} 
        selectItem={this.selectItemFunc}/>

      <ObjectProps 
        selectedItem={objects[this.state.selectedObjectItem]} 
        nameChange={this.changeName}
        xChange={this.changeX}
        yChange={this.changeY} />

      <AnimationPane image={logo}/>
      <div className="footer text-muted font-italic"><strong>SVG Madness</strong> - Michał Chęciński and Bartosz Strachowski</div>
      </div>
    );
  }
}

export default App;


const objects = [
  {name: "Figure 1", x: 75},
  {name: "Figure 2", x: 45},
  {name: "Figure 3", x: 35},
  ];