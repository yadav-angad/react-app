import React, {Component} from "react";

export default class UserFormController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      agree: '',
      group1: '',
      selectDropdown: ''


    }
  }

  clearForm = () => {

  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checked" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('form Submitted : ' + this.state);
  };



  render() {
    return (
        <div className="content width100Percent" id="content">
          <div className="displayFlexRowCenter">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text"
                       name="name"
                       value=""
                       placeholder="Enter Name"
                       onChange={this.handleInputChange}/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="text"
                       name="email"
                       value=""
                       placeholder="Enter e-mail address"
                       onChange={this.handleInputChange}/>
              </div>
              <div>
                <label htmlFor="agree">Do you agree</label>
                <input type="checkbox"
                       name="agree"
                       onChange={this.handleInputChange}/>
              </div>
              <div>
                <label htmlFor="group1">Which do you prefer</label>
                <p>
                  <label htmlFor="radio1">Option 1</label>
                  <input id="radio1" type="radio" name="group1" value="option1" onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="radio2">Option 2</label>
                  <input id="radio2" type="radio" name="group1" value="option2" checked onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="radio3">Option 3</label>
                  <input id="radio3" type="radio" name="group1" value="option3" onChange={this.handleInputChange}/>
                </p>
                OR these options?
                <p>
                  <label htmlFor="radio4">Option 1</label>
                  <input id="radio4" type="radio" name="group2" value="option4" onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="radio5">Option 2</label>
                  <input id="radio5" type="radio" name="group2" value="option5" onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="radio6">Option 3</label>
                  <input id="radio6" type="radio" name="group2" value="option6" checked onChange={this.handleInputChange}/>
                </p>
              </div>
              <div>
                <label htmlFor="textarea">Text Area</label>
                <textarea id="textarea" name="textarea" onChange={this.handleInputChange} value="hello" />
              </div>
              <div>
                  <label htmlFor="selectDropdown">Select</label>
                  <select id="select-dropdown" name="selectDropdown" onChange={this.handleInputChange} value="2">
                    <option value="0">Banana</option>
                    <option value="1">Apple</option>
                    <option value="2">Grape</option>
                    <option value="3">Orange</option>
                    <option value="4">Pair</option>
                    <option value="5">Avocado</option>
                  </select>
              </div>
              <div>
                <button type="reset">
                  Reset
                </button>
              </div>
              <div>
                <button type="submit">
                  Submit
                </button>
              </div>
              <div>
                <button type="button">
                  Button
                </button>
              </div>
            </form>
          </div>
        </div>
    );
  }
}