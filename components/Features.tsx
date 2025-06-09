import {
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

const font = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Features = () => {
  return (
    <div className="flex flex-col py-[6rem] md:px-0 px-6 items-center w-full text-neutral-800">
      <div className="md:max-w-7xl max-w-full flex flex-col justify-between items-center">
        <div className="flex flex-col gap-4 max-w-xl items-center">
          <div className="bg-neutral-100 text-neutral-800 border-[1px] w-fit border-neutral-300 text-xs rounded-full px-8 py-1 uppercase z-40">
            <p className={font.className}>✨ Features</p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="md:text-4xl text-3xl font-medium text-center">
          All the our websites include
        </h1>

        <div className="flex flex-col gap-6 space-y-6 pt-[4rem] md:max-w-6xl">
          {/* Layer 1 */}
          <div className="flex md:flex-row flex-col justify-between gap-4  md:min-w-6xl">
            <div className="md:w-[70%] p-2 shadow-lg gap-6 bg-neutral-50 border-[1px] rounded-4xl flex md:flex-row flex-col justify-between ">
              <div className="bg-neutral-100 border-[1px] px-6 rounded-4xl w-full p-6 space-y-6 pb-[4rem]">
                <div className="p-1 bg-white rounded-md w-fit shadow-md">
                  <WandSparkles className="p-3 rounded-md text-neutral-800 bg-neutral-100 size-15" />
                </div>
                <h1 className="text-xl font-medium tracking-tight">
                  Conversion-Focused Design
                </h1>
                <p className="text-sm text-neutral-500">
                  Tailored design that fits your brand and your goals. No
                  templates.
                </p>
              </div>
            </div>
            <div className="md:w-[30%] p-2 shadow-lg  gap-6 bg-neutral-50 border-[1px] rounded-4xl flex md:flex-row flex-col justify-between">
              <div className="bg-neutral-100 border-[1px] px-6 rounded-4xl w-full p-6 space-y-6 pb-[4rem]">
                <div className="p-1 bg-white rounded-md w-fit shadow-md">
                  <MonitorSmartphone className="p-3 rounded-md text-neutral-800 bg-neutral-100 size-15" />
                </div>
                <h1 className="text-xl font-medium tracking-tight">
                  Mobile & Responsiveness
                </h1>
                <p className="text-sm text-neutral-500">
                  Your site will look great and work perfectly on every device.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2 */}
        <div className="flex md:flex-row flex-col justify-between gap-4 md:min-w-6xl mt-4">
          <div className="md:w-[30%] p-2 shadow-lg gap-6 bg-neutral-50 border-[1px] rounded-4xl flex md:flex-row flex-col justify-between ">
            <div className="bg-neutral-100 border-[1px] px-6 rounded-4xl w-full p-6 space-y-6 pb-[4rem]">
              <div className="p-1 bg-white rounded-md w-fit shadow-md">
                <Grid2x2Check className="p-3 rounded-md text-neutral-800 bg-neutral-100 size-15" />
              </div>
              <h1 className="text-xl font-medium tracking-tight">
                Built-In Trust Elements
              </h1>
              <p className="text-sm text-neutral-500">
                Includes testimonials and brand positioning that shows your
                credibility instantly.
              </p>
            </div>
          </div>
          <div className="md:w-[70%] p-2 shadow-lg  gap-6 bg-neutral-50 border-[1px] rounded-4xl flex md:flex-row flex-col justify-between">
            <div className="bg-neutral-100 border-[1px] px-6 rounded-4xl w-full p-6 space-y-6 pb-[4rem]">
              <div className="p-1 bg-white rounded-md w-fit shadow-md">
                <Rocket className="p-3 rounded-md text-neutral-800 bg-neutral-100 size-15" />
              </div>
              <h1 className="text-xl font-medium tracking-tight">
                SEO Optimization
              </h1>
              <p className="text-sm text-neutral-500">
                Built to rank on Google and load lightning fast out of the box.
              </p>
            </div>
          </div>
        </div>

        {/* Layer 3 */}
        <div className="flex md:flex-row flex-col justify-between gap-4 md:max-w-6xl mt-4">
          <div className="md:w-[70%] p-2 shadow-lg gap-6 bg-neutral-50 border-[1px] rounded-4xl flex md:flex-row flex-col justify-between ">
            <div className="bg-neutral-100 border-[1px] px-6 rounded-4xl w-full p-6 space-y-6 pb-[4rem]">
              <div className="p-1 bg-white rounded-md w-fit shadow-md">
                <SlidersVertical className="p-3 rounded-md text-neutral-800 bg-neutral-100 size-15" />
              </div>
              <h1 className="text-xl font-medium tracking-tight">
                Speed-First Performance
              </h1>
              <p className="text-sm text-neutral-500">
                Built using lightweight, modern frameworks (like Next.js +
                Tailwind), your site loads in under 1.5s — even on 3G.
              </p>
            </div>
          </div>
          <div className="md:w-[30%] p-2 shadow-lg  gap-6 bg-neutral-50 border-[1px] rounded-4xl flex md:flex-row flex-col justify-between">
            <div className="bg-neutral-100 border-[1px] px-6 rounded-4xl w-full p-6 space-y-6 pb-[4rem]">
              <div className="p-1 bg-white rounded-md w-fit shadow-md">
                <Handshake className="p-3 rounded-md text-neutral-800 bg-neutral-100 size-15" />
              </div>
              <h1 className="text-xl font-medium tracking-tight">
                Scalable & Easy to Update
              </h1>
              <p className="text-sm text-neutral-500">
                Your team can launch new pages, offers, or experiments fast.
              </p>
            </div>
          </div>
        </div>
         <Button className="px-6 py-4 mt-[4rem] text-sm rounded-full gap-6 bg-neutral-800 z-20 w-fit">
            Contact Us
            <MoveRight />
          </Button>
      </div>
    </div>
  );
};

export default Features;
