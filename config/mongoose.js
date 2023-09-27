const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adarshsingh933:qvP3B7ZnHSGwRJsp@cluster0.vlsmwdq.mongodb.net/TO-DO-APP');

const db= mongoose.connection;

db.on('error',console.error.bind(console,"error in set up Database"));

db.once('open',function(){
    console.log("successfully connected to the database");
});
