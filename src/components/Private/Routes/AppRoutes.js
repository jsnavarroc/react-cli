//Dependencis
import React from 'react';
import { Switch, Route } from 'react-router-dom'



//Components
import App from '../../App'
import About from '../../Public/Page/About/About';
import Contact from '../../Public/Page/Contact/Contact';
import Home from '../../Public/Page/Home/Home';
import Blog from '../../Public/Page/Blog/Blog';
import Page404 from '../../Public/Page/Page404/Page404';



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