const express=require('express');
const app=express();
const port=8000;

app.use('/',require('./routes/index'));

// set view engine 
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log(`server is not running error:${err}`);
    }
    console.log(`server is running on port:${port}`);
});