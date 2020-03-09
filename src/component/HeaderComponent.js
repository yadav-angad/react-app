import React, {Component} from "react";
import ButtonComponent from "./ButtonComponent";
import HomeIcon from "../image/home-icon.png";
import NavigationComponent from "./NavigationComponent";

export default class HeaderComponent extends Component {
  clock = new Date().toLocaleTimeString();

  constructor(props) {
    super(props);
    this.state = {
      clock: '',
      buttonName:'Hide Clock'
    };
    this.showHideClock = this.showHideClock.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    let timer = setInterval(() => {
      this.setState({clock: new Date().toLocaleTimeString()});
    }, 1000);
    this.setState({timer: timer});
  }

  componentWillMount() {
    console.log("componentWillMount");
    clearInterval(this.state.timer);
  }


  showHideClock() {
    this.setState({clock: new Date().toLocaleTimeString()});
    let clockSpan = document.getElementById("clockSpan");
    if (clockSpan !== null) {
      if (clockSpan.style.display === "block") {
        clockSpan.style.display = "none";
        this.componentWillMount();
        this.setState({buttonName: "Show Clock"})
      } else if (clockSpan.style.display === "none") {
        clockSpan.style.display = "block";
        this.componentDidMount();
        this.setState({buttonName: "Hide Clock"})
      } else {
        clockSpan.style.display = "none";
        this.componentWillMount();
        this.setState({buttonName: "Hide Clock"})
      }
    }
  }

  render() {
    return (
        <div>
          <div className="header1" id="header">
            <div className="width30Percent padding10px displayFlexRow">
              <div className="width20Percent displayFlexRow">
                <img src={HomeIcon} alt="home-icon" className="homeIconSize cursor" onClick={() => {
                  alert("Home Called");
                }}/>
              </div>
              <div className="width85Percent displayFlexRow">
                <span>&nbsp;Employee Attendance System</span>
              </div>
            </div>
            <div className="width50Percent clockSpan">
              <span id="clockSpan">{this.state.clock}</span>
            </div>
            <div className="width20Percent toggleClockButton">
              <ButtonComponent name={this.state.buttonName} onButtonClick={() => {
                this.showHideClock();
              }}/>
            </div>
          </div>
          <div className="header2"/>
          <div className="header3"/>
          <NavigationComponent/>
        </div>
    );
  }
}