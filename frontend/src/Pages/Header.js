import React from 'react'
import './Header.css'
import Cooking from '../Img/Cooking-bro.png'



const Header = () => {
  return (
   <>
<div className='head'>
   <div className='lefthome'>
   "Welcome to Your Home's Best Friend: Delicious Meals and Sparkling Clean Spaces Await!"


<div className='bts'>
   <button className='button'>Find Service</button>
   <button className='button'>Find Job</button>
   </div>
   </div>
     <div className='righthome'>
    <img src={Cooking}  className='img'/>
   </div>
   </div>
   </>
  )
}

export default Header