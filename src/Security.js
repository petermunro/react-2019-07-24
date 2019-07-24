import React from "react";

function Security({ match }) {
  let securityId = match.params.securityId;
  return (
    <div>
      <h2>Security: {securityId}</h2>
      <p>Details for security: {securityId}</p>
    </div>
  );
}

export default Security;
