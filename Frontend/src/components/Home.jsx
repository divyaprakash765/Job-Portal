import React from 'react'
import Navbar from './ui/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>

        <CategoryCarousel/>
        {/* <LatestJob/>
        <footer/> */}
    </div>
  )
}

export default Home