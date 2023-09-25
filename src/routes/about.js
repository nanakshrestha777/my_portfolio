import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "../components/About"
import Heroimg2 from '../components/Heroimg2'

const about = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="On the way to World of Data Science."/>
      <About/>

      <Footer/>
    </div>
  )
}

export default about