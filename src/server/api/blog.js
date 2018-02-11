// Dependencies 
import express from 'express';
import fetch from 'node-fetch';

// Data 
import post from '../../private/Date/post.json';
import posts from '../../private/Date/posts.json';

// Express Router
const Router = express.Router();


Router.get('/post',(req, res, next) => {
    res.json(post)
});

Router.get('/posts',(req, res, next) => {
    res.json(posts)
});

          
Router.get('/movies',(req, res, next) => {
    fetch('http://localhost:3001/api/movies')
    .then(res => res.json())
    .then(body => res.json(body));
});

Router.get('/theater',(req, res, next) => {
    fetch('http://localhost:3001/api/teathers')
    .then(res => res.json())
    .then(body => res.json(body));
});





export default Router; 

