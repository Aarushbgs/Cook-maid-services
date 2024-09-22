
const express= require('express');
const app= express();
const bodyParser = require('body-parser');
const cors= require('cors');

const AuthRouter= require('./Routes/AuthRouter');


require('./Models/db');
require('dotenv').config();


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hii..I am Aarush');
  });

app.use('/auth', AuthRouter);



const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log('Server is connected to port no. 8000');
})