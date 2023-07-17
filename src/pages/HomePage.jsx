import React from 'react'
import Header from '../components/Home/Header'
import Intro from '../components/Home/Intro'
import CustomerExperience from '../components/Home/CustomerExperience'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import Ad from '../components/Home/Ad'
import Subscription from '../components/Home/Subscription'
import Footer from '../components/Home/Footer'

function HomePage() {
  return (
    <div>
      <Header/>
      <Intro/>
      <CustomerExperience/>
      <FeaturedProducts/>
      <Ad/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default HomePage
