import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import NavBar from './Components/NavBar'
import Home from './Routers/Home'
import About from './Routers/About'
import Todo from './Routers/Todo'

class App extends React.Component {
  render()
  {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/todo" component={Todo} exact/>
        </Switch>
      </div>
    )
  }
}

export default App;