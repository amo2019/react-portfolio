// @ts-nocheck
import React from "react";
import s from "./styles.module.css";

const LandingPage = () => (
  <section className={s.gridContainer}>
    <div className={s.flexContainer}>
      <div className={s.text}>
        <div>
          <h2 style={{ color: "white" }}>FERONEND / BACKEND JAVASCRIPT WEB DEVELOPER</h2>
          <p style={{ color: "white" }}>
              HTML/CSS | JavaScript | React | React Native | NodeJS | Express |
              MongoDB | Docker and Kubernetes | TypeScript | PostgreSQL
            </p>

        </div >
        <div className={s.socialLinks}>
             {/* LinkedIn */}
             <a href="/" rel="noopener noreferrer" aria-label="Github" target="_blank" rel="noopener" class="social-icon Github grayscale">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="https://github.com/amo2019?tab=repositories"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Github" class="social-icon Github grayscale"
              >
                <i
                  className="fa fa-github-square"
                  aria-hidden="true"
                  style={{ marginLeft: "8px", marginRight: "8px" }}
                />
              </a>

              {/* Freecodecamp */}
              {/*  <a href="#" rel="noopener noreferrer">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a> */}

              {/* Youtube */}
              <a href="/" rel="noopener noreferrer" aria-label="youtube" target="_blank" rel="noopener" class="social-icon youtube grayscale">
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
        </div>
      </div>
    </div>
  </section>
);

export default LandingPage;
