import { days_one } from "@/app/font";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="w-full purple_bg px-12 py-24 lg:flex-row flex flex-col items-center gap-10 justify-center cursor-default pb-32">
      <div className="flex flex-col fix_width_2 gap-7 relative">
        <Image
          src={"/assets/2.svg"}
          height={30}
          width={30}
          alt="flower"
          className="absolute -top-12 left-16 overflow-hidden"
        />
        <p
          className={`py-5 text-4xl line-hight-55 ${days_one.className} text-slate-950`}
        >
          Simplify, Connect, Create Where Everything{" "}
          <span className="purple_text_gradient">Flows</span>
        </p>

        <p className="text-base font-medium pb-12">
          A revolutionary solution allows you to combine logical points with
          supported documents and your notes within a unified flowchart,
          supercharging your creativity and productivity.
        </p>

        <Button className="start-btn cursor-pointer">
          <Link href={"/sign-up"}>Start Now</Link>
        </Button>

        <Image
          src={"/assets/1.svg"}
          height={20}
          width={20}
          alt="flower"
          className="absolute -bottom-28 right-7"
        />
      </div>

      <Image
        src={"/assets/FlowChart.svg"}
        width={640}
        height={508}
        alt="flow chart"
      />
    </div>
  );
};

export default Introduction;
