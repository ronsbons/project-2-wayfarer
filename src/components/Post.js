import React, { Component } from "react";
import PostDetail from './PostDetail';

class Post extends Component {

  deleteUserPost = (event) => {
    event.preventDefault();
    this.props.deletePost(this.props.post)
  }
  render() {
    return (
      <li data-posts-index={this.props.post.id}>
          <div>
              <span>{this.props.post.postTitle}</span>

          <DeletePostModal
          deletePost={this.deleteUserPost}
          />

          </div>
          <PostDetail 
          updatePost={this.props.updatePost}
          post={this.props.post}
          user={this.props.user}
          />
      </li>
    );
  }
}

export default Post;