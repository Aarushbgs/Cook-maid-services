// import React, { useState } from 'react'

// const Login = () => {
// const [form, setform] = useState({
//   email:'',
//   password:''
// });

// const handleChange= (e)=>{
// setform({...form,[e.target.name]:e.target.value});
// console.log(form);
// };

// const handleSubmit=async (e)=>{
// e.preventDefault();

// };

//   return (

//     <div className='login-page'>
//      <form onSubmit={handleSubmit}>
//         <label htmlFor='email'>Email</label>
//         <input
//         type='email'
//         name='email'
//         placeholder='Enter your mail Id'
//         onChange={handleChange}
//         />

//    <label htmlFor='password'>Password</label>
//         <input
//         type='password'
//         name='password'
//         placeholder='Enter your password'
//         onChange={handleChange}
//         />

// <button type="submit">Login</button>

//      </form>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react';
import './Login.css'; // Assuming you will add CSS styles in this file
import {Link} from 'react-router-dom'
const Login = () => {
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

    // Basic validation
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
    if (errors.email || errors.password) {
      console.log('Form has errors');
      return;
    }
    console.log('Form data:', form);
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
  
    </div>
  );
}

export default Login;
