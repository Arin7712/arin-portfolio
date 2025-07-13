"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { CircleDollarSign, CircleUserRound, MoveRight, SquareUser, UserRoundSearch } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import ActionButton from "./ActionButton";

const font = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const About = () => {
  return (
    <div className="flex flex-col py-[6rem] md:px-0 px-6 items-center w-full bg-neutral-50 text-neutral-800">
      <div className="md:w-7xl flex flex-col justify-between items-center">
        {/* Tag */}
        <motion.div
          {...fadeIn(0)}
          className="bg-neutral-50  flex items-center gap-2 text-xs rounded-full px-1 py-1 z-40"
        >
          <div className="flex items-center justify-center gap-2 my-8 z-20">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-neutral-300"></div>

            <div className="border-r-[2px] border-l-[2px] p-1 rounded-3xl">
              <div className="px-3 pr-4 py-2 rounded-3xl border-[1px] shadow-sm text-sm font-medium flex items-center gap-1">
                <CircleUserRound className="size-5 text-orange-500" />
                <p>About</p>
              </div>
            </div>

            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-neutral-300"></div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeIn(0.2)}
          className="md:text-4xl text-3xl font-medium"
        >
          Meet the Founder
        </motion.h1>

        {/* Card Container */}
        <motion.div
          {...fadeIn(0.4)}
          className="bg-white shadow-lg md:shadow-xl rounded-xl p-2 md:max-w-6xl mt-6 md:mt-[4rem]"
        >
          <div className="rounded-xl p-6 bg-zinc-100 space-y-6 flex md:flex-row flex-col gap-10">
            {/* Image */}
            <motion.div {...fadeIn(0.6)}>
              <Image
                src="/arin.jpg"
                alt="arin"
                width={450}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              {...fadeIn(0.8)}
              className="space-y-4 flex flex-col justify-center text-neutral-800"
            >
              <h1 className="text-2xl font-medium">Arin Gawande</h1>
              <div className="text-md text-neutral-500 max-w-md space-y-4">
                <p>
                  Hey, I’m Arin a 16 year old web designer and developer
                  helping founders get <span className="font-medium text-neutral-800">more leads every month</span> with{" "}
                  <span className="font-medium text-neutral-800">
                    conversion-focused
                  </span>{" "}
                  websites, no ads spend.
                </p>
                <p>
                  I work closely with early-stage founders to turn ideas into
                  clean, high-performing websites that{" "}
                  <span className="font-medium text-neutral-800">
                    drive leads and growth.{" "}
                  </span>
                   Every site I build is tailored, fast, and focused on results,
                  not fluff.
                </p>
                <p>
                  You work directly with me, no middlemen. I only take 2 
                  projects a month to ensure{" "}
                  <span className="font-medium text-neutral-800">
                    high quality
                  </span>{" "}
                  and fast delivery.
                </p>
              </div>

              {/* CTA Button */}
              <motion.div {...fadeIn(1.0)} className="pt-2">
                <ActionButton title="Schedule call" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
