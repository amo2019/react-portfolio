// @ts-nocheck
import React, { useState } from 'react';
import {A} from 'hookrouter';
import { push as Menu } from 'react-burger-menu';
import { AnimatedUl, AnimatedLi } from '../Animated';

import './styles.css';

const list = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  hidden: { opacity: 0, scale: 0.5 },
};

const items = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 10 },
};

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <Menu
      right
      disableAutoFocus
     
      isOpen={ open }
      onStateChange={({ isOpen }) => {setTimeout(() => setOpen(isOpen), 50)}}
    >
      {open ? (
        <AnimatedUl initial="hidden" animate="visible" variants={list}>
               <AnimatedLi variants={items}>
            <A href="/portfolio" className="menu-item" onClick={(isOpen)=>{setOpen(!isOpen); scrollToTop();}}>Home</A>
            </AnimatedLi>
            <AnimatedLi variants={items}>
            <A href="/resume" className="menu-item" onClick={(isOpen)=>{setOpen(!isOpen); scrollToTop();}}>Resume</A> 
            </AnimatedLi>
            <AnimatedLi variants={items} >
              <A href="/aboutme" className="menu-item" onClick={(isOpen)=>{setOpen(!isOpen); scrollToTop();}}>About Me</A>
            </AnimatedLi>
            <AnimatedLi variants={items}>
              <A href="/projects" className="menu-item" onClick={(isOpen)=>{setOpen(!isOpen); scrollToTop();}}>Projects</A>
            </AnimatedLi>
            <AnimatedLi variants={items}>
              <A href="/contact" className="menu-item" onClick={(isOpen)=>{setOpen(!isOpen); scrollToTop();}}>Contact</A>
            </AnimatedLi>
        </AnimatedUl>
      ) : (
        false
      )}
    </Menu>
  );
};

export default LandingPage;
