import React from 'react'
import Navbar from '../Components/Navbar'
import Header from './Header'
import Testimonials from '../Components/Testimonials'
import Faq from '../Components/FAQ'

const frontpage = () => {
  return (
    <>
    <Navbar/>
  <Header/>
  <Testimonials/>
  <Faq/>
    </>
  )
}

export default frontpage