import React, { lazy } from 'react';

const LandingPage = lazy(() => import( './LandingPage'));
const AboutMe = lazy(() => import('./aboutme'));
const Contact = lazy(() => import('./contact'));
const Projects = lazy(() => import('./projects'));
const Resume = lazy(() => import('./resume'));

const routes = {
  "/": () => <LandingPage />,
  "/portfolio": () => <LandingPage />,
  "/aboutme": () => <AboutMe />,
  "/contact": () => <Contact />,
  "/projects": () => <Projects />,
  "/resume": () => <Resume />
};
export default routes;
