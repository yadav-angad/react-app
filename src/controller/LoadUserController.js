import React, {Component} from 'react';
import ButtonComponent from "../component/ButtonComponent";

export default class LoadUserPostController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({counter: this.state.counter + 1});


  }
  decreaseCounter() {
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
        <div className="content width100Percent" id="content">
          <div className="displayFlexRowCenter">
            <div className="width20Percent displayFlexRowCenterFloatRight">
              <ButtonComponent name="Decrease" onButtonClick={() => {
                this.decreaseCounter();
                const a = function(){
                  console.log("Yadav");
                };
                console.log(a);
               console.log(function(){
                 console.log("Angad");
               });
              }}/>
            </div>
            <div className="width5Percent displayFlexRowCenter boldFont">{this.state.counter}</div>
            <div className="width20Percent displayFlexRowCenterFloatLeft">
              <ButtonComponent name="Increase" onButtonClick={() => {
                this.increaseCounter();
              }}/>
            </div>
          </div>
          <div className="displayFlexRowCenter">
            <div className="width50Percent middleContainer displayFlexRowCenter">
              <div className="width100Percent padding-left displayFlexRowCenterFloatLeft">
                <h1>title</h1>
                <span>Body</span>
              </div>
            </div>
          </div>
        </div>
    );
  }
};