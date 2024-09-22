const joi= require('joi');

const signUpValidation=(req,res,next)=>{
  const schema= joi.object({
    username:joi.string().min(3).max(30).required(),
    email:joi.string().email().required(),
    password: joi.string().min(4).max(100).required()

  })

   const {error}=schema.validate(req.body);
   if (error) {
    return res.status(400)
        .json({ message: "Bad request", error })
}
next();
}

const loginUpValidation=(req,res,next)=>{
    const schema= joi.object({
        email:joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    
      })
    
       const {error}=schema.validate(req.body);
       if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();

}

module.exports={signUpValidation,loginUpValidation}