import React from 'react';
import './style.css';
import Link from "react-router-dom/es/Link";
import * as Scroll from 'react-scroll'
import {Particles} from "react-particles-js";

const particlesOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800,
            }
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        },
        interactivity:{
            detect_on: "canvas",
            onhover:{
                enable:true,
                mode:"repulse",
            },
            onclick:{
                enable:true,
                mode:"push",
            },
            resize:true,
            modes: {
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        }
    }
};

export default ({page}) => (
    <div>
    <div className='uk-visible@s'>
        <div className="uk-flex uk-position-cover uk-background-secondary"/>
        <div style={{height:'100vh', width: '25vw', display:'flex', position: 'fixed', alignItems:'center'}}>
            <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true" className='uk-position-cover uk-flex'>
                <Particles className="particles"
                           params={particlesOptions}
                />
            </div>


            <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true" className='uk-align-center'>
        <ul className="uk-nav-primary uk-nav-parent-icon uk-align-center uk-light" uk-nav="">
            <li className={page === "home" ? "uk-active" : ""}><Link to="/" onClick={Scroll.animateScroll.scrollToTop()}>Home</Link></li>
            <li className={page === "blog" ? "uk-active" : ""}><Link to="/blog" onClick={Scroll.animateScroll.scrollToTop()}>Blog</Link></li>
            <li className={page === "projects" ? "uk-active" : ""}><Link to="/projects" onClick={Scroll.animateScroll.scrollToTop()}>Projects</Link></li>
            <li className={page === "resume" ? "uk-active" : ""}><Link to="/resume" onClick={Scroll.animateScroll.scrollToTop()}>Resume</Link></li>
            <li className={page === "contact" ? "uk-active" : ""}><Link to="/contact" onClick={Scroll.animateScroll.scrollToTop()}>Contact</Link></li>
        </ul>
    </div>
        </div>
    </div>
        <button className="uk-button uk-button-default uk-margin-small-right" type="button"
                uk-toggle="target: #offcanvas-usage">Open
        </button>
        <div className='uk-hidden@s uk-offcanvas-content'>
        </div>
        <div id='sidebar' className='uk-offcanvas-content' uk-offcanvas="">
            <div className="uk-flex uk-position-cover uk-background-secondary"/>
            <div style={{height:'100vh', width: '25vw', display:'flex', position: 'fixed', alignItems:'center'}}>
                <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true" className='uk-position-cover uk-flex'>
                    <Particles className="particles"
                               params={particlesOptions}
                    />
                </div>


                <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true" className='uk-align-center'>
                    <ul className="uk-nav-primary uk-nav-parent-icon uk-align-center uk-light" uk-nav="">
                        <li className={page === "home" ? "uk-active" : ""}><Link to="/" onClick={Scroll.animateScroll.scrollToTop()}>Home</Link></li>
                        <li className={page === "blog" ? "uk-active" : ""}><Link to="/blog" onClick={Scroll.animateScroll.scrollToTop()}>Blog</Link></li>
                        <li className={page === "projects" ? "uk-active" : ""}><Link to="/projects" onClick={Scroll.animateScroll.scrollToTop()}>Projects</Link></li>
                        <li className={page === "resume" ? "uk-active" : ""}><Link to="/resume" onClick={Scroll.animateScroll.scrollToTop()}>Resume</Link></li>
                        <li className={page === "contact" ? "uk-active" : ""}><Link to="/contact" onClick={Scroll.animateScroll.scrollToTop()}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);