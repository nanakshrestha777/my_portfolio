import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Heroimg from "../components/Heroimg"
import Heroimg2 from '../components/Heroimg2'

const contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT." text="Feel free to reach out"/>
      <Footer/>
    </div>
  )
}

export default contact