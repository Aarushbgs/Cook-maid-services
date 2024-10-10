import React from 'react'
import Navbar from '../Components/Navbar'
import Header from './Header'
import Testimonials from '../Components/Testimonials'
import Faq from '../Components/FAQ'
import Playstore from '../Components/Playstore'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

const frontpage = () => {
  return (
    <>
    <Navbar/>
  <Header/>
  <Testimonials/>
  <Faq/>
  <Playstore/>
  <Contact/>
  <Footer/>
    </>
  )
}

export default frontpage