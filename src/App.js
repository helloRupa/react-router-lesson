import React from "react";
import "./assets/css/minty.css";
import "./App.css";
import GlassesBrowser from "./components/GlassesBrowser";
import Manager from "./components/Manager";
import NavBar from "./components/NavBar";
import GLASSES from "./data";
import Details from "./components/Details";

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
        <NavBar />
        <GlassesBrowser glasses={ this.state.glasses } />
        <Manager />
      </div>
    );
  }
}

export default App;
