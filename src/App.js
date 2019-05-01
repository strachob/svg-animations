import React from 'react';
import logo from './logo.svg';
import './App.css';
import ObjectsPane from './ObjectsPane';
import ObjectProps from './ObjectProps';
import AnimationPane from './AnimationPane';

function App() {
  return (
    <div className="App">
    <ObjectsPane objects={objects}/>
    <ObjectProps/>
    <AnimationPane image={logo}/>
    </div>
  );
}

export default App;


const objects = [
  {name: "Figure 1"},
  {name: "Figure 2"},
  {name: "Figure 3"},
  ];