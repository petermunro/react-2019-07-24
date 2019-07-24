import React from "react";
import PropTypes from "prop-types";

function Address(props) {
  let { town, line1, county, country } = props.address;
  return (
    <div>
      <p>{line1}</p>
      <p>{town}</p>
      <p>{county}</p>
      <p>{country}</p>
    </div>
  );
}

Address.propTypes = {
  address: PropTypes.shape({
    line1: PropTypes.string,
    town: PropTypes.string,
    county: PropTypes.string,
    country: PropTypes.string
  }).isRequired
};

export default Address;
