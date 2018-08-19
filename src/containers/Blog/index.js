import React, { Component } from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import Sidebar from '../../components/Sidebar';
import {Particles} from "react-particles-js";
import '../../App.css';
import Post from '../../components/Post';
import posts from '../../lists/posts';
import './run_prettify';


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

    constructor(){
        super();
        this.state = {
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        console.log(event.target.value);
    };



    render() {
        const { searchfield } = this.state;
        const filteredPosts = posts.filter(post => {
            return post.heading.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (
            <div>
                <div className="uk-flex uk-position-cover uk-background-secondary"/>
                <div style={{height:'100vh', width: '25vw', display:'flex', position: 'fixed', alignItems:'center'}}>
                    <div uk-scrollspy="cls: uk-animation-slide-left; repeat: true" className='uk-position-cover uk-flex'>
                        <Particles className="particles"
                                   params={particlesOptions}
                        />
                    </div>

                    <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true" className='uk-align-center'>
                        <Sidebar/>
                    </div>
                </div>

                <div id='back' style={{marginLeft:'25vw', paddingLeft: '10px', paddingRight: '10px', height:'calc(100vh)', minHeight:'calc(100vh)', overflow: 'scroll'}} className="uk-flex uk-position-cover uk-background-primary">

                    <div style={{height:'calc(100vh)', minHeight:'calc(100vh)'}} className='uk-align-center'>

                        <div className="uk-search uk-search-large uk-light">
                            <span uk-search-icon=""/>
                            <input className="uk-search-input" onChange={this.onSearchChange} type="search" placeholder="Search..." />
                        </div>
                        <Post post={filteredPosts}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;