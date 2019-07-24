import React, { Component } from "react";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: "hello there"
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputString}
          onChange={e => this.inputHandler(e)}
        />
        <p>{this.state.inputString.length}</p>
      </div>
    );
  }

  inputHandler(e) {
    console.log(e.target.value);
    this.setState({ inputString: e.target.value });
    this.props.onSend("foo");
  }
}

export default InputBox;
