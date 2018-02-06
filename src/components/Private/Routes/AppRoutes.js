//Dependencis
import React from 'react';
import { Switch, Route } from 'react-router-dom'



//Components
import App from '../../App'
import About from '../../Public/Page/About/About.jsx';
import Contact from '../../Public/Page/Contact/Contact.jsx';
import Home from '../../Public/Page/Home/Home.jsx';
import Blog from '../../Public/Page/Blog/Blog.jsx';
import Page404 from '../../Public/Page/Page404/Page404.jsx';



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