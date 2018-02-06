//Dependencies  
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
// import { Render } from 'react-dom';
//Routes
import AppRoutes from './components/Private/Routes/AppRoutes' 

//Assets
import './index.css';
// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router >
        <AppRoutes/>
    </Router>, document.getElementById('root')
    );
registerServiceWorker();
