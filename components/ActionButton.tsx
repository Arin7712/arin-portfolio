import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const ActionButton = ({title}: {title: string}) => {
  return (
    <Link href="https://calendly.com/aringawande7712/30min">
      <Button className="px-6 py-4 text-sm rounded-full gap-6 bg-neutral-800 z-20 hover:cursor-pointer">
        {title}
        <MoveRight />
      </Button>
    </Link>
  );
};

export default ActionButton;
