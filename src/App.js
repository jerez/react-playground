import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteContainer from './RouteContainer';
import Header from './Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>  
          <Fragment>
            <Header />
            <RouteContainer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
