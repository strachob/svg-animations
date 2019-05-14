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
      objs:  [{name: "Figure 1", x: 75},
      {name: "Figure 2", x: 45},
      {name: "Figure 3", x: 35}]
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
    if(name !== ""){
      this.state.objs[this.state.selectedObjectItem].name = name;
    }
    else if(e.keyCode == 13){
      this.state.objs[this.state.selectedObjectItem].name = e.target.value;
      
    }
    this.setState({objs: this.state.objs});
  }

  changeX = (e) => {
    this.state.objs[this.state.selectedObjectItem].x = e.target.value;
    this.setState({objs: this.state.objs});
  }

  changeY = (e) => {
    this.state.objs[this.state.selectedObjectItem].y = e.target.value;
    this.setState({objs: this.state.objs});
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
        yChange={this.changeY} />
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