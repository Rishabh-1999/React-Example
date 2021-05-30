import React, { PureComponent } from "react";
import axios from "axios";

class Home extends PureComponent {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
  }

  render() {
    const { posts } = this.state;

    const postLists = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card m-1 my-2" key={post.id}>
            <div className="card-body my-2">
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
        <h2 className="text-center">Home</h2>
        {postLists}
      </div>
    );
  }
}

export default Home;
