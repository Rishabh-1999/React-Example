import React from 'react';
import './App.css';
import './style-github.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch} from 'react-router-dom';
import User from './Routing/User'
class App extends React.Component {
  render()
  {
    return (
      <div className="container">
        
        <Route path="/:id" component={User} exact/>
		</div>
    )
  }
}

export default App;