import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Frontpage from './Pages/Frontpage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import RefrshHandler from './RefrshHandler';
import Workerregister from './Pages/Workerregister'
import FoodDonation from './User/FoodDonation';
import Feedback from './User/Feedback';
import AttendanceCalendar from './User/AttendanceCalendar';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';





const App = () => {


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }
  return (

    <>
  
      <Router>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
    <Routes>
      <Route path='/' element={<Frontpage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route  path='/donate' element={<PrivateRoute element={<FoodDonation/>}/>}/> 
      <Route path='/register' element={<Workerregister/>}/>
      <Route path='/home' element={<PrivateRoute element={<Home/>}/>}/>
     
      <Route path='/feedback' element={<PrivateRoute element={<Feedback/>}/>}/>
      <Route path='/markattendance' element={<PrivateRoute element={<AttendanceCalendar/>}/>}/>
    </Routes>
  </Router>
    </>

  )
}

export default App