import React from "react";
import Skill from "./Skill";

import { skills } from "../../data/skillData";

const SkillBox = () => {
  return (
    <section id="skills" className=" w-[95%] md:w-[80%] mx-auto pt-6 md:pt-16 ">
      <div>
        <h2 className="font-slab text-center md:text-right py-4 font-[530] ml-2 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 ">
          SKILLS
        </h2>
        <hr className=" mb-5" />

        <div className=" p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
            {skills.map((skill, index) => (
              <Skill key={index} white={skill.white} color={skill.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillBox;
