import React, {Component} from "react";

export default class HeaderComponent extends Component {
  clock = new Date().toLocaleTimeString();
  constructor(props) {
    super(props);
    this.state = {
      clock: ''
    };
    this.showHideClock = this.showHideClock.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    let timer = setInterval(() => {
      this.setState({clock : new Date().toLocaleTimeString()});
    }, 1000);
    this.setState({ timer: timer })
  }

  componentWillMount() {
    console.log("componentWillMount");
    clearInterval(this.state.timer);
  }


  showHideClock() {
    this.setState({clock : new Date().toLocaleTimeString()});
    let clockSpan = document.getElementById("clockSpan");
    if (clockSpan !== null) {
      if (clockSpan.style.display === "block") {
        clockSpan.style.display = "none";
        this.componentWillMount();
      } else if (clockSpan.style.display === "none") {
        clockSpan.style.display = "block";
        this.componentDidMount();
      } else {
        clockSpan.style.display = "none";
        this.componentWillMount();
      }
    }
  }

  render() {
    return (
        <div>
          <div className="header1">
            <div className="width80Percent">Employee Attendance System</div>
            <div className="width20Percent clockSpan" id="clockSpan" >
              <ul>{this.state.clock}</ul>
            </div>
          </div>
          <div className="header2"></div>
          {/*<div>*/}
          {/*  <button onClick={() => {*/}
          {/*    this.showHideClock();*/}
          {/*  }}>Show Clock*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
    );
  }
}