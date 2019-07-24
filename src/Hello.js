import React from "react";
import PropTypes from "prop-types";

function Hello(props) {
  console.log(props);
  return (
    <div>
      <p>
        {props.message} {props.name}!
      </p>
      <ul>
        <li>Name: {props.person.name}</li>
        <li>Age: {props.person.age}</li>
        <li>IsPM: {props.person.isPM}</li>
      </ul>
      <div>{props.children}</div>
    </div>
  );
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string,
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isPM: PropTypes.bool
  })
};

export default Hello;
