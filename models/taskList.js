const mongoose = require('mongoose');

const taskListSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }
});

const TaskList = mongoose.model('TaskList',taskListSchema);

module.exports = TaskList;