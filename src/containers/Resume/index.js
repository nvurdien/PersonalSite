import React, { Component } from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import Sidebar from '../../components/Sidebar';
import {Particles} from "react-particles-js";
import '../../App.css';

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
                    <div uk-scrollspy="cls: uk-animation-slide-top; repeat: true" className='uk-position-cover uk-flex'>
                        <Particles className="particles"
                                   params={particlesOptions}
                        />
                    </div>

                    <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true" className='uk-align-center'>
                        <Sidebar/>
                    </div>
                </div>

                <div id='back' style={{marginLeft:'25vw', paddingLeft: '10px', paddingRight: '10px', height:'calc(100vh)', minHeight:'calc(100vh)', overflow: 'scroll'}} className="uk-flex uk-position-cover uk-background-primary">



                    <div style={{height:'calc(100vh)', minHeight:'calc(100vh)'}} className=''>

                        <ul className="uk-margin-top uk-margin-left uk-margin-right" uk-tab="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                            <li><a href="#projects"  className='white'>Projects</a></li>
                            <li><a href="#work"  className='white'>Work Experience</a></li>
                            <li><a href="#prof"  className='white'>Professional Associations</a></li>
                            <li><a href="#education"  className='white'>Education</a></li>
                            <li><a href="#skills" className='white'>Skills</a></li>
                            <li><a href="#awards" className='white'>Awards</a></li>
                        </ul>

                        <ul className="uk-switcher uk-margin">
                            <li>
                                <div className="uk-card uk-light uk-card-body" style={{marginBottom: '10px'}}>
                                    <p>
                                        <b>ECS Leadership and Diversity Summit</b>
                                        <br/><i>February 2018 - April 2018</i>
                                    </p>
                                    <p>• Designed website using UIkit CSS framework, ReactJS, CSS, HTML, Javascript and deployed
                                        on an Ubuntu server with Apache<br/>
                                        • Incorporated automate features that added registration form information to a row on a Google
                                        Sheet with Appscript and automate.io to subscribe users to MailChimp</p>
                                    <hr className='uk-divider-small uk-text-center'/>
                                    <p>
                                        <b>Face Detection</b>
                                        <br/><i>March 2018</i>
                                    </p>
                                    <p>• Developed ReactJS front-end and NodeJS back-end with Clarifai API in order to detect faces
                                        in an image while also allowing for login and saving number of entries in a PostgreSQL database <br/>
                                        • Deployed back-end, front-end and database with Heroku</p>
                                    <hr className='uk-divider-small uk-text-center'/>
                                    <p>
                                        <b>B-Gun</b>
                                        <br/><i>February 2018</i>
                                    </p>
                                    <p>• Developed ReactJS front-end and NodeJS back-end website with team of 4 at 24-hour
                                        hackathon, AthenaHacks and featured on Major League Hackings’ Facebook page<br/>
                                        • Stored background check information with blockchain technology via Tierion API allowing for
                                        a safe and transparent way of sharing private information between government agencies<br/>
                                        • Deployed front-end with Firebase and deployed back-end and database with Microsoft Azure</p>

                                </div>
                            </li>
                            <li>
                                <div className='uk-card uk-light uk-card-body' style={{marginBottom: '10px'}}>
                                    <p>
                                        <b>Software Developer Intern</b> @ LOCATE Inventory
                                        <br/><i>November 2017 - February 2018</i>
                                    </p>
                                    <p>• Implemented back-end support for third party payment processing with the Laravel
                                        framework to allow clients to accept payment via Stripe or Paypal<br/>
                                        • Optimized MySQL database with stored procedures, speeding up I/O by 20%<br/>
                                        • Included design improvements to follow three-click rule within MVC patterns for increased
                                        modularity</p>
                                    <hr className='uk-divider-small uk-text-center'/>
                                    <p>
                                        <b>Supplemental Instruction</b> @ California State University, Fullerton
                                        <br/><i>August 2017 - December 2017</i>
                                    </p>
                                    <p>• Lead sessions that reinforce student’s knowledge on information presented in class<br/>
                                        • Plan activities and create worksheets based on previous lecture to offer an in-depth knowledge
                                        in object oriented programming and data structures classes in C++<br/>
                                        • Identify and helped fix errors in student’s code to pass all Travis CI test cases and introduce
                                        optimal programming strategies</p>
                                    <hr className='uk-divider-small uk-text-center'/>
                                    <p>
                                        <b>Research Assistant</b> @ California State University Fullerton
                                        <br/><i>March 2017 - August 2017</i>
                                    </p>
                                    <p>• Funded by the Department of Defense to create an offline tone analyzer that checks the
                                        mental state of an individual with team of 4<br/>
                                        • Experimented the usage of multiple machine learning algorithms including anomaly detection,
                                        clustering and classification to explain to team members the advantages and disadvantages of
                                        certain algorithms<br/>
                                        • Presented research at IEEE conference to inform the public about the issue and our solution</p>
                                </div>
                            </li>
                            <li>
                                <div className='uk-card uk-light uk-card-body' style={{marginBottom: '10px'}}>
                                    <p>
                                        <b>Webmaster</b> @ Association for Computing Machinery Club
                                        <br/><i>May 2017 - May 2018</i>
                                    </p>
                                    <p>• Maintain and designed ACM website using UIkit, ReactJS, CSS, HTML, PHP and Javascript<br/>
                                        • Prepared and taught two web development workshops in CSS, HTML and Javascript for
                                        students to create a personal site<br/>
                                        • Instructed separate web development workshop at university’s first hackathon, TitanHacks, to
                                        quickly overview important concepts in HTML, CSS and Javascript<br/>
                                        • Held position of judge at TitanHacks to offer technical feedback and evaluate projects</p>
                                    <hr className='uk-divider-small uk-text-center'/>
                                    <p>
                                        <b>Marketing</b> @ Association for Computing Machinery Club
                                        <br/><i>January 2017 - May 2017</i>
                                    </p>
                                    <p>• Designed flyers and advertisements using Microsoft Word, Adobe InDesign, Adobe Illustrator
                                        and Adobe Photoshop to promote events within the club</p>
                                    <hr className='uk-divider-small uk-text-center'/>
                                    <p>
                                        <b>Project Manager</b> @ Association for Computing Machinery - Women Club
                                        <br/><i>February 2017 - May 2017</i>
                                    </p>
                                    <p>• Directed team of 8 in creating and teaching 50 girls scouts the basics of using and setting up a
                                        raspberry pi along with mentoring them in creating a blinking LED program<br/>
                                        • Organized university’s first leadership and diversity summit with team of 12 to connect
                                        students with professionals and expose them to life after college</p>
                                </div>
                            </li>
                            <li>
                                <div className='uk-card uk-light uk-card-body' style={{marginBottom: '10px'}}>
                                    <p>
                                        <b>Bachelor of Science </b> in Computer Science @ California State University, Fullerton
                                        <br/>with a Minor in Mathematics
                                        <br/><i>August 2015 - May 2018</i><br/>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className='uk-card uk-light uk-card-body' style={{marginBottom: '10px'}}>
                                    <p>
                                        <b>Front-end:</b> ReactJS, JQuery, Javascript, CSS/HTML<br/>
                                        <b>Back-end:</b> Flask, Node.js, Express.js, Laravel, Django<br/>
                                        <b>Developer Tools & Languages:</b> Git, SQL, Java, C++, PHP, AWS, GCP, Azure<br/>
                                        <b>Adobe:</b> Photoshop, Illustrator, InDesign
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className='uk-card uk-light uk-card-body' style={{marginBottom: '10px'}}>
                                    <p>
                                        <b>President's Award</b> @ Girl Scouts of Orange County Recognition
                                        <br/><i>June 2017</i><br/>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;