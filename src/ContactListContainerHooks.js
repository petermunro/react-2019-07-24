import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";

function ContactListContainer() {
  let [contacts, setContacts] = useState([]);

  useEffect(fetchContacts, []);

  function fetchContacts() {
    fetch("/contacts.json")
      .then(response => response.json())
      .then(contacts => setContacts(contacts))
      .catch(err => console.error(err));
  }

  console.log("render");
  return (
    <div>
      ContactListContainer
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactListContainer;
