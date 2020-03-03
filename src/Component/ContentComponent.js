import React from "react";
import NotificationComponent from "./NotificationComponent";
export default function HeaderComponent(prop) {
  return(
      <div className="content">
        <NotificationComponent notificationType={prop.notificationType}/>
        <h1>
          {prop.content}
        </h1>
      </div>
  );
}