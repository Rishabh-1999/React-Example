import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input1 from './Components/input/index'
import Button1 from './Components/button/button'
import List1 from './Components/List/List'

class App extends React.Component
{
  state={
    a:"",
    todo:[],
  }

  handleInput = (e)=>
  {
    const value = e.target.value;
    this.setState({a:value})
  }

  deleteli = (i)=>
  {
    return () => {
    const {todo}=this.state;
    todo.splice(i,1);
    this.setState({todo:todo});
    }
  }

  savetodo = (e)=>
  {
    const {a,todo} = this.state;
    todo.push(a);
    this.setState({todo:todo,a:""})
    console.log(todo)
  }

  render()
  {
    const {a,todo} = this.state;
    return (
      <div>
        <Input1 data={a} change={this.handleInput} placeholder="Enter Value" />
        <Button1 buttononclick={this.savetodo} />
        <List1 todo={todo} deleteli={this.deleteli} />
      </div>
    )
  }
}

export default App;