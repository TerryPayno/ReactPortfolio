import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './Contact/Contact.js';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import About from './About/About'
import Work from './Work/Work'



ReactDOM.render(

<BrowserRouter>
<Nav/>
    <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Work" component={Work} />
    </React.Fragment>


</BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
