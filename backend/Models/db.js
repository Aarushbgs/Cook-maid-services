const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
    
 const MongoUrl = process.env.MONG_URL;


mongoose.connect(MongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
       .then(()=>{
        console.log('Mongodb is connected Succesfully ')
       }).catch((e)=>{
        console.log(e);
       })

     