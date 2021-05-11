import React, { Component } from "react";

class Activities extends Component {
  render() {
    return (
      <div className="resume-grid">
          <div className="cell-8">
          <h4 style={{ marginTop: "0px" }}>{this.props.activityName}</h4>
       
          <p>{this.props.activityDescription}</p>
        </div>
      </div>
    );
  }
}

export default Activities;
