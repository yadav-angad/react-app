import React, {Component} from "react";
import ButtonComponent from "../component/ButtonComponent";
import {Link} from "react-router-dom";
import "react-bootstrap/"

const fruits = ['Banana', 'Apple', 'Grape', 'Orange', 'Pears'];
const gender = [
  {"label": "Male", "value": "male"},
  {"label": "Female", "value": "female"}
];

export default class UserFormController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      agree: false,
      gender: '',
      selectDropdown: 'Apple',
      aboutYou: ''
    }
  }

  resetHandler = (e) => {
    e.preventDefault();
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      agree: false,
      gender: '',
      selectDropdown: 'Apple',
      aboutYou: ''
    })
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log("name : " + name + " value : " + value);

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('form Submitted : ', this.state);
  };


  renderDropDown() {
    return fruits.map((value, index) => {
      return (
          <option key={value + index} value={value + index}>{value}</option>
      );
    });
  }

  renderGenderSection() {
    return gender.map(({label, value}, index) => {
      return (
          <div key={index}>
            <input id="radio1"
                   type="radio"
                   name="gender"
                   value={value}
                   onChange={this.handleInputChange}/>
            <label htmlFor="radio1">{label}</label>
          </div>
      )
    })
  }

  render() {
    return (
        <div className="content width100Percent" id="content">
          <div className="width100Percent displayFlexRowCenter">
            <form onSubmit={this.handleSubmit} className="width40Percent middleContainer">
              <div className="displayFlexRowCenter">
                <h3>Fill User Details and Submit</h3>
              </div>
              <div className="displayFlexRow padding10px">
                <div className="width20Percent displayFlexRow">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="width80Percent displayFlexRow field">
                  <input type="text"
                         name="name"
                         size="55"
                         value={this.state.name}
                         placeholder="Enter Name"
                         onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="displayFlexRow padding10px">
                <div className="width20Percent displayFlexRow">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="width80Percent displayFlexRow">
                  <input type="text"
                         name="email"
                         size="55"
                         value={this.state.email}
                         placeholder="Enter e-mail address"
                         onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="displayFlexRow padding10px">
                <div className="width20Percent displayFlexRow">
                  <label htmlFor="gender">Gender</label>
                </div>
                <div className="width20Percent displayFlexColumnAlignItemsLeft">
                  {this.renderGenderSection()}
                </div>
              </div>
              <div className="displayFlexRow padding10px">
                <div className="width20Percent displayFlexRow">
                  <label htmlFor="selectDropdown">Select</label>
                </div>
                <div className="width80Percent displayFlexRow">
                  <select id="select-dropdown"
                          name="selectDropdown"
                          onChange={this.handleInputChange}
                          value={this.state.selectDropdown}>
                    {this.renderDropDown()}
                  </select>
                </div>
              </div>
              <div className="displayFlexRow padding10px">
                <div className="width20Percent displayFlexRow">
                  <label htmlFor="aboutYou">About You</label>
                </div>
                <div className="width80Percent displayFlexRow">
                  <textarea id="aboutYou"
                            name="aboutYou"
                            onChange={this.handleInputChange}
                            placeholder="Describe about you in 200 words."
                            rows="5"
                            cols="50"
                            value={this.state.aboutYou}/>
                </div>
              </div>
              <div className="displayFlexRow padding10px">
                <div className="displayFlexRow">
                  <input type="checkbox"
                         name="agree"
                         checked={this.state.agree}
                         onChange={this.handleInputChange}/>
                  <label htmlFor="agree">Agree to Terms and Conditions: </label>
                </div>

              </div>
              <div className="displayFlexRow">
                <div className="width50Percent displayFlexRowCenterFloatRight padding10px">
                  <ButtonComponent name="Submit" onButtonClick={this.handleSubmit}/>
                </div>
                <div className="width50Percent displayFlexRowCenterFloatLeft padding10px">
                  <ButtonComponent name="Reset" onButtonClick={this.handleSubmit}/>
                </div>
              </div>
            </form>
          </div>
          <ul>
            <li>
              <Link to="/userData/1?fName=Angad&lName=Yadav">Angad</Link>
            </li>
            <li>
              <Link to="/userData/2?fName=Test1&lName=Yadav">Test1</Link>
            </li>
            <li>
              <Link to="/userData/3?fName=Test2&lName=Yadav">Test2</Link>
            </li>
          </ul>
        </div>
    );
  }
}