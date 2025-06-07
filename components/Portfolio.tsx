import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const font = Inter({ weight: ["400", "500", "600", "700"] });

const portfolio = [
  {
    image: "/project1.png",
    title: "Saas",
    name: "SaasBoomi",
    description:
      "We redesigned their website to feel as premium as their brand—elevating trust and positioning.",
    link: "https://saasboomi.vercel.app/",
  },
  {
    image: "/project2.png",
    title: "Sales",
    name: "Scooter AI",
    description:
      "We redesigned their website to feel as premium as their brand—elevating trust and positioning.",
    link: "https://saasboomi.vercel.app/",
  },
  {
    image: "/project3.png",
    title: "Sales",
    name: "Quantumflux",
    description:
      "We redesigned their website to feel as premium as their brand—elevating trust and positioning.",
    link: "https://saasboomi.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center text-center py-[6rem] md:px-0 px-6 bg-neutral-100 text-neutral-800">
      <div className="flex flex-col gap-4 max-w-xl items-center">
        <div className="bg-neutral-100 border-[1px] w-fit border-neutral-300 text-xs rounded-full px-8 py-1 uppercase z-40">
          <p className={font.className}>✨ Portfolio</p>
        </div>
        <h1 className="md:text-4xl text-3xl font-medium">
          Websites that convert - <br /> And look damm good doing it
        </h1>
      </div>

      <div className="md:pt-[6rem] pt-[4rem] space-y-8 max-w-7xl">
        {portfolio.map((item, index) => (
          <div
            key={index}
            className="w-full shadow-xl p-2 gap-6 bg-white rounded-4xl flex md:flex-row flex-col justify-between"
          >
            <div className="md:w-[50%] bg-neutral-100 px-[2rem] py-[6rem] rounded-4xl">
              <Image
                src={item.image}
                alt="Project 1"
                width={1200}
                height={1200}
              />
            </div>
            <div className="md:w-[50%] md:px-0 px-4 pr-0 py-4 md:pr-10 flex flex-col justify-between items-start text-start">
              <div className="space-y-4">
                <div className="bg-neutral-100 border-[1px] w-fit border-neutral-300 text-xs rounded-full px-8 py-1 uppercase z-40">
                  <p className={font.className}>{item.title}</p>
                </div>
                <h1 className="text-3xl font-semibold">{item.name}</h1>
                <p className="text-md font-medium text-stone-500">
                  {item.description}
                </p>
              </div>

              <div className="border-t-[1px] py-6 w-full md:mt-0 mt-10">
                <Link href={item.link}>
                  <Button className="px-6 rounded-full">
                    View site <MoveRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
