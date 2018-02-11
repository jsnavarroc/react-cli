//Dependencies  
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Bluebird from 'bluebird';
import { Provider } from 'react-redux';


//Routes
import AppRoutes from './private/Routes/AppRoutes' 

//Assets
import './index.css';

// Redux store
import configureStore from './lib/configureStore';

// Reducers 
import rootReducer from './reducers'

// Bluebird
window.Promise = Bluebird;
Bluebird.config( { warnings: false } );
window.addEventListener('unhandledrejection', error => {
    error.preventDefault();

    if(process.evn.NODE_ENV !== 'production' ){
        console.warn('Unhandled promise rejection warning', error.detail);
    }
});

//Configuring redux store 
const store = configureStore({
    intialState: window.intialState
}, rootReducer)  

render(
    <Provider store =  {store}>
        <Router>
            <AppRoutes/>
      </Router>
    </Provider>,
     document.getElementById('root')
);
