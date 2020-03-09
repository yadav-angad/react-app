import React, {Component} from 'react';
import ButtonComponent from "../component/ButtonComponent";

export default class LoadUserPostController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      userPost: {},
      postList: []
    };

    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  increaseCounter() {
    let increasedCounter = this.state.counter + 1;
    this.fetchPost(increasedCounter).then(r => this.setState({counter: increasedCounter}));
  }

  decreaseCounter() {
    this.setState({counter: this.state.counter - 1});
  }

  async fetchPost(id) {
    let url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    console.log('url : ' + url);
    await fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            userPost: data
          });
          this.state.postList[this.state.counter] = this.state.userPost;
        }).catch(console.log);
  };

  renderPost() {
    return this.state.postList.map((post) => {
      const {id, title, body} = post;
      return (
          <div className="width90Percent padding-left divHover userPost" key={id}>
            <div><label className="boldFont">{id} : </label>{title}</div>
            <div><label className="boldFont">Body: </label>{body}</div>
          </div>
      )
    });
  }

  render() {
    return (
        <div className="content width100Percent" id="content">
          <div className="displayFlexRowCenter">
            <div className="width20Percent displayFlexRowCenterFloatRight">
              <ButtonComponent name="Decrease" onButtonClick={() => {
                this.decreaseCounter();
              }}/>
            </div>
            <div className="width5Percent displayFlexRowCenter boldFont">{this.state.counter}</div>
            <div className="width20Percent displayFlexRowCenterFloatLeft">
              <ButtonComponent name="Increase" onButtonClick={() => {
                if (this.state.counter === 10) {
                  throw new Error("Limit Reached");
                }
                this.increaseCounter();
              }}/>
            </div>
          </div>
          <div className="displayFlexRowCenter">
            <div className="width60Percent middleContainer displayFlexColumn">
              {this.renderPost()}
            </div>
          </div>
        </div>
    );
  }
};