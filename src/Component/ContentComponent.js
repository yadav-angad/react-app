import React, {Component} from "react";
import NotificationComponent from "./NotificationComponent";
import ButtonComponent from "./ButtonComponent";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationType: '',
      userDetails: [],
      header:["ID", "Name", "UserName", "Email"],
      headerElement: ''
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  updateState() {
    const alertType = ["info", "error", "alert", "success"];
    let result = alertType[Math.floor(Math.random() * alertType.length)];
    this.setState({notificationType: result});
    let alertContainer = document.getElementById("alertContainer");
    if (alertContainer !== null) {
      alertContainer.style.display = "block";
      fetch('http://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then((data) => {
            let result =  this.state.header.map((key, index) => {
              return <th key={index}>{key.toUpperCase()}</th>
            });
            this.setState({
              userDetails: data,
              headerElement: result
            });
            this.renderTableHeader();
            this.renderTableData(this.state.userDetails);
          })
          .catch(console.log);
    }
  };

  renderTableHeader() {

  }

  renderTableData() {
    return this.state.userDetails.map((user, index) => {
      const {id, name, username, email} = user;
      return (
          <tr key={id}>
            <td className="colDiv10">{id}</td>
            <td className="colDiv30">{name}</td>
            <td className="colDiv30">{username}</td>
            <td className="colDiv30">{email}</td>
          </tr>
      )
    })
  };

  render() {
    return (
        <div className="content">
          <br/>
          <ButtonComponent onButtonClick={() => {
            this.updateState();
          }}/>
          <br/>
          <table className='userDetails'>
            <thead>
              {this.state.headerElement}
            </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </table>
          <br />
          <NotificationComponent notificationType={this.state.notificationType}/>
        </div>
    );
  }
}

export default ContentComponent;