"use client";

import { days_one } from "@/app/font";
import { Button } from "../ui/button";
import Link from "next/link";

const LandingPageHeader = () => {
  return (
    <nav
      className={`flex justify-between py-5 pb-2 px-20 items-center border-b border-gray-100 sticky top-0`}
    >
      <div
        className={`${days_one.className} text-xl leading-normal orange_gradient cursor-default`}
      >
        FlowFairy
      </div>
      <div className="flex gap-x-14 leading-5 py-3 text-base font-medium">
        <Link href="#features">Features</Link>
        <Link href="#developer">Meet the Developer</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <div className="flex gap-x-8 items-center font-medium">
        <Link href="/sign-in">Login</Link>
        <Button className="purple_gradient">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </nav>
  );
};

export default LandingPageHeader;
