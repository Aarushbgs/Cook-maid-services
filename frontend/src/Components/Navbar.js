import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='logo'>
        CookNClean
      </div>

      <div className={`list ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/faq">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className='loginbutton'>
        <Link to="/login">
          <button className='btn'>Login</button>
        </Link>
        <button className='btn'>SignIn</button>
      </div>

      <div className='menu-toggle' onClick={toggleMenu}>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
      </div>
    </nav>
  );
};

export default Navbar;
