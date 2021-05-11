import React, { Component } from "react";
import { Tabs, TabList, Tab } from "react-tabs";
import "./tabs.css";
import "./projects.css";
import Procard from "./procard";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Procard
            imageLink="https://amo2019.github.io/media-sample-files/portfolio/Getting-started-with-Reactjs.png"
            projectLink="https://youtube-scraper.netlify.app"
            projectDescription="This is Youtube Scraper Web App"
            github="https://github.com/amo2019/youtube-scraper"
          />
          <Procard
            imageLink="https://amo2019.github.io/media-sample-files/portfolio/Getting-started-with-Reactjs.png"
            projectLink="https://dice-rolling.netlify.app"
            projectDescription="This Is Dice Roll Web App Game"
            github="https://github.com/amo2019/roll-the-dice"
          />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Procard
            imageLink="https://amo2019.github.io/media-sample-files/portfolio/nodejs-icon-2.png"
            projectLink="https://pizza-store-web-app.herokuapp.com"
            projectDescription="This is Pizza store app (NodeJS-Vanella Javascript no third party libraries (task):         
Hi Amin Omar,
Great job on your Assignment!
Your submission for Homework Assignment #5 in The Node.js Master Class is now approved. 
Thanks for spending the time to get that in.
Cheers,
Pirple.com Support)"
            github="https://github.com/amo2019/pizza-app-nodejs"
          />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Procard
            imageLink="https://amo2019.github.io/media-sample-files/portfolio/javascript3.svg"
            projectLink="https://amo2019.github.io/vanilla-js-shopping-app/"
            projectDescription="This is a shopping App written in pure JavaScript."
            github="https://github.com/amo2019/vanilla-js-shopping-app"
          />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Procard
            imageLink="https://amo2019.github.io/media-sample-files/portfolio/mern-firebase.jpeg"
            projectLink="https://employees-shift.herokuapp.com"
            projectDescription="This is an app to contact Employees to inform them about their Shifts!"
            github="https://github.com/amo2019/employees-shift"
          />
          {/* Project 2 */}
          <Procard
            imageLink="https://amo2019.github.io/media-sample-files/portfolio/mern.jpeg"
            projectLink="https://react-redux-survey-app.herokuapp.com"
            projectDescription="This is web app to collect feedback from end users!"
            github="https://github.com/amo2019/surveying-app"
          />

          {/* Project 3 */}
          <Procard
            imageLink="https://amo2019.github.io/media-sample-files/portfolio/mern-firebase.jpeg"
            projectLink="https://react-saga-shopping-app.herokuapp.com"
            projectDescription="This is cloths shopping web app"
            github="https://github.com/amo2019/ecommerce-app"
          />
        </div>
      );
    }
  }

  render() {
    return (
      <section>
      <div style={{ display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      justifyItems: "center",
      padding: ".5rem"}}
      
      >
    
        <Tabs
          style={{ margin: "auto" }}
          selectedIndex={this.state.activeTab}
          onSelect={index => {this.setState({ activeTab: index }); console.log("index:",index)}}
          
        >
          <TabList style={{ margin: "auto" }}>
          <Tab style={{ fontWeight: "bold", color: "green" }}>React</Tab>
          <Tab style={{ fontWeight: "bold", color: "green" }}>NodeJS</Tab>
          <Tab style={{ fontWeight: "bold", color: "green" }}>JavaScript</Tab>
          <Tab style={{ fontWeight: "bold", color: "green" }}>MERN</Tab>
          </TabList>
        </Tabs>

        <div className="projects-grid">
          <div className="inner-class">
            <div >{this.toggleCategories()}</div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default Projects;
