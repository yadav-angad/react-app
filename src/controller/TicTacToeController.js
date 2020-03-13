import React, {Component} from "react";
import "react-bootstrap/"

export default class TicTacToeController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      player1: '',
      player2: '',
      tic: '',
      counter: 1,
      player1Selection: 'X',
      player2Selection: '0'
    };
  }

  handlePlayerSelection = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name + " :: " + value);
    let player1 = '';
    let player2 = '';
    if (value === 'playerSelected0') {
      player1 = '0';
      player2 = 'X';
      document.getElementById("playerSelectedX").disabled = true;
    } else if (value === 'playerSelectedX') {
      player1 = 'X';
      player2 = '0';
      document.getElementById("playerSelected0").disabled = true;
    }
    this.setState({
      player1, player2
    });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let ticTacToe = '';
    if (this.state.player1 || this.state.player2) {
      if (this.state.counter % 2 === 0) {
        ticTacToe = this.setFunction();
      } else {
        ticTacToe = this.setFunction();
      }
      this.setState({
        [name]: ticTacToe,
        counter: this.state.counter + 1
      });
    } else {
      alert('Please select X or 0');
    }
  };

  setFunction() {
    if (this.state.player1 && this.state.player1 === '0') {
      this.setState({
        player1: '',
        player2: 'X'
      });
      return '0';
    } else if (this.state.player1 && this.state.player1 === 'X') {
      this.setState({
        player1: '',
        player2: '0'
      });
      return 'X';
    } else if (this.state.player2 && this.state.player2 === '0') {
      this.setState({
        player2: '',
        player1: 'X'
      });
      return '0';
    } else if (this.state.player2 && this.state.player2 === 'X') {
      this.setState({
        player2: '',
        player1: '0'
      });
      return 'X';
    }
  }

  render() {
    return (
        <div className="content width100Percent" id="content">
          <div className="width100Percent middleContainer displayFlexColumn" id="middleContainer">
            <div className="width55Percent displayFlexRowCenter">
              <div className="width40Percent displayFlexRowCenter">
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
              <div className="width40Percent displayFlexRowCenter">
                <div className="displayFlexRowCenterFloatLeft"><label>Player 2: </label></div>
                <div className="displayFlexRowCenterFloatRight">
                  <input type="text"
                         name="player2"
                         value={this.state.player2}
                         placeholder="Enter Name"
                         onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="width20Percent displayFlexRowCenter">
                <div className="width50Percent displayFlexRowCenter">
                  <button name="player1Selection"
                          id="playerSelectedX"
                          value="playerSelectedX"
                          className="buttonHeightWidth"
                          onClick={this.handlePlayerSelection}>X
                  </button>
                </div>
                <div className="width50Percent displayFlexRowCenter">
                  <button name="player2Selection"
                          id="playerSelected0"
                          value="playerSelected0"
                          className="buttonHeightWidth"
                          onClick={this.handlePlayerSelection}>0
                  </button>
                </div>
              </div>
            </div>
            <div className="width15Percent displayFlexRowCenter divBorder">
              <div className="width33Percent divBorder">
                <button name="tic1" value="1" className="buttonHeightWidth"
                        onClick={this.handleInputChange}>{this.state.tic1}</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="tic2" value="2" className="buttonHeightWidth"
                        onClick={this.handleInputChange}>{this.state.tic2}</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="tic3" value="3" className="buttonHeightWidth"
                        onClick={this.handleInputChange}>{this.state.tic3}</button>
              </div>
            </div>
            <div className="width15Percent displayFlexRowCenter divBorder">
              <div className="width33Percent divBorder">
                <button name="tic4" value="4" className="buttonHeightWidth"
                        onClick={this.handleInputChange}>{this.state.tic4}</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="tic5" value="5" className="buttonHeightWidth"
                        onClick={this.handleInputChange}>{this.state.tic5}</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="tic6" value="6" className="buttonHeightWidth"
                        onClick={this.handleInputChange}>{this.state.tic6}</button>
              </div>
            </div>
            <div className="width15Percent displayFlexRowCenter divBorder">
              <div className="width33Percent divBorder">
                <button name="tic7" value="7" className="buttonHeightWidth"
                        onClick={this.handleInputChange}>{this.state.tic7}</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="tic8" value="8" className="buttonHeightWidth"
                        onClick={this.handleInputChange}>{this.state.tic8}</button>
              </div>
              <div className="width33Percent divBorder">
                <button name="tic9" value="9" className="buttonHeightWidth"
                        onClick={this.handleInputChange}>{this.state.tic9}</button>
              </div>
            </div>
            {/*<svg >*/}
            {/*  <line x1="0" y1="-200" x2="200" y2="800" className="lineStyle"/>*/}
            {/*</svg>*/}
          </div>
        </div>
    );
  }

}