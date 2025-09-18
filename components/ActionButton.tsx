import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const ActionButton = ({title, isDark}: {title: string, isDark?: string}) => {
  return (
    <Link href="https://calendly.com/aringawande7712/30min">
      <Button className={`px-2 pl-4 py-6 text-sm rounded-full gap-4 ${isDark === "yes" ? "bg-neutral-800" : "bg-orange-500 hover:bg-orange-500"}  text-neutral-100 z-20 hover:cursor-pointer hover:text-neutral-100`}>
        {title}
        <MoveRight className="bg-white p-2 rounded-full text-orange-500 size-8"/>
      </Button>
    </Link>
  );
};

export default ActionButton;
