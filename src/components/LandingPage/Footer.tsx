import { days_one } from "@/app/font";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col py-8 px-12">
      <div className="flex justify-between items-center">
        <div
          className={`${days_one.className} flex gap-2 items-center text-2xl leading-normal orange_gradient cursor-default`}
        >
          <Image src={"/assets/logo.png"} height={30} width={30} alt="Logo" />
          FlowFairy
        </div>
        <div className="flex gap-8">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#developer">Meet the Developer</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="right-reserve">
        <p>© Copyright by Yulu Duan 2023. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
