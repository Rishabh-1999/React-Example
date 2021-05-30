import React from "react";

import { Route } from "react-router-dom";

import "./App.css";
import "./style-github.css";
import "bootstrap/dist/css/bootstrap.min.css";

import User from "./Routing/User";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Route path="/:id" component={User} exact />
      </div>
    );
  }
}

export default App;
