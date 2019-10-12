import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import Register from './Register'

class App extends React.Component {
    state={
        username:"",
    password:"",
    tempLogin:[]
    }

    usernamefun=(e)=>
  {
    const value = e.target.value;
    this.setState({username:value})
  }
  passwordfun=(e)=>
  {
    const value = e.target.value;
    this.setState({password:value})
  }

    componentDidMount(e)
    {
        var m = localStorage.getItem("login");
        if(m!=null)
          this.state.tempLogin = JSON.parse(m);
        }
        loginbtnfun=(e) =>
        {
          var {tempLogin,username,password}=this.state;
          if(tempLogin!=null)
          {
              var i;
              for(i=0;i<tempLogin.length;i++)
              {
                  if(tempLogin[i].username==username)
                  {
                      if(tempLogin[i].password==password)
                      {
                          var ObjCurrentAccount = new Object();
                              ObjCurrentAccount.username=tempLogin[i].username;
                              ObjCurrentAccount.userid=tempLogin[i].userid;
                              ObjCurrentAccount.password=tempLogin[i].password;
                  sessionStorage.setItem("currentAccount_name",ObjCurrentAccount.username);
                  sessionStorage.setItem("currentAccount_password",ObjCurrentAccount.password);
                  this.setState({islogin:true});
                  return ;
                  //console.log(ObjCurrentAccount);
                      }
                      else
                      {
                          alert("Password is incorrect");
                          return ;
                      }
                  }
              }
              if(i==tempLogin.length)
                  alert("Check your details");
          }
          else
          {
              alert("register first");
          }
        }
    render()
    {
      return (
        <div className="container">
            <input type="text" placeholder="Enter UserName" onChange={this.usernamefun}/>
            <input type="pasword" placeholder="Enter Password" onChange={this.passwordfun}/>
            <button onClick={this.loginbtnfun}>Login</button>
            <Link to="/register" ><h5>Register</h5></Link>
        <Switch>
        <Route path="/register" render={(routeprops)=>{return  <Register changevalue={this.props.changevalue} /> }} exact/>
        </Switch>
        </div>
      )
    }
  }
  
  export default App;