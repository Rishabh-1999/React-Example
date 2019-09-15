import React, { Component }  from 'react';
import './App.css';
import First from './Compoents/First'

function CreateLi()
{
  var arr=[];
  for(var i=0;i<103;i++){
      arr.push(<li>{i}</li>)
    }
    return arr;
}

function App() {
  var arr=[];
  arr=CreateLi()
  var n="idname";
  return(
            <div id={n}>
    
            <h1>TO DO Lists</h1>
            <ul>
            {
              CreateLi()
            }
            </ul>
    
            <First />
            </div>      
          );
}

// class App extends Component
// {
//   App()
//   {
//     this.n="name";
//   }

//   render(){
//       return(
//         <div id={this.n}>

//         <h1>TO DO Lists</h1>
//         <ul>

//           <li>Hi</li>
//           <li>Hello</li>
//           <li>ui</li>
//         </ul>

//         <First />
//         </div>      
//       );
//   }
// }

export default App;
