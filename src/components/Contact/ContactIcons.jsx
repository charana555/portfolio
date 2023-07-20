import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactIcons = () => {
  return (
    <div className=" flex flex-wrap gap-3 my-5">
      <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
        <a href="https://github.com/charana555" target="_blanck">
          <AiFillGithub className="text-3xl bg-transparent" />
        </a>
      </div>
      <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
        <a href="https://www.linkedin.com/in/charana-c/" target="_blanck">
          <AiFillLinkedin className="text-3xl bg-transparent" />
        </a>
      </div>
      <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
        <a href="mailto:charanac972@gmail.com" target="_blanck">
          <FiMail className="text-3xl bg-transparent " />
        </a>
      </div>
      <div className=" rounded-full cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
        <a
          href="https://discordapp.com/users/897343090195562586"
          target="_blanck"
        >
          <FaDiscord className="text-3xl bg-transparent " />
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
