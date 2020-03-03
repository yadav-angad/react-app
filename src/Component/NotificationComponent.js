import React, {Component} from "react";

class NotificationComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let notificationType = this.props.notificationType;
    let notificationDiv;

    switch (notificationType) {
      case "info":
        notificationDiv = <div>
          <div className="info vCenter">
            <span>Info message</span>
            <button className="alignRight">X</button>
          </div>
        </div>;
        break;
      case "error":
        notificationDiv = <div>
          <div className="error vCenter">
            <span>Error message</span>
            <button className="alignRight">X</button>
          </div>
        </div>;
        break;
      case "alert":
        notificationDiv = <div>
          <div className="alert vCenter"><span>Warning message</span>
            <button className="alignRight">X</button>
          </div>
        </div>;
        break;
      case "success":
        notificationDiv = <div>
          <div className="success vCenter"><span>Success message</span>
            <button className="alignRight">X</button>
          </div>
        </div>;
        break;
    }

    return (
        <div>
          {notificationDiv}
        </div>
    );
  }
}

export default NotificationComponent;