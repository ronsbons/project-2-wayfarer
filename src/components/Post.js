import React, { Component } from "react";
import PostDetail from './PostDetail';

class Post extends Component {
  deleteUserPost = (event) => {
    event.preventDefault();
    this.props.deletePost(this.props.post)
  }
  render() {
    return (
      <li key={this.props.post.id}>
          <div>
              <span>{this.props.post.postTitle}</span>
              <a
              href="#removePost"
              className="remove"
              onClick={this.deleteUserPost}
              >
              Remove
              </a>

          </div>
          <PostDetail post={this.props.post}/>
      </li>
    );
  }
}

export default Post;
