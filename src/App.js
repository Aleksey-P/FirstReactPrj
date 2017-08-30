import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MainPage} from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Choose your food!</h2>
        </div>
        <MainPage/>
      </div>
    );
  }
}

export default App;
