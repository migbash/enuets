// Import Libraries & Files //
import React from 'react';
import ReactDOM from 'react-dom';
// ----- //
import App from './App';
import About from './About';
// ----- //
import './index.css';
// ----- //
import * as serviceWorker from './serviceWorker';
// ----- //
import {HashRouter as Router,  Route} from 'react-router-dom'

// ------------------------ //

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

// Assign 'App to Appear in index.html'
ReactDOM.render(routing, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
