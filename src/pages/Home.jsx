import React from 'react'
import Hero from '../components/Home/Hero'
import AboutUS from '../components/Home/AboutUS'
import OurProduct from '../components/Home/OurProduct'
import OurGoal from '../components/Home/OurGoal'
import RecipeInspiration from '../components/Home/RecipeInspiration'
import PartnerWithUs from '../components/Home/PartnerWithUs'

const Home = () => {
  return (
    <div className='pt-10'>
      <Hero />
      <AboutUS />
      <OurProduct />
      <OurGoal />
      <RecipeInspiration />
      <PartnerWithUs />
    </div>
  )
}

export default Home
