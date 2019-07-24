import React from "react";
import Contact from "./Contact";

function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map(contact => (
        <Contact
          name={contact.fullName}
          address={contact.address}
          email={contact.email}
          key={contact.id}
        />
      ))}
    </div>
  );
}

export default ContactList;
