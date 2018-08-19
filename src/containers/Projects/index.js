import React, { Component } from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import Project from '../../components/Project';
import projects from '../../lists/projects'


class App extends Component {
    render() {
        return (
            <div>

                <Sidebar page={'projects'}/>
                <div className='uk-visible@s'>
                <div id='back' style={{marginLeft:'25vw', paddingLeft: '10px', paddingRight: '10px', height:'calc(100vh)', minHeight:'calc(100vh)', overflow: 'scroll'}} className="uk-flex uk-position-cover uk-background-primary">

                    <div style={{height:'calc(100vh)', minHeight:'calc(100vh)'}} className='uk-section uk-align-center'>
                        <div className="uk-card uk-card-body">
                            <section className='tiles'>
                                <Project projects={projects}/>
                            </section>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <div id='back' style={{paddingLeft: '10px', paddingRight: '10px', height:'calc(100vh)', minHeight:'calc(100vh)', overflow: 'scroll'}} className="uk-flex uk-position-cover uk-background-primary">

                        <div style={{height:'calc(100vh)', minHeight:'calc(100vh)'}} className='uk-section uk-align-center'>
                            <div className="uk-card uk-card-body">
                                <section className='tiles'>
                                    <Project projects={projects}/>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
