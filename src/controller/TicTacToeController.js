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
      player2Selection: '0',
      tic1: '',
      tic2: '',
      tic3: '',
      tic4: '',
      tic5: '',
      tic6: '',
      tic7: '',
      tic8: '',
      tic9: '',
      winningCombination: [['tic1', 'tic2', 'tic3'], ['tic4', 'tic5', 'tic6'], ['tic7', 'tic8', 'tic9'], ['tic1', 'tic4', 'tic7'],
        ['tic2', 'tic5', 'tic7'], ['tic3', 'tic6', 'tic9'], ['tic1', 'tic5', 'tic9'], ['tic3', 'tic5', 'tic7']]
    };
  }

  handlePlayerSelection = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
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

  checkWinningCombination(name, ticTacToe) {
    console.log('name : ' + name + ' :: ticTacToe : ' + ticTacToe + " this.state.tic1 :: " + this.state.tic1);
    if (this.state.tic1 === ticTacToe && this.state.tic2 === ticTacToe && this.state.tic3 === ticTacToe) {
      console.log(ticTacToe + ' is winner');
    } else if (this.state.tic4 === ticTacToe && this.state.tic5 === ticTacToe && this.state.tic6 === ticTacToe) {
      console.log(ticTacToe + ' is winner');
    } else if (this.state.tic7 === ticTacToe && this.state.tic8 === ticTacToe && this.state.tic9 === ticTacToe) {
      console.log(ticTacToe + ' is winner');
    } else if (this.state.tic1 === ticTacToe && this.state.tic4 === ticTacToe && this.state.tic7 === ticTacToe) {
      console.log(ticTacToe + ' is winner');
    } else if (this.state.tic2 === ticTacToe && this.state.tic5 === ticTacToe && this.state.tic8 === ticTacToe) {
      console.log(ticTacToe + ' is winner');
    } else if (this.state.tic3 === ticTacToe && this.state.tic6 === ticTacToe && this.state.tic9 === ticTacToe) {
      console.log(ticTacToe + ' is winner');
    } else if (this.state.tic1 === ticTacToe && this.state.tic5 === ticTacToe && this.state.tic9 === ticTacToe) {
      console.log(ticTacToe + ' is winner');
    } else if (this.state.tic3 === ticTacToe && this.state.tic5 === ticTacToe && this.state.tic7 === ticTacToe) {
      console.log(ticTacToe + ' is winner');
    }

    // this.state.winningCombination.forEach(function(items) {
    //   if(items[0] === ticTacToe && items[1] === ticTacToe && items[2] === ticTacToe) {
    //     console.log(ticTacToe + ' is winner');
    //   }
    // });
  }

  boxAlreadyFilled(boxId) {
    switch (boxId) {
      case "tic1":
        return (!this.state.tic1);
      case "tic2":
        return (!this.state.tic2);
      case "tic3":
        return (!this.state.tic3);
      case "tic4":
        return (!this.state.tic4);
      case "tic5":
        return (!this.state.tic5);
      case "tic6":
        return (!this.state.tic6);
      case "tic7":
        return (!this.state.tic7);
      case "tic8":
        return (!this.state.tic8);
      case "tic9":
        return (!this.state.tic9);
    }

    return true;
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (this.state.player1 || this.state.player2) {
      if (this.state.counter % 2 === 0 && this.boxAlreadyFilled(name)) {
        this.fillBox(name);
      } else if (this.state.counter % 2 !== 0 && this.boxAlreadyFilled(name)) {
        this.fillBox(name);
      }
    } else {
      alert('Please select X or 0');
    }
  };

  fillBox(name) {
    let ticTacToe = this.setFunction();
    this.setState({
      [name]: ticTacToe,
      counter: this.state.counter + 1
    });
    this.checkWinningCombination(name, ticTacToe);
  }

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
          </div>
        </div>
    );
  }
}