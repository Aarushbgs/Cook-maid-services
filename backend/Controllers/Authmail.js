const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false, 
    auth: {
      user: process.env.SMTP_MAIL ,
      pass: "ysoi ykhi diic ugyg",
    },
  });



const sendMail= expressAsyncHandler(async(req,res)=>{
  const { foodType, quantity, description, pickupLocation, contactName, contactNumber } = req.body;
   
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: 'aarushkissi@gmail.com', 
    subject: `New Food Donation from ${contactName}`,
    text: `
      Food Type: ${foodType}
      Quantity: ${quantity} kg
      Description: ${description}
      Pickup Location: ${pickupLocation}
      Contact Name: ${contactName}
      Contact Number: ${contactNumber}
    `
  };

  transporter.sendMail(mailOptions,function(error,info){
    if(error){
      console.log(error);
    }else{
      console.log('Email sent successfully')
    }
  }) 
})  


const ComplainMail= expressAsyncHandler(async(req,res)=>{
  const { type, description } = req.body;

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: 'aarushkissi@gmail.com', 
    subject: `New Feedback Submission: ${type || 'No Type Specified'}`,
    text: `
      Feedback Type: ${type}
      Description: ${description}
    `,
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending feedback email');
    } else {
      console.log('Feedback email sent successfully');
      res.status(200).send('Feedback email sent successfully');
    }
  });
})




module.exports = {sendMail,ComplainMail};
