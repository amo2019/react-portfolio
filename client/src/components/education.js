import React, { Component } from "react";
import "./resume.css";
class Education extends Component {
  render() {
    return (
      <div className="resume-grid">
        <div className="cell-4">
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </div>
        <div className="cell-8">
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
        </div>
      </div>
    );
  }
}

export default Education;
