import React from "react";
import { GrReactjs } from "react-icons/gr";
import { SiNodedotjs } from "react-icons/si";
import { DiDatabase } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills" className=" w-[80%] mx-auto first-letter: ">
      <div>
        <h2 className="py-4 font-[530] ml-2  text-5xl text-[#fee400] ">
          Skills
        </h2>
        <hr className=" mb-5" />
        <p className=" tracking-wider my-4 leading-5 text-lg">
          I have worked with a range of Technologies in
          <span className=" text-[#fee400] "> Web Development</span>.
        </p>
      </div>
      <div className="  flex justify-around py-2">
        <div className="border-2 border-white p-4 rounded-xl shadow-xl shadow-slate-400/50 min-w-[180px] ">
          <GrReactjs className=" text-3xl m-2 " />
          <hr className="my-2" />
          <h3>Front-end</h3>
          <p>React Js, Next Js</p>
        </div>
        <div className="border-2 border-white p-4 rounded-xl shadow-xl shadow-slate-400/50 min-w-[180px] ">
          <SiNodedotjs className=" text-3xl m-2" />
          <hr className="my-2" />
          <h3>Back-end</h3>
          <p>Node Js, Express</p>
        </div>
        <div className="border-2 border-white p-4 rounded-xl shadow-xl shadow-slate-400/50 min-w-[180px] ">
          <DiDatabase className=" text-3xl m-2" />
          <hr className="my-2" />
          <h3>Front-end</h3>
          <p>SQL , MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
