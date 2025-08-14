import React from 'react'
import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import SpecialOffer from './SpecialOffer/SpecialOffer'
import Testimonial from './Testimonial/Testimonial'
import BlogPage from '@/app/blog/page'
import OurProducts from './OurProducts/OurProducts'

export default function Home() {
  return (
    <div>
      <Hero />
      <OurProducts />
      <AboutUs />
      <SpecialOffer />
      <Testimonial />
      <BlogPage />
    </div>
  )
}
