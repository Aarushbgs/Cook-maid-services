import React, { useState } from 'react';
import './Usernav.css';
import { Link } from 'react-router-dom';

const Usernav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled", isMenuOpen); // For debugging
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className='usernav'>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
        <span className='hamburger'></span>
      </div>

      <ul className={isMenuOpen ? 'open' : ''}>
        <Link to='/home'>
          <li>Book your service</li>
        </Link>
        <Link to='/donate'>
          <li>Donate Food</li>
        </Link>
        <Link to='/feedback'>
          <li>Complaint section</li>
        </Link>
        <Link to='/markattendance'>
          <li>Mark Attendance</li>
        </Link>
      </ul>

      <button onClick={logout}>Log Out</button>
    </nav>
  );
}

export default Usernav;
