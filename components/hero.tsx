"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { InfiniteSlider } from "./ui/infinite-slider";
import { Inter } from "next/font/google";
import ActionButton from "./ActionButton";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
    <div className="md:h-[98vh] h-[100vh] relative md:pt-0 pt-[12rem] flex flex-col md:justify-center items-center md:px-[6rem] px-4 text-neutral-800">
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 w-full h-full opacity-60",
          "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
          "mask-size-100 mask-repeat-no-repeat",
          "pointer-events-none"
        )}
      />

      <motion.div
        className="flex flex-col text-center items-center justify-center gap-6 max-w-full md:max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          className="bg-neutral-50 shadow-neutral-300/75 shadow-xs flex items-center gap-2 border-[1px] border-neutral-300 text-xs rounded-full px-1 pr-2 py-1 z-40"
        >
          <motion.div className="bg-neutral-100/40 flex items-center gap-1 border-[1px] px-2 py-1 border-neutral-300 rounded-full">
            <div className="bg-orange-400/20 p-1 flex items-center justify-center rounded-full border-[1px] border-orange-400/10">
              <div className="bg-orange-500 size-2 rounded-full"></div>
            </div>
            <p>We're Live</p>
          </motion.div>
          <p className={`${font.className}`}>Only 2 Spots for July</p>
        </motion.div>
        <motion.h1
          className="md:text-5xl text-4xl tracking-tightest font-medium"
          variants={fadeInUp}
        >
          Websites That Drive More Leads, Sales, and Growth.{" "}
        </motion.h1>

        <motion.p
          className="md:text-[1.1rem] text-sm leading-tight text-neutral-600 max-w-lg"
          variants={fadeInUp}
        >
          Helping a select few ambitious startups 10x their leads and sales with
          strategic, high-converting websites that close.
        </motion.p>

        <motion.div
          className="flex md:flex-row flex-col items-center gap-6"
          variants={fadeInUp}
        >
          <ActionButton title="Apply for a Strategy Call" />

          {/* <ScrollLink to="portfolio" smooth={true} duration={1000}>
            <Button className="underline bg-transparent shadow-none text-neutral-800 underline-offset-2 hover:bg-transparent hover:cursor-pointer">
              View Case Study
            </Button>
          </ScrollLink> */}
        </motion.div>

        <motion.div
        variants={fadeInUp}
         className="text-xs max-w-xs">
          I partner with only 2 ambitious founders a month to ensure quality of service.
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2 md:max-w-sm absolute bottom-[10%] md:bottom-[5%]"
          variants={containerVariants}
        >
          <motion.p
            className="text-sm text-neutral-500 max-w-xs font-medium tracking-tight leading-tight"
            variants={fadeInUp}
          >
            Client's who've trusted us
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
