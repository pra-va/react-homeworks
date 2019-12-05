import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './Admin/AdminContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Admin />
      </div>
    );
  }
}

export default App;
