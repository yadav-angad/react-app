import React, {Component} from "react";

export default class ErrorHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error, errorInfo});
  }

  render() {
    if(!!this.state.errorInfo){
      return (
          <div>
            {this.state.error.toString()}
          </div>
      );
    }
    return this.props.children;
  }
}