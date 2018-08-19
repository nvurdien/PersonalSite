import React from 'react';
import { Route } from 'react-router-dom'
import About from '../About'
import Projects from '../Projects'
import Resume from '../Resume'
import Contact from "../Contact";
import Blog from "../Blog";

const App = () => (
    <div>
        <main>
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/projects"  component={Projects}/>
            <Route exact path="/blog"  component={Blog}/>
        </main>
    </div>
);
export default App;