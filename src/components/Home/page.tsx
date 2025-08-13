import React from 'react'
import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import SpecialOffer from './SpecialOffer/SpecialOffer'
import Testimonial from './Testimonial/Testimonial'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <SpecialOffer />
      <Testimonial />
    </div>
  )
}
