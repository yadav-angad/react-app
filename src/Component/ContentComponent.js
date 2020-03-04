import React, {Component} from "react";
import ButtonComponent from "./ButtonComponent";

class ContentComponent extends Component {
  items;
  constructor(props) {
    super(props);
    this.state = {
      notificationType: '',
      userDetails: [],
      header: ["ID", "Name", "UserName", "Email"],
      userPost: [],
      userPostList:[],
      startStopRenderPost: true,
      startStopButtonName: 'Start / Stop Post'
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
          this.renderUserList();
        })
        .catch(console.log);
  };

  fetchUserPost(id) {
    this.resetInterval();
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
        .then(res => res.json())
        .then((data) => {
          document.getElementById("userPostButton").style.display = "block";
          document.getElementById("userPostList").style.display = "block";
          this.setState({
            userPost: data
          });
        }).catch(console.log);
  };

  resetInterval() {
    document.getElementById("userPostList").style.display = "none";
    this.setState({
      userPostList:[],
      startStopButtonName: 'Start / Stop Post'
    });
    clearInterval(this.state.timer);
  }

  renderUserList() {
    return this.state.userDetails.map((user, index) => {
      const {id, name} = user;
      return (
          <a onClick={() => {
            this.fetchUserPost(id);
          }}>
            <li className="divHover userDetailList leftNavContainer" key={id}>{name}</li>
          </a>
      )
    });
  }

  renderUserPost() {
    this.setState({startStopButtonName: 'Stop Post'});
    let counter = 0;
    let maxLength = this.state.userPost.length;
    let val = [];
    let timer = setInterval(() => {
      if(counter < maxLength && !!this.state.startStopRenderPost) {
        val[counter] = this.getUserPostOneByOne(this.state.userPost[counter]);
        counter++;
        this.setState({userPostList: val});
      }
    }, 2000);
    this.setState({timer: timer});
  }

  getUserPostOneByOne(userPost){
    const {id, title, body} = userPost;
    return (
        <div className="divHover userPost" key={id}>
          <div><label className="boldFont">Title: </label>{title}</div>
          <div><label className="boldFont">Body: </label>{body}</div>
        </div>
    );
  }

  startStopRenderingUserPost() {
    if (this.state.startStopRenderPost) {
      this.setState({
        startStopRenderPost: false,
        startStopButtonName: 'Start Post'
      });
    } else if (!this.state.startStopRenderPost) {
      this.setState({
        startStopRenderPost: true,
        startStopButtonName: 'Stop Post'
      });
    }
  }

  hideUserPost() {
    this.resetInterval();
  }

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
            <div id="userPostList">{this.state.userPostList}</div>
          </div>
          <div className="width20Percent textAlignCenter rightContainer">
            <div className="divDisplayNone" id="userPostButton">
              <ButtonComponent name="Show Post" onButtonClick={() => {
                this.renderUserPost();
              }}/>
              <ButtonComponent name={this.state.startStopButtonName} onButtonClick={() => {
                this.startStopRenderingUserPost();
              }}/>
              <ButtonComponent name="Hide Post" onButtonClick={() => {
                this.hideUserPost();
              }}/>
              </div>
          </div>
        </div>
    );
  }
}

export default ContentComponent;