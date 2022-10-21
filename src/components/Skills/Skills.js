import React from "react";
import { GrReactjs } from "react-icons/gr";
import { SiNodedotjs } from "react-icons/si";
import { DiDatabase } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills" className=" w-[80%] mx-auto pt-6 md:pt-16 ">
      <div>
        <h2 className="py-4 font-[530] ml-2 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 ">
          Skills
        </h2>
        <hr className=" mb-5" />
        <p className=" tracking-wider my-4 leading-5 text-lg">
          I have worked with a range of Technologies in
          <span className=" text-[#fee400] "> Web Development</span>.
        </p>
      </div>
      <div className="  flex justify-around py-6 md:py-16 md:pt-24 flex-wrap">
        <div className="border-2 border-white m-4 p-4 rounded-xl shadow-lg shadow-slate-400/50 min-w-[180px] max-w-[250px]  w-full md:w-0">
          <GrReactjs className=" text-3xl m-2 " />
          <hr className="my-2" />
          <h3>Front-end</h3>
          <p>React Js, Next Js</p>
        </div>
        <div className="border-2 border-white m-4 p-4 rounded-xl shadow-lg shadow-slate-400/50 min-w-[180px] max-w-[250px]  w-full md:w-0">
          <SiNodedotjs className=" text-3xl m-2" />
          <hr className="my-2" />
          <h3>Back-end</h3>
          <p>Node Js, Express</p>
        </div>
        <div className="border-2 border-white m-4 p-4 rounded-xl shadow-lg shadow-slate-400/50 min-w-[180px] max-w-[250px]  w-full md:w-0  ">
          <DiDatabase className=" text-3xl m-2" />
          <hr className="my-2" />
          <h3>Database</h3>
          <p>SQL , MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
