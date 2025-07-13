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
    <div className="relative flex flex-col items-center text-center text-neutral-800 py-[6rem] md:px-0 px-6">
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 w-full h-full opacity-20 z-10 fill-white/80 stroke-white/70",
          "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
          "mask-size-100 mask-repeat-no-repeat",
          "pointer-events-none"
        )}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 max-w-xl items-center md:py-0 py-[2rem]"
      >
        <div className="flex items-center justify-center gap-2 my-8 z-20">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-neutral-300"></div>

          <div className="border-r-[2px] border-l-[2px] p-1 rounded-3xl">
            <div className="px-3 pr-4 py-2 rounded-3xl border-[1px] shadow-sm text-sm font-medium flex items-center gap-1">
              <CircleDollarSign className="size-6 fill-orange-500 text-white" />
              <p>Pricing</p>
            </div>
          </div>

          <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-neutral-300"></div>
        </div>
        <h1 className="md:text-4xl text-3xl font-medium z-20">
          Invest in what moves the needle
        </h1>
      </motion.div>
      <Pricing2Demo />
    </div>
  );
};

export default Pricing;
