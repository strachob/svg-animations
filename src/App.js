import React from 'react';
import logo from './logo.svg';
import './App.css';
import ObjectsPane from './ObjectsPane';
import ObjectProps from './ObjectProps';
import AnimationPane from './AnimationPane';

function App() {
  return (
    <div className="App">
    <ObjectsPane/>
    <ObjectProps/>
    <AnimationPane image={logo}/>
    </div>
  );
}

export default App;
