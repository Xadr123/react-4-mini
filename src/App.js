import React, { Component } from "react";
import routes from './routes'
import Nav from "./Components/Nav/Nav";
import { HashRouter } from 'react-router-dom'
import "./App.css";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
