import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MainPage} from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Choose your food!</h2>
        <MainPage/>
      </div>
    );
  }
}

export default App;
