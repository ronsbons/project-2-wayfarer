import React, { Component } from 'react';

class UserForm extends Component {
  state={
    user: {
      userCity: '',
      userFullName: '',
    }
  }

  componentDidMount() {
    console.log(this.props.user);
    this.setState({
      user: this.props.user
    });
  }

  onInputChange = (event) => {
    event.preventDefault();
    let user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({
      user: user
    });
    console.log(this.state.user);
  };

  onFormSubmit = (event) => {
    event.preventDefault()
    let user = this.state.user;
    this.props.updateUser(this.props.user._id, user)
    this.setState({
      user: {
        userCity: '',
        userFullName: '',
      },
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input 
            name="userFullName"
            onChange={this.onInputChange}
            type="text"
            placeholder="Name"
            // value={(this.state.user.userFullName) || ""}
          />
          <input 
            name="userCity"
            onChange={this.onInputChange}
            type="text"
            placeholder="Current City"
            // value={(this.state.user.userCity) || ""}
          />
          <button type="submit">Change</button>
        </form>
      </div>
    );
  }
}

export default UserForm;