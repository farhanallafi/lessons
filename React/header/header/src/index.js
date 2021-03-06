import React from 'react';
import Header from './header.js'
import Nav from './nav.js'
import Main1 from './main1.js'
import Footer from './footer.js';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Main1 />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
