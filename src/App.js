import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactList contacts={contacts} />
      </header>
    </div>
  );
}

export default App;
