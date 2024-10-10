import React from 'react'
import './Playstore.css'
import Androidstore from '../Img/Android.png'
import Appstore from '../Img/Appstore.png'

const Playstore = () => {
  return (
    <div className="container">
    <h1>Get Our App</h1>
    <p>Download our app from your favorite app store.</p>
    <div className="store-buttons">
      <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
        <img src={Androidstore} alt="Google Play Store" />
      </a>
      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <img src={Appstore} alt="Apple App Store" />
      </a>
    </div>
  </div>
  )
}

export default Playstore