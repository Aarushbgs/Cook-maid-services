const mongoose= require('mongoose');

const workSchema= new mongoose.Schema({

    name:{
        type: String,
        required:true,
    },
    Mobile:{
        type: String,
        required:true,
    },
    type:{
        type:String,
        enum:['Cook','Maid'],
        required:true,
    },
    location:{
        type:String,
        enum:['Sarvodaya Nagar','Chanakya Nagar','TownShip','Harakh','Profesr Colony'],
        required:true,
    },
    Fee: { 
        type: Number, 
        default: 0,
     },


})


module.exports=mongoose.model('worker',workSchema);
