import React, {Component} from "react";
import ButtonComponent from "./ButtonComponent";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationType: '',
      userDetails: [],
      header: ["ID", "Name", "UserName", "Email"],
      userPost: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.fetchUserList();
  }

  fetchUserList() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({
            userDetails: data
          });
          this.renderUserList(this.state.userDetails);
        })
        .catch(console.log);
  };

  fetchUserPost(id) {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          document.getElementById("userPostButton").style.display = "block";
          this.setState({
            userPost: data
          });
          this.renderUserPost();
        })
        .catch(console.log);
  };


  renderUserList() {
    return this.state.userDetails.map((user, index) => {
      console.log('renderUserList called');
      const {id, name} = user;
      return (
          <a onClick={() => {
            this.fetchUserPost(id);
          }}>
            <li className="divHover userDetailList leftNavContainer" key={id}>{name}</li>
          </a>
      )
    })
  };

  renderUserPost() {
    return this.state.userPost.map((userPost, index) => {
      const {id, title, body} = userPost;
      return (
          <div className="divHover userPost" key={id}>
            <div><label className="boldFont">Title: </label>{title}</div>
            <div><label className="boldFont">Body: </label>{body}</div>
          </div>
      )
    })
  };

  render() {
    return (
        <div className="content divLeftAlign">
          <div className="width30Percent leftNavContainer">
            <div className="padding-left"><span className="userHeaderList">Users</span></div>
            <div className="textAlignLeft">
              <div>{this.renderUserList()}</div>
            </div>
          </div>
          <div className="width50Percent middleContainer">
            {this.renderUserPost()}
          </div>
          <div className="width20Percent textAlignCenter rightContainer">
            <div className="divDisplayNone" id="userPostButton">
              <ButtonComponent name="Show Post" onButtonClick={() => {
                alert("Show Post");
              }}/>
              <ButtonComponent name="Start / Stop Post" onButtonClick={() => {
                alert("Start / Stop Post");
              }}/>
              <ButtonComponent name="Hide Post" onButtonClick={() => {
                alert("Hide Post");
              }}/>
              </div>
          </div>
        </div>
    );
  }
}

export default ContentComponent;