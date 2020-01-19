import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postLists = posts.length ? (
      posts.map(post => {
        return (
          <div className="card" key={post.id}>
            <div className="card-body mb-5">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postLists}
      </div>
    );
  }
}

export default Home;
