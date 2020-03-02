import React from "react";
import FooterImage from "../image/footer-image.png";

export default function HeaderComponent(prop) {
  return(
      <div>
        <div>
          <img className="footer" src={FooterImage} alt="Logo"/>
          <h1>{prop.headerName}</h1>
        </div>
      </div>
  );
}