import React from 'react'
import Belong from './Belong'
import Ctacard from './Ctacard'
import Fandom from './Fantom'
import Footer from './Footer'
import Hanging from './Hanging'
import Hero from './Hero'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Belong/>
        <Hanging/>
        <Fandom/>
        <Ctacard/>
        <Footer/>
    </div>
  )
}

export default Home
