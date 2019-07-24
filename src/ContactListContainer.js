import React, { Component } from "react";
import ContactList from "./ContactList";

class ContactListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  render() {
    return (
      <div>
        ContactListContainer
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }

  componentDidMount() {
    fetch("/contacts.json")
      .then(response => response.json())
      .then(json => this.setState({ contacts: json }))
      .catch(err => console.error(err));
  }
}

export default ContactListContainer;
