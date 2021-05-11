import React, { Component } from "react";
import "./procard.css"

class Procard extends Component {
  render() {
    console.log("img:", this.props.imageLink)
    return (
      <div className="flex-procard">
      <div  shadow={5} style={{ minWidth: "360"}}>
        <div
          className="pic"
          style={{
            height: "220px",
            width: "360px",
            margin: "auto",
            background: `url(${this.props.imageLink}) center / cover`,
          }}
        >
          {/*  Project # */}
        </div>
        <div className='new-line'>{this.props.projectDescription}</div>
        <div  style={{borderTop: "1px solid rgba(0, 0, 0, 0.1)", padding: "8px",
display: "block", textAlign: "center"}}>
          <button className="flex-button">
            <a
              href={this.props.github}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: "green" }}
            >
              GitHub
            </a>
          </button>
          <button className="flex-button">
            CodePen
          </button>

          <button className="flex-button">
            <a
              href={this.props.projectLink}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold" }}
            >
              Live Demo
            </a>
          </button>
        </div>
        <div style={{ color: "green" }}>
          <i name="share" />
        </div>
      </div>
      </div>
    );
  }
}

export default Procard;
