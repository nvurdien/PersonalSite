import React, { Component } from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import Sidebar from '../../components/Sidebar';
import {Particles} from "react-particles-js";
import '../../App.css';
import ContactForm from '../../components/ContactForm';

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
                <div style={{height:'100vh', width: '25vw', display:'flex', position: 'fixed', alignItems:'center'}}>
                    <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true" className='uk-position-cover uk-flex'>
                        <Particles className="particles"
                                   params={particlesOptions}
                        />
                    </div>

                    <div uk-scrollspy="cls: uk-animation-slide-top; repeat: true" className='uk-align-center'>
                        <Sidebar/>
                    </div>
                </div>

                <div id='back' style={{marginLeft:'25vw', paddingLeft: '10px', height:'calc(100vh)', minHeight:'calc(100vh)', overflow: 'scroll'}} className="uk-flex uk-position-cover uk-background-primary">

                    <div style={{height:'calc(100vh)', minHeight:'calc(100vh)'}} className='uk-section uk-align-center'>
                        <div className="uk-light">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;