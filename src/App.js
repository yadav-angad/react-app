import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          Hello World!!!
          <Header/>
          <Content/>
        </div>
    );
  }
}
class Header extends Component{
  render() {
    return(
        <div>
          <h1>
            Header
          </h1>
        </div>
    );
  }
}

class Content extends Component{
  render() {
    return(
        <div>
          <h1>
            Content
          </h1>
        </div>
    );
  }
}

export default App;
