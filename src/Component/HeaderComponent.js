import React from "react";
import HeaderImage from "../image/header-image.png";

export default function HeaderComponent(prop) {
  return(
      <div>
        <div className="header1">JOHN DEERE FED TRAINING</div>
        <div className="header2"></div>
        <h1>{prop.headerName}</h1>
      </div>
  );
}