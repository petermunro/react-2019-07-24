import React, { useState } from "react";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // do something with form data
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
      <p>Username: {username}</p>

      <p>Password: {password}</p>
    </form>
  );
}

export default Login;
