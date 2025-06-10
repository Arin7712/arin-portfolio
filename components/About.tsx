"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
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
          className="flex flex-col gap-4 max-w-xl items-center"
        >
          <div className="bg-neutral-100 text-neutral-800 border-[1px] w-fit border-neutral-300 text-xs rounded-full px-8 py-1 uppercase z-40">
            <p className={font.className}>✨ About</p>
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
                  Hey, I’m Arin — a 16-year-old web designer and developer
                  helping startups launch fast,{" "}
                  <span className="font-medium text-neutral-800">
                    conversion-focused
                  </span>{" "}
                  websites.
                </p>
                <p>
                  I work closely with early-stage founders to turn ideas into
                  clean, high-performing websites that{" "}
                  <span className="font-medium text-neutral-800">
                    drive leads and growth.
                  </span>
                  Every site I build is tailored, fast, and focused on results —
                  not fluff.
                </p>
                <p>
                  You work directly with me, no middlemen. I take on only a few
                  projects at a time to ensure{" "}
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
