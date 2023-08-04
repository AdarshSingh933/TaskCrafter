const express=require('express');
const router=express.Router();


const homecontroller=require('../controllers/homecontroller');

router.get('/', homecontroller.home);
router.post('/create-list',homecontroller.createList);
router.delete('/delete-tasks', homecontroller.deleteTasks);
router.get('/api/categories',homecontroller.categories);

module.exports=router;