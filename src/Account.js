import React from "react";
import { Link, Route } from "react-router-dom";
import Security from "./Security";

// /account/1252/security/AAPL
// /account/:accountId/security/:securityId

function Account({ match }) {
  let accountId = match.params.accountId;
  return (
    <div>
      <h1>Account</h1>
      <p>Account details for account {accountId}</p>

      <h2>Securities</h2>
      <ul>
        <li>
          <Link to={`${match.url}/security/34`}>Apple, Inc (AAPL)</Link>
        </li>
        <li>
          <Link to={`${match.url}/security/764`}>IBM (IBM)</Link>
        </li>
      </ul>

      <Route path={`${match.url}/security/:securityId`} component={Security} />
    </div>
  );
}

export default Account;
