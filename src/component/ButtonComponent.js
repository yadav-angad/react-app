import React from "react";
import PropTypes from "prop-types";
export default function ButtonComponent(prop){
  return (<>
    <button className="button" onClick={prop.onButtonClick}>{prop.name}</button>
  </>);
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired
}