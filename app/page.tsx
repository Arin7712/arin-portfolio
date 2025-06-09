import About from '@/components/About'
import { Demo } from '@/components/Demo'
import Features from '@/components/Features'
import Hero from '@/components/hero'
import Portfolio from '@/components/Portfolio'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Portfolio/>
      <Steps/>
      <About/>
      <Testimonials/>
      <Features/>
      <Demo/>
    </div>
  )
}

export default page
