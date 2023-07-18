import React from "react";
import { skills } from "../../data/skillsdata";

const SkillSlide = () => {
  return (
    <section id="skills" className=" w-[80%] mx-auto pt-6 md:pt-16 ">
      <div>
        <h2 className="py-4 font-[530] ml-2 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 ">
          Skills
        </h2>
        <hr className=" mb-5" />
      </div>

      <div className="p-10 flex flex-wrap justify-between ">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className=" rounded-lg  px-4 py-3 max-w-[500px] w-full "
            >
              <div className="flex justify-between my-2">
                <h3 className="font-bold  tracking-wider">{skill.name}</h3>
                <span>{skill.per}%</span>
              </div>
              <div className="h-[14px] bg-[#282828] rounded-[3px] w-full ">
                <div
                  className={`relative rounded-[3px] bg-[#fee400] h-4 w-[${skill.per}%] `}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSlide;
