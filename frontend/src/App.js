import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from './Pages/Frontpage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Frontpage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </Router>
  )
}

export default App