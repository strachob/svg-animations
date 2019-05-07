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

    this.selectItemFunc = this.selectItemFunc.bind(this);
    this.changeX = this.changeX.bind(this);
  }

  selectItemFunc(obj){
    this.setState({selectedObjectItem: obj});
    console.log(objects[this.state.selectedObjectItem]);
  }

  changeX(e){
    e.preventDefault();
    objects[this.state.selectedObjectItem].x = e.target.value;
    this.setState({objs: objects});
  }

  render(){
    return (
      <div className="App">
      <ObjectsPane objects={objects} selectItem={this.selectItemFunc}/>
      <ObjectProps selectedItem={objects[this.state.selectedObjectItem]} posChange={this.changeX} />
      <AnimationPane image={logo}/>
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