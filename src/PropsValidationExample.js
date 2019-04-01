import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropsValidationExample extends Component {
  render() {
    return(
        <div>
          <h3>Array : {this.props.propArray}</h3>
          <h3>Boolean : {this.props.propBool ? "True..." : "False..."} </h3>
          <h3>Function : {this.props.propFunc(3)} </h3>
          <h3>Number : {this.props.propNumber} </h3>
          <h3>String : {this.props.propString} </h3>
          <h3>Object : {this.props.propObject.object1} </h3>
          <h3>Object : {this.props.propObject.object2} </h3>
          <h3>Object : {this.props.propObject.object3} </h3>
        </div>
    );
  }
}

PropsValidationExample.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func.isRequired,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
};

PropsValidationExample.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(e){return e},
  propNumber: 10,
  propString: "Hello World",
  propObject: {
    object1: "object 1",
    object2: "object 2",
    object3: "object 3"
  }
};


export default PropsValidationExample;