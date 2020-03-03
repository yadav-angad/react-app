import React, { Component } from 'react';
import './css/App.css';
import './css/style.css'
import ButtonComponent from "./Component/ButtonComponent";
import HeaderComponent from "./Component/HeaderComponent";
import ContentComponent from "./Component/ContentComponent";
import FooterComponent from "./Component/FooterComponent";

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
