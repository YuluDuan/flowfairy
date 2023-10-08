"use client";

import { days_one } from "@/app/font";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

      {/* Mobile Menu Button (Hamburger) */}
      {/* <div className="lg:hidden"> */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="lg:hidden text-2xl"
            aria-label="Toggle Mobile Menu"
          >
            <FaBars />
          </button>
        </PopoverTrigger>

        {/* Mobile Menu (Hidden by default) */}
        <PopoverContent
          className="w-30"
          sideOffset={15}
          align="end"
          alignOffset={-30}
        >
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#developer">Meet the Developer</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              {/* Mobile Sign In and Sign Up Buttons */}
              <li>
                <a href="/sign-in" className="purple_text_gradient">
                  Sign In
                </a>
              </li>
              <li>
                <a href="/sign-up" className="purple_text_gradient">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
      {/* </div> */}

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-x-14 leading-5 py-3 text-base font-medium">
        <Link href="#features">Features</Link>
        <Link href="#developer">Meet the Developer</Link>
        {/* <Link href="#testimonials">Testimonials</Link> */}
        <Link href="#contact">Contact</Link>
      </div>

      <div className="hidden lg:flex gap-x-8 items-center font-medium">
        <Link href="/sign-in">Login</Link>
        <Button className="purple_gradient">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </nav>
  );
};

export default LandingPageHeader;
