import React, { Component } from "react";
import logo from "../photos/IMG-AA.png";
import "./contact.css"
class Contact extends Component {
  render() {
    return (
      <div className="contact-grid">
        <div className="mdl-cell-1">
          <h2>Amin Omar</h2>
          <img src={logo} alt="avatar" style={{ height: "200px", maxWidth: "160px" }} />
          <p
            style={{
              width: "95%",
              margin: "auto",
              paddingTop: "0.5em",
              paddingBottom: "0.5em",
              textAlign: "left",
            }}
          >
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
        </div>
        <div className="mdl-cell-2">
          <h2>Contact</h2>
          <hr className="about-hr" />

          <div className="contact-div">
            <div>
              <div>
                <div
                  style={{
                    fontSize: "19px",
                    fontFamily: "Oxygen, sans-serif",
                    marginLeft: "15px",
                  }}
                >
                  <i className="fa fa-mobile" aria-hidden="true" />
                  (151) 671-66905
                </div>
              </div>

              <div>
                <div>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  aminmail@protonmail.com
                  <hr className="about-hr" />
                  <h3>Address</h3>
                  <p>Dresden 01309, Germany</p>
                  <hr className="about-hr" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
