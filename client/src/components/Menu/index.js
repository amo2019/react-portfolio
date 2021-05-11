// @ts-nocheck
import React from "react";
import {A} from 'hookrouter';

import s from "./styles.module.css";

const LandingPage = () => (
  
  <nav aria-label="Main navigation" className={s.navigation}>
   
      <div className={s.gridContainer}>
      <div>
           <A href="/portfolio" className="header_link" style={{position: "absolute", marginRight: "10px", marginLeft: "10px", paddingTop: "10px" }}>Portfolio - Amin Omar</A>
      </div>
    
      <div className={s.flexContainer} > 
            <A href="/resume" className="s.a_link">Resume</A>
            <A href="/aboutme" className="s.a_link">About Me</A>
            <A href="/projects" className="s.a_link">Projects</A>
            <A href="/contact" className="s.a_link">Contact</A>
      </div>
      </div>
       
  </nav>

);

export default LandingPage;
