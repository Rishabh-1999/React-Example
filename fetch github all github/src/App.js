import React from 'react';
import './App.css';
import './style-github.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  state={
    data:[]
  }
  componentDidMount(e)
  {
    var {data}=this.state;
    var xhr=new XMLHttpRequest();
		xhr.open("GET","https://api.github.com/users?since=1",true);
		xhr.onload=()=>
		{
			var dataString=xhr.responseText;
			data=JSON.parse(dataString);
			console.log(data);
      this.setState({data:data})
		}
	xhr.send();
  }
  componentDidUnMount()
  {
    console.log("Off");
  }
  render()
  {
    var {data}=this.state;
    return (
      <div className="container">
			<center>
			<table className="table table-hover text-centered table-striped table-dark" id="table">
				<tbody>
        <tr>
					<th width="30%">IMAGE</th>
					<th width="10%">Login</th>
					<th width="10%">TYPE</th>
					<th width="25%">WEB PAGE</th>
					<th width="25">URL</th>
				</tr>
        
          {
            data.map((item,i)=>
            {
              return (
                <tr key={i}><td key={i}><img src={item.avatar_url} className="img-thumbnail" alt="lo" /></td><td>{item.login}</td><td>{item.type}</td><td className="tda"><a href={item.html_url}>{item.html_url}</a></td><td><a href={item.html_url}><button className="btn btn-success">Click Here to got to Repo</button></a></td></tr>
               )}
            )
        }
      </tbody>
			</table>
		</center>
		</div>
    )
  }
}

export default App;