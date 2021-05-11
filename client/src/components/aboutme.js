import React, { Component } from "react";
import "./aboutme.css"

class About extends Component {
  render() {
    return (
      <div className="about-grid">
          <div className="inner-class">
          <h2>Amin Omar</h2>
          <h4 style={{ color: "grey", padding: "0 0" }}>
            frontend / backend JavaScript web developer
          </h4>
          <hr className="about-hr" />
          <p style={{ fontSize: "18px", textAlign: "left" }}>
            With a Bachelor’s degree in Computer Science (Software programming),
            I have more than twelve years of programming experience with
            different programming languages, in the last two years hands-on
            using JavaScript (front and back-end frameworks) to design and
            implement web applications. taking in consideration that enjoying
            programming and being creative comes from deep understanding and
            practicing to work as Web developer (Full-Stack web developer
            Boot-camp 2018-2020). I am hard worker, enjoy being challenged and
            love programming.
          </p>

          <hr className="about-hr" />
          <a
            className="header_link"
            href="https://github.com/amo2019?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default About;
