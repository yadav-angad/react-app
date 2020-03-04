import React from "react";

export default function ButtonComponent(prop){
  return (<div>
    <button className="button" onClick={prop.onButtonClick}>CLICK ME</button>
  </div>);
}