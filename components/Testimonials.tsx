import { MoveRight, Star } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

// Testimonials data
const testimonials = [
  {
    name: "Saumya Seth",
    tag: "We Launched 3x Faster Than Expected",
    image: "/t3.jpg",
    title: "Co-Founder",
    company: "SaasBoomi",
    quote:
      "Arin didn’t just deliver a site — he gave us the confidence to launch quickly. His work helped us go live in under 10 days, and we were already getting inquiries the first week.",
  },
  {
    name: "Ritesh Raut",
    tag: "Our Conversions Doubled in 2 Weeks",
    image: "/t1.png",
    title: "Founder",
    company: "Quantumflux",
    quote:
      "Honestly, I was shocked at the quality and speed. Arin’s communication is better than most agencies we’ve worked with. No hand-holding required — he just gets it.",
  },
  {
    name: "Kartik Mandrekar",
    tag: "Felt Like Working With a Seasoned Pro",
    image: "/t2.jpg",
    title: "Co-Founder",
    company: "Scooter AI",
    quote:
      "Honestly, I was shocked at the quality and speed. Arin’s communication is better than most agencies we’ve worked with. No hand-holding required — he just gets it.",
  },
];

const font = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Testimonials = () => {
  return (
    <div className="flex flex-col py-[6rem] md:px-0 px-6 items-center w-full bg-neutral-50 text-neutral-800">
      <div className="md:w-7xl flex flex-col justify-between items-center">
        <div className="flex flex-col gap-4 max-w-xl items-center">
          <div className="bg-neutral-100 text-neutral-800 border-[1px] w-fit border-neutral-300 text-xs rounded-full px-8 py-1 uppercase z-40">
            <p className={font.className}>✨ Testimonials</p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="md:text-4xl text-3xl font-medium">What People Say</h1>

        <div className="pt-[4rem] grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-neutral-100 space-y-6 border-[1px] border-neutral-300 p-6 rounded-xl w-full md:w-sm"
            >
              <div className="space-y-2">
                <h1 className="text-xl tracking-tight font-medium">
                  {item.tag}
                </h1>
                <div className="flex gap-1">
                  <Star className="fill-yellow-200 text-yellow-200 size-5" />
                  <Star className="fill-yellow-200 text-yellow-200 size-5" />
                  <Star className="fill-yellow-200 text-yellow-200 size-5" />
                  <Star className="fill-yellow-200 text-yellow-200 size-5" />
                  <Star className="fill-neutral-300 text-neutral-300 size-5" />
                </div>
              </div>
              <p className="md:text-lg text-sm text-neutral-500">
                “{item.quote}”
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={item.image}
                  alt="t2"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h1 className="md:text-lg text-lg font-medium">
                    {item.name}
                  </h1>
                  <p className="text-sm italic">
                    {item.title}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-[4rem] flex flex-col items-center gap-2 text-center">
            <h1 className="text-lg">Want similar results for your startup?</h1>
          <Button className="px-6 py-4 text-sm rounded-full gap-6 bg-neutral-800 z-20 w-fit">
            Let's talk
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
