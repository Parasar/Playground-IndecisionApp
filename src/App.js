import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import IndecisionApp from './Playground/IndecisionApp';
// import Person from './Playground/ClassesPractice';
// import ArrowFunctions from './Playground/ArrowFunctions';
// import ParallaxContainer from './ParallaxContainer.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Hello
        </p>
        */}

        {/*<IndecisionApp />*/}
        <IndecisionApp />

      </div>
    );
  }
}

export default App;
