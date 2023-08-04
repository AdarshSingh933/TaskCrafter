const db= require('../config/mongoose')
const TaskList = require('../models/taskList');

module.exports.home=async function(req, res){
    try{
        const taskList =await TaskList.find({});
        return res.render('home',{
            title: "Todo App",
            task_list:taskList
        });
    }catch(err){
          console.log('error',err);
          return;
    }
};

module.exports.createList=async function(req,res){
    try{
        await TaskList.create({
            description:req.body.description,
            category:req.body.category,
            dueDate:req.body.dueDate
        });
    }catch(err){
         console.log('error',err);
    }
    return res.redirect('/');
};
// Existing controller functions...

module.exports.deleteTasks = async function (req, res) {
    const taskIds = req.body.ids;

    // Check if there are any task IDs before proceeding
    if (!taskIds || taskIds.length === 0) {
      return res.status(400).json({ message: 'No task IDs provided for deletion' });
    }
  
    try {
      for (const taskId of taskIds) {
        await TaskList.findByIdAndDelete(taskId);
      }
      return res.status(200).json({ message: 'Tasks deleted successfully' });
    } catch (err) {
      console.log('Error:', err);
      // Return an error response to the client
      return res.status(500).json({ message: 'Error deleting tasks', error: err.message });
    }
  };
 
module.exports.categories= async function(req, res) {
    try {
      // Assuming you have a model for categories (replace Category with your actual model name)
      const Category = require('../models/taskList'); // Replace this with the path to your Category model
  
      // Fetch categories from the database, you might need to customize this part depending on your database setup
      const categories = await Category.find({}, 'category'); // Assuming you have a 'name' field in your Category model
      console.log("categories",categories);
      // Extract category names from the categories array and send them as the response
      const categoryNames = categories.map(category => category.category);
      console.log("categoryNames",categoryNames);
      return res.status(200).json(categoryNames);
    } catch (err) {
      console.error('Error fetching categories:', err);
      return res.status(500).json({ error: 'Error fetching categories' });
    }
  };
  

  
  
  
  
  
  
  
  
  
  
  
  
  


