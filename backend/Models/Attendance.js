const mongoose=require('mongoose');

const attendanceSchema= new  mongoose.Schema({
  date: String,
  status: String,
})

module.exports=  mongoose.model('Attendance',attendanceSchema);