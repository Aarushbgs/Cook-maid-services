import React, { useState } from 'react'
import './FoodDonate.css'
import donatefood from '../Img/donatefood.jpg'
import Usernav from './Usernav';


const FoodDonation = () => {

  const [foodData, setFoodData] = useState({
    foodType: '',
    quantity: '',
    description: '',
    pickupLocation: '',
    contactName: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {

      const res= await fetch(`https://cook-maid-services.vercel.app/email/donationmail`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(foodData),
      });

      if (res.ok) {
        alert('Food donation submitted successfully!');
      } else {
        alert('Failed to submit donation.');
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting donation.');
    }
  }

  return (
    <div className='food-donation-form'>
       <Usernav />
      <h2>Donate Food , Help Other Spread Happiness</h2>



      <div className='donation-container'>

        <div className='left-donation'>
          <img src={donatefood} />
          <p>Your generosity has the power to change lives. Every contribution brings hope, healing, and help to those in need. Whether it's a small gift or a large donation, your support fuels our mission to build a better future for all. Join us in making the world a kinder place, one donation at a time.</p>
<h2>Donate now and be the change!</h2>        
        </div>

        <div className='right-donation'>

          <form onSubmit={handleSubmit}>
            <label>Food Type:</label>
            <input
              type="text"
              name="foodType"
              value={foodData.foodType}
              onChange={handleChange}
              required
            />

            <label>Quantity (in kg):</label>
            <input
              type="number"
              name="quantity"
              value={foodData.quantity}
              onChange={handleChange}
              required
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={foodData.description}
              onChange={handleChange}
              required
            ></textarea>

            <label>Pickup Location:</label>
            <input
              type="text"
              name="pickupLocation"
              value={foodData.pickupLocation}
              onChange={handleChange}
              required
            />

            <label>Contact Name:</label>
            <input
              type="text"
              name="contactName"
              value={foodData.contactName}
              onChange={handleChange}
              required
            />

            <label>Contact Number:</label>
            <input
              type="tel"
              name="contactNumber"
              value={foodData.contactNumber}
              onChange={handleChange}
              required
            />

            <button type="submit">Donate Food</button>
          </form>
        </div>

      </div>


    </div>
  )
}

export default FoodDonation
