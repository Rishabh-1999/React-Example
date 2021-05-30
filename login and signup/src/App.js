import React from "react";

import "./style-github.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Logined from "./Routing/Logined";
import LoginIn from "./Routing/LoginIn";

class App extends React.Component {
  state = {
    islogin: false,
  };

  componentDidMount(e) {
    var sessionname = sessionStorage.getItem("currentAccount_name");
    var sessionpassword = sessionStorage.getItem("currentAccount_password");
    if (sessionname != undefined && sessionpassword != undefined)
      this.setState({ islogin: true });
    var m = localStorage.getItem("login");
    if (m != null) this.state.tempLogin = JSON.parse(m);
  }

  changevalue = () => {
    this.setState({ islogin: true });
  };

  render() {
    return (
      <div className="container">
        {this.state.islogin ? (
          <Logined />
        ) : (
          <LoginIn changevalue={this.changevalue} />
        )}
      </div>
    );
  }
}

export default App;
