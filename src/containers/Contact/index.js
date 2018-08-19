import React, { Component } from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import ContactForm from '../../components/ContactForm';



class App extends Component {
    render() {
        return (
            <div>

                <Sidebar page={'contact'}/>
                <div className='uk-visible@s'>
                <div id='back' style={{marginLeft:'25vw', paddingLeft: '10px', height:'calc(100vh)', minHeight:'calc(100vh)', overflow: 'scroll'}} className="uk-flex uk-position-cover uk-background-primary">

                    <div style={{height:'calc(100vh)', minHeight:'calc(100vh)'}} className='uk-section uk-align-center'>
                        <div className="uk-light">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                </div>
                <div className='uk-hidden@s'>
                    <div id='back' style={{paddingLeft: '10px', height:'calc(100vh)', minHeight:'calc(100vh)', overflow: 'scroll'}} className="uk-flex uk-position-cover uk-background-primary">

                        <div style={{height:'calc(100vh)', minHeight:'calc(100vh)'}} className='uk-section uk-align-center'>
                            <div className="uk-light">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;