import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Header from './Header';


const SceneContainer = (component) => <div><component/></div>;

const Main = () => <h3>Main</h3>
const First = () => <h3>First</h3>
const Second = () => <h3>Second</h3>


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Fragment>
            <Header />
            <main className="app-main">
              <h2>this is the main section</h2>
              <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/first" component={First}/>
                <Route path="/second" component={Second}/>
              </Switch>
            </main>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
