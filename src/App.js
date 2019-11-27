import React from "react";
import "./assets/css/minty.css";
import "./App.css";
import GlassesBrowser from "./components/GlassesBrowser";
import Manager from "./components/Manager";
import NavBar from "./components/NavBar";
import GLASSES from "./data";
import Details from "./components/Details";

import { Route, BrowserRouter as Router } from 'react-router-dom';

// We need to take care of routing and rendering GlassesBrowser, Manager, and Details
// With appropriate client-side routes / URLs

class App extends React.Component {

  state = {
    glasses: []
  };

  componentDidMount() {
    this.setState({ glasses: GLASSES });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route component={ NavBar } />
          <Route exact path='/glasses' render={ (routerProps) => < GlassesBrowser {...routerProps} glasses={ this.state.glasses } /> } />
          <Route exact path='/manager' component={ Manager } />
          {/* I believe the below path renders before the fetch completes, glasses is empty on first render, filled on second render */}
          <Route exact path='/glasses/:id' render={ (routerProps) => < Details {...routerProps} glasses={ this.state.glasses } /> } />
        </Router>
      </div>
    );
  }
}

export default App;
