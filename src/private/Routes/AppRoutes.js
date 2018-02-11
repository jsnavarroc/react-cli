//Dependencis
import React from 'react';
import { Switch, Route } from 'react-router-dom'



//Components
import App from '../../components/App'
import About from '../../components/Public/Page/About/About.jsx';
import Contact from '../../components/Public/Page/Contact/Contact.jsx';
import Blog from '../../components/Public/Page/Blog/Blog.jsx';
import Page404 from '../../components/Public/Page/Page404/Page404.jsx';

//Contairner
import Home from '../../container/Public/Home/';


const AppRoutes = () => 
<App>
    <Switch>  
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/contact" component = {Contact} />
        <Route exact path = "/blog" component = {Blog} />
        <Route exact path = "/" component = {Home} />
        <Route component = {Page404} />
    </Switch>
</App>

export default AppRoutes;