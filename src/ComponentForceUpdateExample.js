import React, {Component} from 'react';

class ComponentForceUpdateExample extends Component {
  constructor(){
    super();

    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler() {
    this.forceUpdate();
  };
  render() {
    return (
        <div>
          <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
          <h4>Random Number : {Math.random()} </h4>
        </div>
    );
  }
}

export default ComponentForceUpdateExample;