import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // do something with form data
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </label>
        <button type="submit">Login</button>
        <p>Username: {this.state.username}</p>

        <p>Password: {this.state.password}</p>
      </form>
    );
  }
}

export default Login;
