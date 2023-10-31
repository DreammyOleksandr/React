import React from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";

class CyclopediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("cyclopediaStorage")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedBack: "",
    };
  }

  componentDidMount = async () => {
    if (JSON.parse(localStorage.getItem("cyclopediaStorage"))) {
      //   this.setState(JSON.parse(localStorage.getItem("cyclopediaStorage")));
    } else {
      const response = await getRandomUser();
      console.log("Mount");
      console.log(response);

      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  };
  componentDidUpdate = () => {
    console.log("Update");
    localStorage.setItem("cyclopediaStorage", JSON.stringify(this.state));
  };
  componentWillUnmount = () => {
    console.log("Will UnMount");
  };

  handleAddStudent = () => {
    this.setState((prevState) => {
      return { studentCount: prevState.studentCount + 1 };
    });
  };
  handleRemoveAllStudents = () => {
    this.setState((prevState) => {
      return { studentCount: 0 };
    });
  };

  handleToggleInstructor = () => {
    this.setState((prevState) => {
      return { hideInstructor: !prevState.hideInstructor };
    });
  };

  render = () => {
    return (
      <div>
        <div className="p-3">
          <span className="h-4 text-success">Instructor</span>
          <i
            className={`bi
             ${
               this.state.hideInstructor === true
                 ? "bi-toggle-off"
                 : "bi-toggle-on"
             }  btn btn-success btn-sm`}
            onClick={this.handleToggleInstructor}
          ></i>
          {!this.state.hideInstructor ? (
            <Instructor instructor={this.state.instructor} />
          ) : null}
        </div>
        <div className="p-3">
          <span className="h-4 text-success">FeedBack</span>
          <br />
          <input
            type="text"
            placeholder="Name"
            value={this.state.inputName}
            onChange={(e) => {
              this.setState({ inputName: e.target.value });
            }}
          />{" "}
          {this.state.inputName}
          <br />
          <textarea
            placeholder="feedback"
            cols="30"
            rows="10"
            value={this.state.inputFeedBack}
            onChange={(e) => {
              this.setState({ inputFeedBack: e.target.value });
            }}
          ></textarea>{" "}
          {this.state.inputFeedBack}
        </div>

        <div className="p-3">
          <span className="h4 text-success">Students</span> <br />
          <span>Student Count: {this.state.studentCount}</span> <br />
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add student
          </button>
          &nbsp;
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleRemoveAllStudents}
          >
            Remove all students
          </button>
        </div>
      </div>
    );
  };
}

export default CyclopediaClassPage;
