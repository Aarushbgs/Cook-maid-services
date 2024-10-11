
const express= require('express');
const app= express();
const bodyParser = require('body-parser');
const cors= require('cors');

const corsOptions = {
  origin: 'https://cook-maid-services-ui.vercel.app',  // Add your frontend's origin here
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify the allowed methods
  credentials: true  // Allow cookies or authentication headers
};

app.use(cors(corsOptions));
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://cook-maid-services-ui.vercel.app');  // Specify your frontend's origin
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const AuthRouter= require('./Routes/AuthRouter');
const findroute= require('./Routes/worker');

const EmailRoutes =require ('./Routes/emailroute');


const Attendance= require('./Models/Attendance');

require('./Models/db');
require('dotenv').config();



app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.get('/', (req, res) => {
    res.send('Hii..I am Aarush');
  });

  app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use('/auth', AuthRouter);

app.use('/email',EmailRoutes);

app.use('/worker',findroute);





// attendance save krne k liye 
app.post('/api/attendance', async (req, res) => {
  const { date, status } = req.body;

  try {
    const attendance = new Attendance({ date, status });
    await attendance.save();
    res.status(200).send('Attendance saved!');
  } catch (error) {
    res.status(500).send('Error saving attendance.');
  }
});

// fetch karne k liye
app.get('/api/attendance', async (req, res) => {
  try {
    const attendanceData = await Attendance.find();
    res.status(200).json(attendanceData);
  } catch (error) {
    res.status(500).send('Error fetching attendance.');
  }
});

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log('Server is connected to port no. 8000');
})
