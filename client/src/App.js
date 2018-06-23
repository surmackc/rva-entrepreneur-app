import React, { Component } from "react";
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Nav />
          <div>
          <Switch>
            <Route exact path="/" component={Home}  />
          </Switch>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">This will be the cornerstone of the .Entrepreneur Family</h1>
            </header>
            <p className="App-intro">
              Stay tuned <code>bykevincharles.com</code> for more.
            </p>
          </div>
          </div>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
