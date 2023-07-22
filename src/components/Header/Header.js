import { FaCuttlefish } from "react-icons/fa";
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleclick = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="w-full fixed z-20">
      <div className="w-[85%] mx-auto flex justify-between items-center py-6 ">
        <div className=" cursor-pointer">
          <Link smooth={true} duration={500} to="hero">
            <div className="flex gap-1 items-center">
              <FaCuttlefish className="text-white text-3xl " />
              <span className=" text-xl font-bold ">Portfolio</span>
            </div>
          </Link>
        </div>
        {/* desktop view  */}
        <div className="gap-10 hidden md:flex">
          <li className=" mx-2 list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link smooth={true} duration={500} to="about">
              About
            </Link>
          </li>
          <li className=" mx-2 list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link smooth={true} duration={500} to="experience">
              Experience
            </Link>
          </li>
          <li className=" mx-2 list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link smooth={true} duration={500} offset={-100} to="projects">
              Projects
            </Link>
          </li>
          <li className=" mx-2 list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link smooth={true} duration={500} to="skills">
              Skills
            </Link>
          </li>
          <li className=" mx-2 list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link smooth={true} duration={500} to="contact">
              Contact
            </Link>
          </li>
        </div>

        {/* <div className="hidden md:flex gap-3">
          <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
            <a href="https://github.com/charana555" target="_blanck">
              <AiFillGithub className="text-2xl" />
            </a>
          </div>
          <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
            <a href="https://www.linkedin.com/in/charana-c/" target="_blanck">
              <AiFillLinkedin className="text-2xl" />
            </a>
          </div>
          <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
            <a
              href="https://www.instagram.com/charan_chandrashekar/"
              target="_blanck"
            >
              <AiFillInstagram className="text-2xl" />
            </a>
          </div>
        </div> */}
        <GiHamburgerMenu
          onClick={handleclick}
          className="text-2xl md:hidden cursor-pointer"
        />
      </div>
      {/* mobile view  */}
      {toggle && (
        <div className="flex flex-col items-start py-2 pl-4 gap-5 bg-[#0b101b85] transition-all duration-1000">
          <li className="bg-transparent list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link
              className="bg-transparent"
              smooth={true}
              duration={500}
              to="about"
            >
              About
            </Link>
          </li>
          <li className="bg-transparent list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link
              className="bg-transparent"
              smooth={true}
              duration={500}
              to="experience"
            >
              Experience
            </Link>
          </li>
          <li className="bg-transparent list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link
              className="bg-transparent"
              smooth={true}
              duration={500}
              to="projects"
            >
              Projects
            </Link>
          </li>
          <li className="bg-transparent list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link
              className="bg-transparent"
              smooth={true}
              duration={500}
              to="skills"
            >
              Skills
            </Link>
          </li>
          <li className="bg-transparent list-none text-md  tracking-wide hover:text-gray-400 cursor-pointer ">
            <Link
              className="bg-transparent"
              smooth={true}
              duration={500}
              to="contact"
            >
              Contact
            </Link>
          </li>

          {/* <div className=" bg-transparent flex gap-3 rounded-full cursor-pointer transition-all  hover:bg-[#212d45] transform ">
            <a href="https://github.com/charana555" target="_blanck">
              <AiFillGithub className="text-2xl" />
            </a>
            <p className="bg-transparent">GitHub</p>
          </div>
          <div className=" bg-transparent flex gap-3 rounded-full cursor-pointer transition-all  hover:bg-[#212d45] transform ">
            <a href="https://www.linkedin.com/in/charana-c/" target="_blanck">
              <AiFillLinkedin className="text-2xl" />
            </a>
            <p className="bg-transparent">LinkedIn</p>
          </div>
          <div className=" bg-transparent flex gap-3 rounded-full cursor-pointer transition-all  hover:bg-[#212d45] transform ">
            <a
              href="https://www.instagram.com/charan_chandrashekar/"
              target="_blanck"
            >
              <AiFillInstagram className="text-2xl" />
            </a>
            <p className="bg-transparent">Instagram</p>
          </div> */}
        </div>
      )}
    </nav>
  );
};

export default Header;
