import React, {Component} from "react";
import "react-bootstrap/"
import Button from "react-bootstrap/Button";
import ButtonComponent from "../component/ButtonComponent";


export default class TicTacToeController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      player1: '',
      player2: ''
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
        <div className="content width100Percent" id="content">
          <div className="width100Percent middleContainer displayFlexColumn" id="middleContainer">
            <div className="width45Percent displayFlexRowCenter">
              <div className="width50Percent displayFlexRowCenter">
                <div className="displayFlexRowCenterFloatLeft">
                  <label>Player 1: </label></div>
                <div className="displayFlexRowCenterFloatRight">
                  <input type="text"
                         name="player1"
                         value={this.state.player1}
                         placeholder="Enter Name"
                         onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="width50Percent displayFlexRowCenter">
                <div className="displayFlexRowCenterFloatLeft"><label>Player 2: </label></div>
                <div className="displayFlexRowCenterFloatRight">
                  <input type="text"
                         name="player2"
                         value={this.state.player2}
                         placeholder="Enter Name"
                         onChange={this.handleInputChange}/>
                </div>
              </div>
            </div>
            <div className="width45Percent displayFlexRowCenter">
              <div className="width50Percent displayFlexRowCenter">
                <div className="displayFlexRowCenterFloatLeft">
                  <label>{this.state.player1}</label>
                </div>
              </div>
              <div className="width50Percent displayFlexRowCenter">
                <div className="displayFlexRowCenterFloatLeft">
                  <label>{this.state.player2}</label>
                </div>
              </div>
            </div>
            <div className="width15Percent displayFlexRowCenter divBorder">
              <div className="width33Percent divBorder">
                <button name="1" className="buttonHeightWidth" onClick={this.handleInputChange}>1</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="2" className="buttonHeightWidth" onClick={this.handleInputChange}>1</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="3" className="buttonHeightWidth" onClick={this.handleInputChange}>1</button>
              </div>
            </div>
            <div className="width15Percent displayFlexRowCenter divBorder">
              <div className="width33Percent divBorder">
                <button name="4" className="buttonHeightWidth" onClick={this.handleInputChange}>1</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="5" className="buttonHeightWidth" onClick={this.handleInputChange}>1</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="6" className="buttonHeightWidth" onClick={this.handleInputChange}>1</button>
              </div>
            </div>
            <div className="width15Percent displayFlexRowCenter divBorder">
              <div className="width33Percent divBorder">
                <button name="7" className="buttonHeightWidth" onClick={this.handleInputChange}>1</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="8" className="buttonHeightWidth" onClick={this.handleInputChange}>1</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="9" className="buttonHeightWidth" onClick={this.handleInputChange}>1</button>
              </div>
            </div>
            <svg >
              <line x1="0" y1="-200" x2="200" y2="800" className="lineStyle"/>
            </svg>
          </div>
        </div>
    );
  }

}