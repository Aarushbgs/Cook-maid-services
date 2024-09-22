const mongoose = require('mongoose');

const MongoUrl= 'mongodb://localhost:27017/cheif';

mongoose.connect(MongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
       .then(()=>{
        console.log('Mongodb is connected Succesfully ')
       }).catch((e)=>{
        console.log(e);
       })

     