import React, { Component } from 'react';
import '../styles/App.css';

// Components
import MainApp from './Mainapp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainApp />
      </div>
    );
  }
}

export default App;
