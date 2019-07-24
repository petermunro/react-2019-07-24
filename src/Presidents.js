import React, { useState, useEffect } from "react";

function Presidents() {
  let [presidents, setPresidents] = useState([]);
  let [newPres, setNewPres] = useState("");
  useEffect(() => console.log("useEffect callback"));

  console.log("render");
  return (
    <div>
      <h2>Presidents</h2>
      <ul>
        {presidents.map(president => (
          <li>{president}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newPres}
        onChange={e => setNewPres(e.target.value)}
      />
      <button onClick={() => setPresidents([...presidents, newPres])}>
        Add President
      </button>
    </div>
  );
}

export default Presidents;
