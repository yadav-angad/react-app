import React, {Component} from 'react';
import './css/App.css';
import './css/style.css'
import ButtonComponent from "./Component/ButtonComponent";
import HeaderComponent from "./Component/HeaderComponent";
import ContentComponent from "./Component/ContentComponent";
import FooterComponent from "./Component/FooterComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'success'
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    const alertType = ["info", "error", "alert", "success"];
    let result = alertType[Math.floor(Math.random() * alertType.length)];
    this.setState({value: result});
  };

  render() {
    return (
        <div align="center">
          <HeaderComponent headerName="Training Site"/>
          <ButtonComponent onButtonClick={() => {
            this.updateState();
          }}/>
          <br/>
          <ContentComponent content={this.state.value} notificationType={this.state.value}/>
          <FooterComponent/>
        </div>
    );
  }
}

export default App;
