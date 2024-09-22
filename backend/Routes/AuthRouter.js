const {login,signup}=require('../Controllers/Authcontrollers');
const {signUpValidation,loginUpValidation}=require('../Middlewares/AuthValidation');


const router= require('express').Router();

router.post('/login',loginUpValidation,login);

router.post('/signup',signUpValidation,signup);

module.exports=router;