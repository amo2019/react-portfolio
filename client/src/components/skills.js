import React, { Component } from "react";
import Progress from "./progress-bar/Progress-bar";

class Skills extends Component {
  render() {
    return (
      
  
          <div className="flex-skills">
            <div style={{marginLeft: "10px", flex: "1" }}>
            {this.props.skill}{" "}
            </div>
            <div style={{flex: "1" }}>
            <Progress
              done={this.props.progress}
            />
            </div>
            
            {"  "}
          </div>
     
     
    );
  }
}

export default Skills;
