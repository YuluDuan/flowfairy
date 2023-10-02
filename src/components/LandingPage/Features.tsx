import { days_one } from "@/app/font";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Features = () => {
  return (
    <div
      id="features"
      className="purple_gradient_bg px-12 flex flex-col items-center justify-center py-20"
    >
      <div>
        <p className={`text-3xl ${days_one.className} leading-normal pb-20`}>
          Unleash Your Creative Flow with{" "}
          <span className="bg-gradient-to-r from-purple-500 to-yellow-500 text-transparent bg-clip-text">
            FlowFairy
          </span>
        </p>
      </div>
      {/* First Feature */}
      <div className={`flex gap-12 items-center pb-32`}>
        <div className="flex flex-col gap-12 fix_width_1 relative">
          <Image
            src={"/assets/4.svg"}
            height={30}
            width={30}
            alt="flower"
            className="absolute -top-16 right-0 overflow-hidden"
          />

          <Image
            src={"/assets/3.svg"}
            height={20}
            width={20}
            alt="flower"
            className="absolute bottom-20 left-12 overflow-hidden"
          />
          <Image
            src="/assets/feature-1.svg"
            width={45}
            height={45}
            alt="feature-1"
          />
          <p className="text-2xl font-bold text-slate-800 pb-10">
            Elegantly enrich your flowcharts with references, notes, and data,
            while linking nodes to essential documents, keeping information at
            your fingertips.
          </p>

          <Button className="start-btn cursor-pointer">
            <Link href={"/sign-up"}>Learn More</Link>
          </Button>
        </div>
        <Image
          src="/assets/placehoder.png"
          width={568}
          height={400}
          alt="placehoder"
        />
      </div>

      {/* Second Feature */}
      <div className={`flex gap-12 items-center`}>
        <Image
          src="/assets/placehoder.png"
          width={568}
          height={400}
          alt="placehoder"
        />
        <div className="flex flex-col gap-12 fix_width_1 relative">
          <Image
            src={"/assets/1.svg"}
            height={30}
            width={30}
            alt="flower"
            className="absolute -top-16 right-0 overflow-hidden"
          />

          <Image
            src={"/assets/2.svg"}
            height={20}
            width={20}
            alt="flower"
            className="absolute bottom-20 left-12 overflow-hidden"
          />
          <Image
            src="/assets/feature-2.svg"
            width={45}
            height={45}
            alt="feature-2"
          />
          <p className="text-2xl font-bold text-slate-800 pb-10">
            Record diverse notes alongside your flowchart, fostering a holistic
            work environment.
          </p>

          <Button className="start-btn cursor-pointer">
            <Link href={"/sign-up"}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
