import React, {Component} from 'react';
import ButtonComponent from "../component/ButtonComponent";

class EmployeeController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ["ID", "First Name", "Last Name", "Email", "Phone", "SSN"],
      middleContainer: [],
      employeeList: []
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  fetchEmployeeDetails() {
    let tableData = this.renderTable();
    document.getElementById("middleContainer").style.height = "calc(100% - 5px - 5px)";
    this.setState({
      middleContainer: tableData
    });
  }

  renderTableBody() {
    return this.state.employeeList.map((employee) => {
      const {id, firstName, lastName, email, phone, ssn} = employee;
      return (
          <div key={id} className="displayFlexRow width100Percent employeeDetails tableBody">
            <div className="width5Percent">{id}</div>
            <div className="width20Percent">{firstName}</div>
            <div className="width20Percent">{lastName}</div>
            <div className="width25Percent">{email}</div>
            <div className="width15Percent">{phone}</div>
            <div className="width15Percent">{ssn}</div>
          </div>
      )
    });
  }

  renderTable() {
    let tableBody = this.renderTableBody();
    return (
        <>
          <div className="displayFlexRow width100Percent employeeDetails tableHeader">
            <div className="width5Percent">ID</div>
            <div className="width20Percent">First Name</div>
            <div className="width20Percent">Last Name</div>
            <div className="width25Percent">Email</div>
            <div className="width15Percent">Phone</div>
            <div className="width15Percent">SSN</div>
          </div>
          {tableBody}
        </>
    );
  }

  renderEmployeeDetails() {
    fetch('http://localhost:8080/employees')
        .then(res => res.json())
        .then((data) => {
          this.setState({
            employeeList: data
          });
          this.fetchEmployeeDetails();
        }).catch(console.log);
  };

  render() {
    return (
        <div className="content divLeftAlign" id="content">
          <div className="width20Percent leftNavContainer">
            <div className="padding-left">
              <div className="divButton" onClick={() => {
                this.renderEmployeeDetails();
              }}>View Employee List</div>
            </div>
          </div>
          <div className="width80Percent middleContainer" id="middleContainer">
            {this.state.middleContainer}
          </div>
        </div>
    );
  }
}

 export default EmployeeController;