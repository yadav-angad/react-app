import React, {Component} from 'react';
import './css/App.css';
import './css/style.css'
import HeaderComponent from "./Component/HeaderComponent";
import ContentComponent from "./Component/ContentComponent";
import FooterComponent from "./Component/FooterComponent";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div align="center">
          <HeaderComponent headerName="Training Site"/>
          <ContentComponent content="Hello World !!!"/>
          <FooterComponent/>
        </div>
    );
  }
}

export default App;
