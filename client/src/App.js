import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarTop from "./components/NavbarTop";
import MapContainerContainer from "./containers/MapContainerContainer";
import ListOfSheltersContainer from "./containers/ListOfSheltersContainer";
import About from "./components/About";
import Create from "./components/Create";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.loadShelters();
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavbarTop />
          <div className="container containerHeight">
            <Switch>
              <Route exact path="/" component={MapContainerContainer} />
              <Route exact path="/state" component={ListOfSheltersContainer} />
              <Route exact path="/about" component={About} />
              <Route exact path="/create" component={Create} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
