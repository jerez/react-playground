import React, { Component } from 'react';
import './App.css';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main className="app-main">
          this is the main section
        </main>
      </div>
    );
  }
}

export default App;
