import About from '@/components/About'
import Hero from '@/components/hero'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Portfolio/>
      {/* <Steps/> */}
      <About/>
      <Testimonials/>
    </div>
  )
}

export default page
