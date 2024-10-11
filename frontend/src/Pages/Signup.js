
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './Signup.css'; 
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';


const Signup = () => {
  const [signform, setsignform] = useState({
    username: '',
    email: '',
    password: '',
  });

const navigate = useNavigate();

  const handleChange = (e) => {
    setsignform({ ...signform, [e.target.name]: e.target.value });
    console.log(signform)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {username,email,password}=signform;

    if (!username||!email || !password) {
     return handleError('All field are required ')
 }
 
 try {
  
  
const url=`https://cook-maid-services.vercel.app//auth/signup`;

const res= await fetch(url,{
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(signform)
});

const result = await res.json();
const { success, message, error } = result;
if (success) {
    handleSuccess(message);
    setTimeout(() => {
        navigate('/login')
    }, 1000)
} else if (error) {
    const details = error?.details[0].message;
    handleError(details);
} else if (!success) {
    handleError(message);
}
console.log(result);

 } catch (error) {
  handleError(error);
 }  


    
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={signform.username}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={signform.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Set your password"
          value={signform.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

        <span>Already registered ?</span>
  <Link to='/login'>
     Login
  </Link>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;
