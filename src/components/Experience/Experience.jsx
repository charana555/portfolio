import React from "react";
import { experience } from "../../data/experiencedata";
import { MdOutlineComputer } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience" className=" w-[80%] mx-auto py-16 ">
      <h2 className="font-slab py-4 font-[530] ml-2 text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 ">
        EXPERIENCE
      </h2>
      <hr className=" mb-16" />
      <div className="flex flex-col gap-10">
        {/* experience cards  */}
        {experience.map((item, i) => (
          <div
            key={i}
            className="relative hover:shadow-inner hover:shadow-gray-700/30  p-8 md:w-[80%] mx-auto mb-6 border-l-2"
          >
            <div className="p-3 bg-yellow-300 rounded-full -top-2 -left-5 absolute">
              <MdOutlineComputer
                style={{ fill: "black" }}
                className="bg-transparent text-lg"
              />
            </div>
            {/* company role */}
            <h3 className=" uppercase text-xl tracking-wide font-semibold pb-2 ">
              <span className="border-b pb-2 pr-2 text-yellow-600 ">
                {item.title}
              </span>
            </h3>
            {/* company name and duration  */}
            <div className="mt-1">
              <p>
                <span className="text-gray-500">{item.company} , </span>
                <span className="text-gray-500">( {item.duration} )</span>
              </p>
            </div>

            {/* role description  */}
            <ul className="text-md list-disc pl-5 mt-2 tracking-wide">
              {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
