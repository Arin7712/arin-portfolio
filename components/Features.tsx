"use client";
import {
  CircleUserRound,
  Grid2x2Check,
  Handshake,
  MonitorSmartphone,
  MoveRight,
  Rocket,
  SlidersVertical,
  WandSparkles,
} from "lucide-react";
import { Inter } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import ActionButton from "./ActionButton";

const font = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// Animation variant
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Features = () => {
  return (
    <div className="flex flex-col py-[6rem] md:px-0 px-6 items-center w-full text-neutral-800">
      <div className="md:max-w-7xl max-w-full flex flex-col justify-between items-center">
        <motion.div
          variants={fadeIn(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-2 text-xs rounded-full px-1 py-1 z-40"
        >
             <div className="flex items-center justify-center gap-2 my-8 z-20">
            <div className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent to-neutral-300"></div>

            <div className="border-r-[2px] border-l-[2px] p-1 rounded-3xl">
              <div className="px-3 pr-4 py-2 rounded-3xl border-[1px] shadow-sm text-sm font-medium flex items-center gap-1">
                <CircleUserRound className="size-5 text-orange-500" />
                <p>Features</p>
              </div>
            </div>

            <div className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent to-neutral-300"></div>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:text-4xl text-3xl font-medium text-center"
        >
          All our websites include
        </motion.h1>

        {/* Card Groups */}
        <div className="flex flex-col gap-6 space-y-6 pt-[4rem] md:max-w-6xl">
          {/* Layer 1 */}
          <div className="flex md:flex-row flex-col justify-between gap-4 md:min-w-6xl">
            {[
              {
                icon: WandSparkles,
                title: "Impactful Copy",
                desc: "Words crafted to instantly connect with your ideal clients and move them toward booking a call.",
              },
              {
                icon: MonitorSmartphone,
                title: "Conversion-focused Design",
                desc: "A layout built to guide visitors step-by-step toward taking action, not just browsing.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn(0.3 + i * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`${
                  i === 0 ? "md:w-[70%]" : "md:w-[30%]"
                } p-2 shadow-lg gap-6 bg-neutral-50 border-[1px] rounded-4xl flex flex-col`}
              >
                <div className="bg-neutral-100 border-[1px] px-6 rounded-4xl w-full p-6 space-y-6 pb-[4rem] h-full">
                  <div className="p-1 bg-white rounded-md w-fit shadow-md">
                    <item.icon className="p-3 rounded-md text-orange-500 bg-neutral-100 size-15" />
                  </div>
                  <h1 className="text-xl font-medium tracking-tight">
                    {item.title}
                  </h1>
                  <p className="text-sm text-neutral-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Layer 2 */}
        <div className="flex md:flex-row flex-col justify-between gap-4 md:max-w-6xl mt-4">
          {[
            {
              icon: Grid2x2Check,
              title: "Seamless User Experience",
              desc: "Effortless navigation that keeps prospects engaged and eager to learn more about your services.",
            },
            {
              icon: Rocket,
              title: "High Performance & Speed",
              desc: "Lightning-fast loading that keeps potential clients from clicking away.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn(0.7 + i * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${
                i === 0 ? "md:w-[30%]" : "md:w-[70%]"
              } p-2 shadow-lg gap-6 bg-neutral-50 border-[1px] rounded-4xl flex flex-col`}
            >
              <div className="bg-neutral-100 border-[1px] px-6 rounded-4xl w-full p-6 space-y-6 pb-[4rem] h-full">
                <div className="p-1 bg-white rounded-md w-fit shadow-md">
                  <item.icon className="p-3 rounded-md text-orange-500 bg-neutral-100 size-15" />
                </div>
                <h1 className="text-xl font-medium tracking-tight">
                  {item.title}
                </h1>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Layer 3 */}
        <div className="flex md:flex-row flex-col justify-between gap-4 md:max-w-6xl mt-4">
          {[
            {
              icon: SlidersVertical,
              title: "Speed-First Performance",
              desc: "Built using lightweight, modern frameworks (like Next.js + Tailwind), your site loads in under 1.5s — even on 3G.",
            },
            {
              icon: Handshake,
              title: "Scalable & Easy to Update",
              desc: "Your team can launch new pages, offers, or experiments fast.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn(1.1 + i * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${
                i === 0 ? "md:w-[70%]" : "md:w-[30%]"
              } p-2 shadow-lg gap-6 bg-neutral-50 border-[1px] rounded-4xl flex flex-col`}
            >
              <div className="bg-neutral-100 border-[1px] px-6 rounded-4xl w-full p-6 space-y-6 pb-[4rem] h-full">
                <div className="p-1 bg-white rounded-md w-fit shadow-md">
                  <item.icon className="p-3 rounded-md text-orange-500 bg-neutral-100 size-15" />
                </div>
                <h1 className="text-xl font-medium tracking-tight">
                  {item.title}
                </h1>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          variants={fadeIn(1.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-[4rem]"
        >
          <ActionButton title="Contact Us" />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
