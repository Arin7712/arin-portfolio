"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CircleUserRound, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { link } from "fs";

const font = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const portfolio = [
  {
    image: "/project1.png",
    title: "Saas",
    name: "SaasBoomi",
    description: "We designed their website to feel as premium as their brand, elevating trust and positioning.",
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

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount(portfolio.length);
  };

  const visiblePortfolios = portfolio.slice(0, visibleCount);

  return (
    <div className="flex flex-col items-center text-center py-[6rem] md:px-0 px-6 bg-neutral-50 text-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col max-w-xl items-center"
      >
        <div className="flex items-center justify-center gap-2 my-8 z-20">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-neutral-300"></div>

          <div className="border-r-[2px] border-l-[2px] p-1 rounded-3xl">
            <div className="px-3 pr-4 py-2 rounded-3xl border-[1px] shadow-sm text-sm font-medium flex items-center gap-1">
              <CircleUserRound className="size-5 text-orange-500" />
              <p>Portfolio</p>
            </div>
          </div>

          <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-neutral-300"></div>
        </div>

        <h1 className="md:text-4xl text-3xl font-medium text-center">
          Results in Action
        </h1>
      </motion.div>

      <div className="md:pt-[6rem] pt-[4rem] space-y-8 max-w-7xl">
        {visiblePortfolios.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="w-full shadow-lg p-2 gap-6 bg-white rounded-4xl flex md:flex-row flex-col justify-between"
          >
            <div className="md:w-[50%] bg-gray-100 px-6 md:px-[2rem] py-8 md:py-[5rem] rounded-4xl">
              <Image
                src={item.image}
                alt={item.name}
                width={1200}
                height={1200}
                className="rounded-md"
              />
            </div>
            <div className="md:w-[50%] md:px-0 px-4 pr-0 py-4 md:pr-10 flex flex-col justify-between items-start text-start">
              <div className="space-y-4">
                <div className="bg-neutral-100 text-orange-500 font-medium border-[1px] w-fit border-neutral-300 text-xs rounded-full px-8 py-1 z-40">
                  <p className={font.className}>{item.title}</p>
                </div>
                <h1 className="text-3xl font-semibold">{item.name}</h1>
                <p className="text-md font-medium text-stone-500">
                  {item.description}
                </p>
              </div>

              <div className="border-t-[1px] py-6 w-full md:mt-0 mt-10">
                <Link href={item.link}>
      <Button className="px-1 pl-4 py-4 tracking-tight text-sm rounded-full gap-4 bg-orange-500 text-neutral-100 z-20 hover:cursor-pointer hover:text-neutral-100">
                    Explore the Site 
        <MoveRight className="bg-white p-2 rounded-full text-orange-500 size-8"/>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCount < portfolio.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="md:pt-[6rem] pt-6"
        >
          <Button className="px-6 rounded-full py-2" onClick={handleLoadMore}>
            Load more
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;
