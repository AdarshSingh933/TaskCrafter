const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const port=8001;

const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'));

// set view engine 
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`server is not running error:${err}`);
    }
    console.log(`server is running on port:${port}`);
});