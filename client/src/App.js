import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarTop from "./NavbarTop";
import Map from "./Map";
import StateList from "./StateList";
import About from "./About";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavbarTop />
          <Switch>
            <Route exact path="/" component={Map} />
            <Route exact path="/state" component={StateList} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
