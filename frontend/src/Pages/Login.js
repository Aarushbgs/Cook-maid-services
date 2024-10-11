import React, { useState } from 'react';
import './Login.css'; 
import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';


const Login = () => {

  const navigate= useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });


    if (name === 'email') {
      setErrors({
        ...errors,
        email: value.includes('@') ? '' : 'Email must be valid',
      });
    }
    if (name === 'password') {
      setErrors({
        ...errors,
        password: value.length >= 6 ? '' : 'Password must be at least 6 characters long',
      });
    }
  };




const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your submit logic here
   const {email,password}=form;

   if (!email || !password) {
    return handleError('email and password are required')
}

try {
  const url =`https://cook-maid-services.vercel.app//auth/login`;
  
  const res= await fetch (url,{
    method:"POST",
    headers:{
       'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(form)
  });

  const result= await res.json();

  const { success, message, jwtToken, username, error } = result;
  if (success) {
    handleSuccess(message);
    localStorage.setItem('token', jwtToken);
    localStorage.setItem('loggedInUser',username);
    setTimeout(() => {
        navigate('/home')
    }, 1000)
} else if (error) {
    const details = error?.details[0].message;
    handleError(details);
} else if (!success) {
    handleError(message);
}

  console.log('result');

  
} catch (error) {
  handleError(error);
}

  };

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='form-group'>
        <h2>Login </h2>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email ID'
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && <p className='error-text'>{errors.email}</p>}
        </div>
        
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            onChange={handleChange}
            value={form.password}
          />
          {errors.password && <p className='error-text'>{errors.password}</p>}
        </div>

        <button type='submit' className='submit-button'>Login</button>

        <span>Don't have a account ?</span>
  <Link to='/signup'>
     Signup
  </Link>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
