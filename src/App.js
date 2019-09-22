import React, { Component } from 'react';
import './App.css';
import MusicComponent from './Components/MusicComponent/MusicComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MusicComponent audiopath="/sounds/a3.mp3"></MusicComponent>
      </div>
    );
  }
}

export default App;
