import React, { Component } from "react";

class ClickDemo extends Component {
  // constructor(props) {
  //   super(props);
  //   // 1. binding in constructor
  //   // this.handleClick = this.handleClick.bind(this);
  // }

  render() {
    return (
      // 2. Use ES6 arrow function
      // <button onClick={e => this.handleClick(e)}>
      <button onClick={this.handleClick}>
        Click Me - A React event handler
      </button>
    );
  }

  // ES2017 property initializer
  handleClick = e => {
    this.displayMessage(e);
  };

  displayMessage(e) {
    alert("React event - see console for SyntheticEvent details");
    console.log("React event:", e);
  }
}

export default ClickDemo;
