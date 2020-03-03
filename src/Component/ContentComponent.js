import React, {Component} from "react";
import NotificationComponent from "./NotificationComponent";
import ButtonComponent from "./ButtonComponent";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationType: '',
      contacts: ''
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          console.log("data : " + data);
          this.setState({ contacts: data })
        })
        .catch(console.log)
  }

  updateState() {
    const alertType = ["info", "error", "alert", "success"];
    let result = alertType[Math.floor(Math.random() * alertType.length)];
    this.setState({notificationType: result});
    let alertContainer = document.getElementById("alertContainer");
    if (alertContainer !== null) {
      alertContainer.style.display = "block";
    }
  };

  render() {
    return (
        <div className="content">
          <ButtonComponent onButtonClick={() => {
            this.updateState();
          }}/>
          <br/>
          <NotificationComponent notificationType={this.state.notificationType}/>
          <h1>
            {this.props.content}
          </h1>
          <ul>
            {this.state.contacts(function(name, index){
              return <li key={ index }>{name}</li>;
            })}
          </ul>
        </div>
    );
  }
}

export default ContentComponent;