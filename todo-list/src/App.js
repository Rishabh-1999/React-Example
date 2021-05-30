import React from "react";

/* Styles */
import "./App.css";

/* Components */
import InputField from "./Components/InputField/index";
import Button from "./Components/Button";
import List from "./Components/List";

class App extends React.Component {
  state = {
    text: "",
    todo: [],
  };

  handleInput = (e) => {
    const value = e.target.value;
    this.setState({ text: value });
  };

  deleteTodo = (i) => {
    return () => {
      const { todo } = this.state;
      todo.splice(i, 1);
      this.setState({ todo: todo });
    };
  };

  savetodo = () => {
    const { text, todo } = this.state;
    todo.push(text);
    this.setState({ todo: todo, text: "" });
    console.log(todo);
  };

  render() {
    const { text, todo } = this.state;
    return (
      <div>
        <InputField
          text={text}
          onChange={this.handleInput}
          placeholder="Enter Value"
        />
        <Button onClick={this.savetodo} />
        <List todoLists={todo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
