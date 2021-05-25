import React, { Component } from "react";
import Education from "./education";
import Experience from "./experience";
import Activities from "./activities";
import Skills from "./skills";
import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <div
        style={{
          background: "white",
          justifyContent: "center",
          textAlign: "center",
          
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h2>Education</h2>

          <Education
            startYear={1994}
            endYear={1999}
            schoolName="My University"
            schoolDescription="I hold a BSc in Software Programming From University of Tripoli (1999) 
Graduate Project: Word processor and Spell Checker, that include solving the problem of DOS memory limitation, by using linked lists, very quick hashing table algorithms to simulate the human method of direct searching through Dictionaries (slicing) in addition to coding functions for pagination, garbage collectors, transforming large documents into dictionaries, debugger and Unicode encoding (C Language)."
          />

          <hr style={{ borderTop: "3px solid #096816" }} />

          <h2>Experience</h2>

          <Experience
            startYear={2001}
            endYear={2005}
            jobName="First Job"
            jobDescription="Job in the Municipal House as Software Programmer / Sabrata-Libya. designed and programmed applications for collecting citizens info, Municipal House Employees (Delphi Language)."
          />
          <hr style={{ borderTop: "3px solid #096816" }} />
          <Experience
            startYear={2006}
            endYear={2008}
            jobName="Second Job"
            jobDescription="Job in the African Oncology Institute as Software Programmer / Sabrata-Libya. Developed local network applications to access a databases via SQL queries with user friendly interfaces, Designing and Programming applications for Main Stock management, chemical storehouses, Pharmacy, Statistics, Reception, Archives, Employees, Cancer Registration, Applications of Epidemiology (ICD-10 Coding System) those speed up the work with high accuracy by applying strict rules on the back and front end, editable auto-completion rules, to avoid human mistakes and application for digital archiving (Delphi Language)"
          />
          <hr style={{ borderTop: "3px solid #096816" }} />
          <Experience
            startYear={2009}
            endYear={2010}
            jobName="Third Job"
            jobDescription="Job in the Ministry of Health as Director of Information and Statistics Department and Software Programmer, I have programmed Applications for statistical data and training end-users, and application for digital archiving (Delphi Language). 
Developed High Performance Applications for Private Sectors, Developed interfaces to various merchandise management systems (Delphi, C# languages)."
          />
          <hr style={{ borderTop: "3px solid #096816" }} />
          <Experience
            startYear={2010}
            endYear={2012}
            jobName="Forth Job"
            jobDescription="Job as technical support, Training and guiding NID/e-Passport staff, troubleshooting Issues related to network, database and server room within GIT (Global Information Technology)."
          />
          <hr style={{ borderTop: "3px solid #096816" }} />

          <Activities
            activityName="Current Activity"
            activityDescription="I have finished Web Development courses and practicing to get back into the workforce to work as Full-Stack web developer, the courses include: JavaScript, React-Redux, NodeJS, CSS3, HTML5, Docker and Kubernetes, GraphQL, Typescript, PWA, Git-GitHub, Web Design and many others (Courses, books and practicing)."
          />
          <hr style={{ borderTop: "3px solid #096816" }} />

          <Activities
            activityName="Additional Information"
            activityDescription="-good knowledge of Operating Systems (Windows, macOS, Linux) and networks, code
optimization  and hardware architecture.                                            
- Languages: English and German."
          />
       
          <hr style={{ borderTop: "3px solid #096816" }} />
          <h2>Skills</h2>
        <div>
          <Skills skill="javascript" progress={90} />
          <Skills skill="HTML/CSS" progress={90} />
          <Skills skill="NodeJS" progress={90} />
          <Skills skill="React" progress={90} />
        </div>
      </div>
    </div>
    );
  }
}

export default Resume;
