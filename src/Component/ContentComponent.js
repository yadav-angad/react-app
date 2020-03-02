import React from "react";
import HeaderImage from "../image/header-image.png";

export default function HeaderComponent(prop) {
  return(
      <div className="content">
        <h1>
          {prop.content}
        </h1>
      </div>
  );
}