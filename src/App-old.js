import React, { Component } from 'react';
import './css/App.css';
import './css/style.css'
import ButtonComponent from "./component/ButtonComponent";
import HeaderComponent from "./component/HeaderComponent";
import ContentComponent from "./component/ContentComponent";
import FooterComponent from "./component/FooterComponent";

class App extends Component {
  render() {
    return (
        <div align="center">
          <HeaderComponent headerName="Training Site"/>
          <ButtonComponent onButtonClick={() => {
            alert("Button Clicked");
          }}/>
          <ContentComponent content="Hello World !!!"/>
          <FooterComponent/>
        </div>
    );
  }
}

export default App;
