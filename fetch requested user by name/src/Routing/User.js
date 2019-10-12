import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Cardview from './cardview'

class App extends React.Component {
    state={
      item:{},
      datacame:false
    }
    componentDidMount(e)
    {
      var xhr=new XMLHttpRequest();
          xhr.open("GET","https://api.github.com/users/"+this.props.match.params.id,true);
          xhr.onload=()=>
          {
            console.log(this.props.match.params.id)
              var dataString=xhr.responseText;
              this.state.item=JSON.parse(dataString);
              console.log( this.state.item);
              this.state.datacame=true;
              this.setState(state => ({
                datacame: true
              }));
          }
            xhr.send();
        }
    render()
    {
        console.log(this.state.item)
      return (
        <div className="container">
             {this.state.datacame ? <Cardview item={this.state.item} /> : <h1>Loading</h1>}
        </div>
      )
    }
  }
  
  export default App;