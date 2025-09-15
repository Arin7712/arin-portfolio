"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CircleDollarSign, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { link } from "fs";
import { Pricing2Demo } from "./Pricing2Demo";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Comparision from "./Comparision";

const font = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const portfolio = [
  {
    image: "/project1.png",
    title: "Saas",
    name: "SaasBoomi",
    description:
      "We designed their website to feel as premium as their brand—elevating trust and positioning.",
    link: "https://saasboomi.vercel.app/",
  },
  {
    image: "/project5.png",
    title: "Nutrition",
    name: "P-NUT",
    description: "A conversion-focused website that drives leads and growth.",
    link: "https://personalnutrition.vercel.app/",
  },
  {
    image: "/project3.png",
    title: "Software",
    name: "Quantumflux",
    description: "A conversion-focused website that drives leads and growth.",
    link: "https://saasboomi.vercel.app/",
  },
  {
    image: "/project2.png",
    title: "Sales",
    name: "Scooter AI",
    description: "We redesigned their website to secure a funding round.",
    link: "https://saasboomi.vercel.app/",
  },
  {
    image: "/project4.png",
    title: "Marketing",
    name: "Vision",
    description:
      "A website that drives leads and growth with conversion-focused design.",
    link: "https://ads-agency-mockup.vercel.app/",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3 },
  }),
};

const Pricing = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount(portfolio.length);
  };

  const visiblePortfolios = portfolio.slice(0, visibleCount);

  return (
    <div className="relative flex flex-col items-center text-neutral-100 pt-6 md:pt-[6rem] px-0 bg-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 max-w-xl items-center md:py-0 py-6"
      >
        <div className="flex items-center justify-center gap-2 z-20">
          <div className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent to-neutral-300"></div>

          <div className="border-r-[2px] border-l-[2px] border-neutral-100 p-1 rounded-3xl">
            <div className="px-3 pr-4 py-2 rounded-3xl border-[1px] border-neutral-100 shadow-sm text-sm font-medium flex items-center gap-1">
              <CircleDollarSign className="size-6 fill-orange-500 text-white" />
              <p className="text-neutral-100">Why ScaleSite</p>
            </div>
          </div>

          <div className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent to-neutral-300"></div>
        </div>
        <h1 className="md:text-4xl text-3xl text-center font-medium z-20">
          Invest in what moves the needle 
        </h1>
      </motion.div>
      <Comparision/>
      {/* <Pricing2Demo /> */}
    </div>
  );
};

export default Pricing;
