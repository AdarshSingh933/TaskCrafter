const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task_list');

const db= mongoose.connection;

db.on('error',console.error.bind(console,"error in set up Database"));

db.once('open',function(){
    console.log("successfully connected to the database");
});