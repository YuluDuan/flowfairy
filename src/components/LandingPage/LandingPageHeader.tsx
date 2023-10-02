"use client";

import { days_one } from "@/app/font";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const LandingPageHeader = () => {
  return (
    <nav
      className={`flex justify-between py-5 pb-2 px-12 items-center border-b border-gray-100 fixed top-0 left-0 right-0 bg-white z-50`}
    >
      <div
        className={`${days_one.className} flex gap-2 items-center text-2xl leading-normal orange_gradient cursor-default`}
      >
        <Image src={"/assets/logo.png"} height={30} width={30} alt="Logo" />
        FlowFairy
      </div>
      <div className="flex gap-x-14 leading-5 py-3 text-base font-medium">
        <Link href="#features">Features</Link>
        <Link href="#developer">Meet the Developer</Link>
        {/* <Link href="#testimonials">Testimonials</Link> */}
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
