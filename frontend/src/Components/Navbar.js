import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
   <nav className='navbar'>
<div className='logo'>
CookNClean
</div>

<div className='list'>
<ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
       
      </ul>
</div>


<div className='loginbutton'>
<button className='btn'>Login</button>
<button className='btn'>SignIn</button>
</div>
   </nav>
  )
}

export default Navbar