import About from '@/components/About'
import Hero from '@/components/hero'
import Portfolio from '@/components/Portfolio'
import Steps from '@/components/Steps'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Portfolio/>
      {/* <Steps/> */}
      <About/>
    </div>
  )
}

export default page
