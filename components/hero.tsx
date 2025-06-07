"use client";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { InfiniteSlider } from "./ui/infinite-slider";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div className="h-screen relative md:pt-0 pt-[12rem] flex flex-col md:justify-center items-center md:px-[6rem] px-6 text-neutral-800">
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 w-full h-full opacity-58",
          "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
          "mask-size-100 mask-repeat-no-repeat",
          "pointer-events-none"
        )}
      />

      <motion.div
        className="flex flex-col text-center items-center justify-center gap-6 md:max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          className="bg-neutral-100 border-[1px] border-neutral-300 text-xs rounded-full px-8 py-1 uppercase z-40"
        >
          <p>✨ Start your project this week</p>
        </motion.div>
        <motion.h1
          className="md:text-5xl text-4xl tracking-tight font-medium"
          variants={fadeInUp}
        >
          Conversion-focused websites that help startups launch & scale fast.
        </motion.h1>

        <motion.p
          className="text-md text-neutral-500 max-w-lg"
          variants={fadeInUp}
        >
          Helping startups drive more leads and sales in 7 days with conversion
          focused websites.
        </motion.p>

        <motion.div className="flex items-center gap-6" variants={fadeInUp}>
          <Button className="px-6 py-4 text-sm rounded-full gap-6 bg-neutral-800 z-20">
            Schedule call
            <MoveRight />
          </Button>
          <Button className="underline bg-transparent shadow-none text-neutral-800 underline-offset-2 hover:bg-transparent hover:cursor-pointer">
            View Case Study
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2 md:max-w-sm absolute bottom-[10%] md:bottom-[5%]"
          variants={containerVariants}
        >
          <motion.p
            className="text-xs text-neutral-500 max-w-xs font-medium tracking-tight leading-tight"
            variants={fadeInUp}
          >
            Our recent clients:
          </motion.p>

          <motion.div
            className="flex items-center gap-6 md:gap-10 justify-center max-w-xs md:max-w-lg"
            variants={containerVariants}
          >
            <InfiniteSlider gap={40} reverse>
              <Image
                src="/logo1.png"
                alt="Image 1"
                width={100}
                height={100}
                className="invert"
              />
              <Image
                src="/logo2.webp"
                alt="Image 1"
                width={100}
                height={100}
                className="invert"
              />
              <Image
                src="/logo4.webp"
                alt="Image 4"
                width={100}
                height={100}
                className="grayscale invert"
              />
              <h1 className="text-xl font-semibold">SaasBoomi</h1>
            </InfiniteSlider>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
