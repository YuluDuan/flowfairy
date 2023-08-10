import { GiFairyWand } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center width-full h-14 px-6 py-3 border-b border-solid border-inherit">
        <div className="flex justify-center items-center gap-2">
          <GiFairyWand className="w-7 h-7 text-[#FFC000]" />
          <p className="font-semibold text-xl orange_gradient">FLOWFAIRY</p>
        </div>
        <a href="https://github.com/YuluDuan" target="_blank">
          <FaGithub className="w-7 h-7" />
        </a>
      </nav>
    </>
  );
};

export default Header;
