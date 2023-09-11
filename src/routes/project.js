import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Heroimg2 from '../components/Heroimg2'

const project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my projects."/>
      <Footer/>

    </div>
  )
}

export default project