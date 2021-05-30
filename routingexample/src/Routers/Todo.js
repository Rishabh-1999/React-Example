import React from "react";

/* Components */
import Input from "../Components/Input";
import Button from "../Components/Button";
import List from "../Components/List";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  componentDidMount() {
    console.log("On");
  }
  componentDidUnMount() {
    console.log("Off");
  }
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

  saveTodo = (e) => {
    const { text, todo } = this.state;
    todo.push(text);
    this.setState({ todo: todo, text: "" });
    console.log(todo);
  };

  render() {
    const { text, todo } = this.state;
    return (
      <div>
        <Input
          data={text}
          change={this.handleInput}
          placeholder="Enter Value"
        />
        <Button saveTodo={this.saveTodo} />
        <List todo={todo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Todo;
