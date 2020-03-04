import React, {Component} from "react";

class NotificationComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let notificationType = this.props.notificationType;
    let notificationDiv;
    let styleName = notificationType + " vCenterLeft";
    switch (notificationType) {
      case "info":
        notificationDiv = <span className="width95Percent">Info message</span>;
        break;
      case "error":
        notificationDiv = <span className="width95Percent">Error message</span>;
        break;
      case "alert":
        notificationDiv = <span className="width95Percent">Warning message</span>;
        break;
      case "success":
        notificationDiv = <span className="width95Percent">Success message</span>;
        break;
    }

    function hide() {
      let alertContainer = document.getElementById("alertContainer");
      if (alertContainer !== null) {
        alertContainer.style.display = "none";
      }
    }

    return (
        <div id="alertContainer">
          <div className={styleName}>
            {notificationDiv}
            <button className="unStyled-button" onClick={() => {
              hide();
            }}>X</button>
          </div>
        </div>
    );
  }
}

export default NotificationComponent;