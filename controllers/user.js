const User=require('../models/user')
import { v4 as uuidv4 } from 'uuid';


async  function userSignup(req,res){

    const {name,email,password}=req.body;

    await User.create({
        name,
        email,
        password,
    });


    return res.redirect('/')
    


}



async  function userlogin(req,res){

    const {email,password}=req.body;

   const user =await User.findOne({email,password});

   if(!user) return res.render('login',{
    error:"invalide user or password"
   }
   );


   const sessionID=uuidv4();



    return res.redirect('/')


}


module.exports={userSignup,userlogin}