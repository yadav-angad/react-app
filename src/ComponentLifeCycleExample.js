import React from 'react';

class ComponentLifeCycleExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber() {
    this.setState({data: this.state.data + 1})
  }
  render() {
    return (
        <div>
          <button onClick = {this.setNewNumber}>INCREMENT</button>
          <Content myNumber = {this.state.data}></Content>
        </div>
    );
  }
}
class Content extends React.Component {
  componentWillMount() {
    console.log('component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
    console.log('component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('component WILL UNMOUNT!')
  }
  render() {
    return (
        <div>
          <h3>{this.props.myNumber}</h3>
        </div>
    );
  }
}
export default ComponentLifeCycleExample;