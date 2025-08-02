import { ArrowRight, Check, CircleCheckBig, X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import ActionButton from "./ActionButton";

const withoutScooter = [
  "Outsourcing everything with no real control",
  "Push trendy designs without strategy",
  "Overpromise but underdeliver",
  "Priotrize design over conversion",
  "Use bloated templates without customization",
  "Delay timelines and miss deadlines",
  "Lack clear communication or project updates",
  "Repeat yourself 10 times per day",
  "Focus on visuals and not user experience",
  "Don't understand your business goals",
  "No copywriting — you’re left writing your own website content",
  "Build websites that look good but don't convert",
  "No post-launch support",
  "They aren't specialized for only websites",
];

const withScooter = [
  "Strategy-first design — we align your website with business goals",
  "Copy + design + dev — all in one place (no gaps, no delays)",
  "Real human communication — no ghosting, no vague updates",
  "Specialized for websites only"
];

const Comparision = () => {
  return (
    <div className="relative md:py-[6rem] py-6 px-6 lg:px-[10rem] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {/* With Scooter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" shadow-sm border bg-orange-400 rounded-xl p-8 flex flex-col justify-between min-h-full relative md:order-0 order-2"
        >
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 w-full h-full opacity-0",
          "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
          "mask-size-100 mask-repeat-no-repeat",
          "pointer-events-none"
        )}
      />
          <div className="flex items-center gap-3 mb-4">
            <CircleCheckBig className="text-white size-6" />
            <h2 className="text-2xl font-medium text-neutral-100">
              What I do
            </h2>
          </div>

          <div className="space-y-4 text-neutral-100 text-sm pt-2">
            {withScooter.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-white p-1 rounded-full">
                  <Check className="text-orange-500 size-4" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 z-10">
            <ActionButton title="Yes, I want it" isDark="yes"/>
          </div>
        </motion.div>

        {/* Without Scooter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-100 border rounded-xl p-8 flex flex-col min-h-full"
        >
          <h2 className="text-2xl font-medium text-neutral-800 mb-6">
            What other agencies do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral-500 text-sm">
            {withoutScooter.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-red-100 p-1 rounded-full">
                  <X className="text-red-500 size-4" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Comparision;
