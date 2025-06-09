import About from '@/components/About'
import { Demo } from '@/components/Demo'
import Features from '@/components/Features'
import Hero from '@/components/hero'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import Portfolio from '@/components/Portfolio'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
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
            <div
        className="flex relative flex-col h-[70vh] justify-between items-center text-center rounded-4xl mx-6 md:mx-[6rem] bg-neutral-900 text-neutral-100 mt-[6rem] mb-[6rem] p-6 md:p-[4rem]"
      >
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 w-full h-full opacity-20",
            "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
            "mask-size-100 mask-repeat-no-repeat",
            "pointer-events-none"
          )}
        />
        <div
          className="space-y-3 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl tracking-tighter font-semibold md:max-w-xl">
            Let’s Build a Website That Actually Converts
          </h1>
          <p className="text-sm max-w-md text-neutral-300">
            Book a free 15-min strategy call — no fluff, just clarity and action.
          </p>
        </div>

        <div
          className="flex flex-col gap-2 justify-between items-center"
        >
          <Link href="https://calendly.com/aringawande7712/30min">
          <Button className="bg-[#cfff92] hover:bg-[#cfff92] px-6 rounded-full py-6 z-50 hover:cursor-pointer text-neutral-800">
            Book my Free Call <ArrowRight className="size-5" />
          </Button>
          </Link>
          <p className="text-xs max-w-xs font-medium z-50 text-neutral-300">
            Takes less than 15 seconds to schedule. No obligation. Just honest advice.
          </p>
        </div>
      </div>
      <Demo/>
    </div>
  )
}

export default page
