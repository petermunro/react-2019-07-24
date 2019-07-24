import React, { Component } from "react";
import PropTypes from "prop-types";
import Address from "./Address";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  render() {
    let { name, address, email } = this.props;
    return (
      <div>
        <h1 onClick={() => this.handleClick()}>{name}</h1>
        {this.state.isExpanded ? (
          <div>
            <p>
              <em>{email}</em>
            </p>
            <Address address={address} />
          </div>
        ) : null}
      </div>
    );
  }

  handleClick() {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
    // this.setState({ isExpanded: !this.state.isExpanded });
  }
}

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.object
};

export default Contact;
