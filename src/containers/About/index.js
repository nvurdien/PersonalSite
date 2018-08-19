import React, { Component } from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import {Particles} from "react-particles-js";
import '../../App.css';
import * as Scroll from "react-scroll/modules/index";
import Link from "react-router-dom/es/Link";
import './style.css'

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

class App extends Component {
    render() {
        return (
            <div>
                <div className="uk-flex uk-position-cover uk-background-secondary"/>
                <div style={{height:'100vh', width: '100vw', display:'flex', position: 'fixed', alignItems:'center'}}>

                    <div className='uk-background-cover uk-position-cover'>
                        <Particles className="particles"
                                   params={particlesOptions}
                        />

                    </div>

                    <div className='uk-align-center uk-text-center'>
                        <div className="uk-card uk-border-rounded uk-card-secondary uk-box-shadow-large uk-card-body">
                            <h3 className="uk-card-title">Welcome</h3>
                            <p>This site is about <b>Navie Vurdien</b></p>
                        </div>

                        <nav className="uk-navbar-container uk-margin uk-box-shadow-large" uk-navbar="">
                            <div className="uk-navbar-center uk-light uk-background-secondary">
                                    <div>
                                        <ul className="uk-navbar-nav">
                                            <li className='no'><Link to="/" onClick={Scroll.animateScroll.scrollToTop()}>Home</Link></li>
                                            <li className='no'><Link to="/blog" onClick={Scroll.animateScroll.scrollToTop()}>Blog</Link></li>
                                            <li className='no'><Link to="/projects" onClick={Scroll.animateScroll.scrollToTop()}>Projects</Link></li>
                                            <li className='no'><Link to="/resume" onClick={Scroll.animateScroll.scrollToTop()}>Resume</Link></li>
                                            <li className='no'><Link to="/contact" onClick={Scroll.animateScroll.scrollToTop()}>Contact</Link></li>
                                        </ul>
                                    </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;