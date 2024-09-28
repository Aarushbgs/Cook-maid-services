import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Frontpage from './Pages/Frontpage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import RefrshHandler from './RefrshHandler';
import Workerregister from './Pages/Workerregister'


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
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>

      <Route path='/register' element={<Workerregister/>}/>
      <Route path='/home' element={<PrivateRoute element={<Home/>}/>}/>
    </Routes>
  </Router>
    </>

  )
}

export default App