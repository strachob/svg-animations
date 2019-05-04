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
      selectedObjectItem: 0
    };

    this.selectItemFunc = this.selectItemFunc.bind(this);
  }

  selectItemFunc(obj){
    this.setState({selectedObjectItem: obj});
    console.log(objects[this.state.selectedObjectItem]);
  }

  render(){
    return (
      <div className="App">
      <ObjectsPane objects={objects} selectItem={this.selectItemFunc}/>
      <ObjectProps selectedItem={objects[this.state.selectedObjectItem]} />
      <AnimationPane image={logo}/>
      </div>
    );
  }
}

export default App;


const objects = [
  {name: "Figure 1"},
  {name: "Figure 2"},
  {name: "Figure 3"},
  ];