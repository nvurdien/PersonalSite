import React, { Component } from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import Post from '../../components/Post';
import posts from '../../lists/posts';
import './run_prettify';


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

                <Sidebar page={'blog'}/>
                <div className='uk-visible@s'>
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
                <div className='uk-hidden@s'>
                    <div id='back' style={{paddingLeft: '10px', paddingRight: '10px', height:'calc(100vh)', minHeight:'calc(100vh)', overflow: 'scroll'}} className="uk-flex uk-position-cover uk-background-primary">

                        <div style={{height:'calc(100vh)', minHeight:'calc(100vh)'}} className='uk-align-center'>

                            <div className="uk-search uk-search-large uk-light">
                                <span uk-search-icon=""/>
                                <input className="uk-search-input" onChange={this.onSearchChange} type="search" placeholder="Search..." />
                            </div>
                            <Post post={filteredPosts}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;