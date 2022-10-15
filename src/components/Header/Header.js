import { FaCuttlefish } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full">
      <div className="w-[80%] mx-auto flex justify-between items-center py-4 ">
        <div>
          <Link href="#hero">
            <a className="flex gap-1 items-center">
              <FaCuttlefish className="text-white text-3xl " />
              <span className=" text-xl font-bold ">Portfolio</span>
            </a>
          </Link>
        </div>

        <div className="flex gap-16">
          <li className=" list-none text-md lett tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link href="#skills"> Skills </Link>
          </li>
          <li className=" list-none text-md lett tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link href="#projects"> Projects </Link>
          </li>
          <li className=" list-none text-md lett tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link href="#experience"> Experience </Link>
          </li>
        </div>

        <div className="flex gap-3">
          <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
            <AiFillGithub className="text-2xl" />
          </div>
          <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
            <AiFillLinkedin className="text-2xl" />
          </div>
          <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
            <AiFillInstagram className="text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
