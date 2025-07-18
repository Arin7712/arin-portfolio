"use client";
import {
  CalendarCheck,
  FileUser,
  LaptopMinimalCheck,
  MailCheck,
  PhoneCall,
  TvMinimalPlay,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Ripple = () => {
  const [ripples, setRipples] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples((prev) => [...prev, Date.now()]);
    }, 1000); // One ripple every 1 second (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {ripples.map((id: any) => (
        <motion.div
          key={id}
          className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-orange-300/30 via-orange-400/20 to-orange-500/10 border border-orange-300/20"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
          onAnimationComplete={() => {
            // Remove ripple after it fades out to prevent buildup
            setRipples((prev) => prev.filter((item) => item !== id));
          }}
        />
      ))}
    </>
  );
};

const Steps = () => {
  return (
    <div className="relative flex flex-col h-auto items-center px-6 md:px-[8rem] py-[6rem] bg-neutral-900 text-white">
      {/* Header Tag */}

      {/* Heading Section */}
      <div className="flex flex-col gap-3 max-w-2xl items-center text-center pt-4">
        <h1 className="text-5xl font-medium tracking-tighter">How It Works</h1>
        <p className="md:text-md text-sm text-neutral-400">
          Here’s How We Go From Idea to Live in Just 7 Days
        </p>
      </div>

      {/* Plus Sign and Step Cards */}
      <div className="relative w-full max-w-2xl aspect-square mt-20">
        {/* Vertical Line */}
        <div className="absolute inset-y-0 left-1/2 w-px transform -translate-x-1/2 opacity-60 bg-gradient-to-b from-transparent via-white to-transparent"></div>

        {/* Horizontal Line */}
        <div className="absolute inset-x-0 top-1/2 h-px transform -translate-y-1/2 opacity-60 bg-gradient-to-r from-transparent via-white to-transparent"></div>

        {/* Ripple + Icon */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Ripple />
            <MailCheck className="text-orange-500 text-xl" />
          </div>
        </div>

        {/* Step Cards */}
        <div className="absolute w-[50%] top-[18%] md:top-[25%] left-[22%] md:left-[25%] -translate-x-1/2 -translate-y-1/2 px-4 py-2 text-sm flex flex-col gap-1">
          <PhoneCall className="bg-neutral-800 rounded-md p-3 size-10 md:size-12 mb-4 text-orange-500" />
          <h1 className="md:text-xl font-semibold text-md tracking-tight leading-tight">
            1. Discovery Call
          </h1>
          <p className="md:text-sm text-xs text-neutral-400 max-w-xs">
            {" "}
            We understand your goals & target audience.
          </p>
        </div>
        <div className="absolute w-[50%] top-[22%] md:top-[25%] right-[25%] md:right-[20%] translate-x-1/2 -translate-y-1/2  px-4 py-2  text-sm flex flex-col  gap-1">
          <TvMinimalPlay className="bg-neutral-800 rounded-md p-3 size-10 md:size-12 mb-4 text-orange-500" />
          <h1 className="md:text-xl font-semibold text-md tracking-tight leading-tight">
            2. Copy & Strategy
          </h1>
          <p className="md:text-sm text-xs text-neutral-400 max-w-xs">
            {" "}
            We write high-converting copy and structure your website for maximum
            clarity and flow.
          </p>{" "}
        </div>
        <div className="absolute w-[50%] bottom-[20%] md:bottom-[25%] left-[22%] md:left-[25%] -translate-x-1/2 translate-y-1/2 pl-4  md:px-4 py-2 text-sm flex flex-col  gap-1">
          <FileUser className="bg-neutral-800 rounded-md p-3 size-10 md:size-12 mb-4 text-orange-500" />
          <h1 className="md:text-xl font-semibold text-md tracking-tight leading-tight">
            3. Design & Build
          </h1>
          <p className="md:text-sm text-xs text-neutral-400 max-w-xs">
            {" "}
            Clean, conversion-focused design meets scalable, fast development —
            all mobile-ready.
          </p>{" "}
        </div>
        <div className="absolute w-[50%] bottom-[20%] md:bottom-[25%] right-[25%] md:right-[20%] translate-x-1/2 translate-y-1/2 pl-4 md:px-4 py-2 flex flex-col  gap-1 text-sm">
          <LaptopMinimalCheck className="bg-neutral-800 rounded-md p-3 size-10 md:size-12 mb-4 text-orange-500" />
          <h1 className="md:text-xl font-semibold text-md tracking-tight leading-tight">
            4. Testing & Launch
          </h1>
          <p className="md:text-sm text-xs text-neutral-400 max-w-xs">
            {" "}
            Final tweaks, speed optimizations, and launch — ready to go live in
            just 7 days.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Steps;
