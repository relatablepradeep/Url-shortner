const express=require('express');
const {userSignup,userlogin}=require('../controllers/user')





const router=express.Router();

router.post('/',userSignup);
router.post('/login',userlogin);






module.exports=router;