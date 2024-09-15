// import React, { useState } from 'react'

// const Signup = () => {

//   const [signform, setsignform] = useState({
//     username:'',
//     email:'',
//     password:'',
//   });


// const handleChange=async(e)=>{
//   const{username,email,password}=  e.target;

//   setsignform({...signform,[e.target.name]:e.target.value});
//   console.log(signform);

// }

//   const handleSubmit =async(e)=>{
// e.preventDefault();
//   }

//   return (
//     <div className='signup-page'>
//       <form  onSubmit={handleSubmit}>
//         <label>username</label>
//         <input
//         type='text'
//         name='username'
//         placeholder='Enter your username'
//         onChange={handleChange}
//         />

//        <label>email</label>
//         <input
//         type='email'
//         name='email'
//         placeholder='Enter your Mail Id'
//         onChange={handleChange}
//         />

// <label>password</label>
//         <input
//         type='password'
//         name='password'
//         placeholder='Set your password'
//         onChange={handleChange}
//         />

//         <button type='submit'>Register</button>
//       </form>
//     </div>
//   )
// }

// export default Signup



import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Signup.css'; 

const Signup = () => {
  const [signform, setsignform] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setsignform({ ...signform, [e.target.name]: e.target.value });
    console.log(signform)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted form data:', signform);
    
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
    </div>
  );
};

export default Signup;
