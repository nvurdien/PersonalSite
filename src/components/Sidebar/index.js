import React from 'react';
import './style.css';
import Link from "react-router-dom/es/Link";
import * as Scroll from 'react-scroll'

export default () => (
    <div>
        <ul className="uk-nav-primary uk-nav-parent-icon uk-align-center uk-light" uk-nav="">
            <li><Link to="/" onClick={Scroll.animateScroll.scrollToTop()}>Home</Link></li>
            <li><Link to="/blog" onClick={Scroll.animateScroll.scrollToTop()}>Blog</Link></li>
            <li><Link to="/projects" onClick={Scroll.animateScroll.scrollToTop()}>Projects</Link></li>
            <li><Link to="/resume" onClick={Scroll.animateScroll.scrollToTop()}>Resume</Link></li>
            <li><Link to="/contact" onClick={Scroll.animateScroll.scrollToTop()}>Contact</Link></li>
        </ul>
    </div>
);