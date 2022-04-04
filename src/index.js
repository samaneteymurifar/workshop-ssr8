const express = require('express') ;// it returns a function
const React=require('react');
const renderToString= require ('react-dom/server').renderToString
const Home = require ('./client/components/Home').default;
const app=express(); // we use express() function and it returns  an object


// for create api
// app.get()
// app.post ()
// app.put()
// app.delete()

app.get('/',(req,resp)=>{
    const content=renderToString(<Home/>)
    resp.send(content)
})

const port = 4000;

app.listen(port,()=> {
    console.log(`listening on ${port}`);
})