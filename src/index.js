// const express = require('express') ;
// // it returns a function
// const React=require('react');
// const renderToString= require ('react-dom/server').renderToString
// const Home = require ('./client/components/Home').default;
// const app=express(); 
// // we use express() function and it returns  an object

import express from 'express';
import  renderer  from './helper/renderer';


const app=express(); 
app.use(express.static('public'))
app.get('/',(req,resp)=>{
    resp.send(renderer())
})

const port = 4200;

app.listen(port,()=> {
    console.log(`listening on ${port}`);
})


