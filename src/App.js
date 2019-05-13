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
    // e.preventDefault();
  }

  selectItemFunc = (e,obj) => {
    // if(e.target.innerHTML === "")
    // {
    //   e.preventDefault();
    //   if(obj === this.state.objs.length)
    //   // this.setState({selectedObjectItem: obj-1});
    // }else{
    this.setState({selectedObjectItem: obj});
    // }
  }

  deleteItemFunc = (e,obj) => {

    // this.setState(state => {
    //   const objects = state.objects.filter((item, j) => obj !== j);

    //   return {
    //     objects,
    //   };
    // });
    const objs = [...this.state.objs];
    
    objs.splice(obj, 1);
    
    this.setState({
      objs: objs
    });
    this.selectItemFunc(e,0);
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
    console.log(this.state.selectedObjectItem);
    return (
      <div className="app">
      <ObjectsPane 
        objects={this.state.objs} 
        addItem={this.addItemFunc}
        selectItem={this.selectItemFunc}
        deleteItem={this.deleteItemFunc} />


      <ObjectProps 
        selectedItem={this.state.objs[this.state.selectedObjectItem]} 
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