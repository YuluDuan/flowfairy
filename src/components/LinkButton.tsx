import Link from "next/link";
import { GoProjectSymlink } from "react-icons/go";

const LinkButton = () => {
  return (
    <>
      <Link href="/details" className="black_btn">
        <GoProjectSymlink className=" hover:text-cyan-500 cursor-pointer transition duration-500 ease-in-out hover:scale-110" />
      </Link>
    </>
  );
};

export default LinkButton;
