import { days_one } from "@/app/font";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Developer = () => {
  return (
    <div
      id="developer"
      className="flex flex-col purple_bg2 items-center justify-center py-20 pb_class"
    >
      <p className={`text-3xl ${days_one.className} leading-normal pb-20`}>
        Meet the Developer
      </p>

      <div className="flex gap-20">
        {/* left section */}
        <div className={`flex flex-col fix_width_1 gap-20 relative`}>
          <Image
            src={"/assets/3.svg"}
            height={30}
            width={30}
            alt="flower"
            className="absolute -top-5 right-0 overflow-hidden"
          />

          <Image
            src={"/assets/1.svg"}
            height={25}
            width={25}
            alt="flower"
            className="absolute bottom-60 -right-20 overflow-hidden"
          />
          <div
            className={`flex flex-col text-2xl font-semibold ${days_one.className}`}
          >
            <p>Hello 👋,</p>
            <p>
              My name is <span className="purple_text_gradient">Yulu Duan</span>
            </p>
            <p>I am a Full Stack Developer</p>
          </div>

          <div>
            <p>
              <span className="font-semibold bg-gradient-to-r from-purple-500 to-yellow-500 text-transparent bg-clip-text">
                FlowFairy
              </span>{" "}
              was born from a heartfelt mission to empower my twin sister,
              Nikki, in her journey of knowledge management and creativity
              enhancement. Facing the challenges of storing research papers,
              logic diagrams, and notes separately, we created FlowFairy—a
              revolutionary tool that seamlessly integrates logic, research
              materials, and notes into a unified flowchart.
              <br />
              <br />
              This solution simplifies not only literature review but also
              boosts creativity and knowledge organization across various
              domains. We hope to help more people on their journey to enhanced
              productivity and creativity.
            </p>
          </div>

          {/* Button */}
          <div className="flex gap-20">
            <button className="cursor-pointer pink_outline-btn h-10 px-4 py-2">
              <a href="/resume.pdf" download="YuluDuan.pdf">
                Resume
              </a>
            </button>
            <button className="cursor-pointer pink_gradient-btn2 h-10 px-4 py-2">
              <a href="#contact">Let&apos;s Talk!</a>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`flex flex-col fix_width_2 gap-7 items-center justify-center`}
        >
          <Image
            src={"/assets/avatar.jpeg"}
            height={350}
            width={350}
            alt="developer avatar"
            className="ml-20 about_me-image"
          />
          {/* Social icons */}
          <div className="ml-20 flex gap-10">
            <a href="https://www.instagram.com/lucy_duan1025/" target="_blank">
              <Image
                src={"/assets/ig.svg"}
                height={21}
                width={25}
                alt="Ins"
                className="padding-top"
              />
            </a>

            <a href="https://www.linkedin.com/in/yuluduan/" target="_blank">
              <Image
                src={"/assets/linkedin.svg"}
                height={21}
                width={25}
                alt="linkedin"
              />
            </a>

            <a href="https://github.com/YuluDuan" target="_blank">
              <Image
                src={"/assets/github.svg"}
                height={21}
                width={25}
                alt="github"
              />
            </a>
          </div>

          {/* Button */}
          <button className="ml-20 cursor-pointer orange_outline-btn h-12 px-4 py-2">
            <a
              href="https://www.buymeacoffee.com/yuluduan"
              target="_blank"
              className={`orange_gradient  ${days_one.className}`}
            >
              Buy Me a Coffee
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Developer;
