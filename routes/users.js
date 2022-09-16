const express=require('express');
const router=express.Router();
const usersController=require('../controllers/profile_controller')
const userController=require('../controllers/contact_controller')
router.get('/profile',usersController.profile)
router.get('/contact',userController.contact)
module.exports=router;