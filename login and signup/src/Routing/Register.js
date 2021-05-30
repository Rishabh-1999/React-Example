import React from "react";
import { Route, Switch } from "react-router-dom";

class Register extends React.Component {
  state = {
    registerusername: "",
    registerpassword: "",
    tempLogin: [],
  };
  registerusernamefun = (e) => {
    const value = e.target.value;
    this.setState({ registerusername: value });
  };
  registerpasswordfun = (e) => {
    const value = e.target.value;
    this.setState({ registerpassword: value });
  };
  registerbtnfun = (e) => {
    var m = localStorage.getItem("login");
    var tempLogin = JSON.parse(m);
    var obj = new Object();
    obj.username = this.state.registerusername;
    obj.password = this.state.registerpassword;
    tempLogin.push(obj);
    var myJSON = JSON.stringify(tempLogin);
    console.log(obj);
    localStorage.setItem("login", myJSON);
    this.props.changevalue();
  };
  componentDidMount(e) {}
  render() {
    return (
      <div className="container">
        <input
          type="text"
          placeholder="Enter UserName"
          onChange={this.registerusernamefun}
        />
        <input
          type="pasword"
          placeholder="Enter Password"
          onChange={this.registerpasswordfun}
        />
        <button onClick={this.registerbtnfun}>Register</button>
      </div>
    );
  }
}

export default Register;
