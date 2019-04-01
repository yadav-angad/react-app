import React, {Component} from 'react';
import ReactDom from 'react-dom'

class ComponentFindDOMNodeExample extends Component {
  constructor(){
    super();

    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  };

  findDomNodeHandler(){
    let myDiv = document.getElementById("myDiv");
    ReactDom.findDOMNode(myDiv).style.color = 'green';
  };

  render() {
    return (
        <div>
          <button onClick={this.findDomNodeHandler}>FIND DOM NODE</button>
          <div id='myDiv'>NODE</div>
        </div>
    );
  }
}

export default ComponentFindDOMNodeExample;