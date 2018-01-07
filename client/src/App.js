import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarTop from "./components/NavbarTop";
import MapContainer from "./components/MapContainer";
import ListOfSheltersContainer from "./containers/ListOfSheltersContainer";
import About from "./components/About";
import CreateShelterContainer from "./containers/CreateShelterContainer";

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
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={MapContainer} />
              <Route exact path="/state" component={ListOfSheltersContainer} />
              <Route exact path="/about" component={About} />
              <Route exact path="/create" component={CreateShelterContainer} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
