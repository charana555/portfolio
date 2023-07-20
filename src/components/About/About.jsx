import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { about } from "../../data/aboutData";

const About = () => {
  return (
    <section
      id="about"
      className=" w-[95%] md:w-[80%] mx-auto pt-16 overflow-hidden"
    >
      <h2 className="font-slab py-4 font-[530] ml-2 text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 text-center md:text-right">
        ABOUT ME
      </h2>
      <hr className=" mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center">
        <div className="p-8">
          <div className=" rounded  h-[300px] w-[300px] md:h-[450px] md:w-[450px] flex justify-center items-center p-4">
            <img
              className="bg-transparent"
              style={{
                height: "auto",
                width: "auto",
              }}
              src={"/images/computer.png"}
            />
          </div>
        </div>
        <div className="p-8">
          <p className=" mx-auto text-center pb-8 tracking-wide leading-8 text-lg">
            {about[0]}
          </p>
          <p className="mx-auto text-center pb-8 tracking-wide leading-8 text-lg">
            {about[1]}
          </p>
          <div className="flex justify-center py-4">
            <button className="bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-3xl ">
              <a
                className=" bg-transparent flex items-center justify-center gap-2"
                href="#contact"
              >
                Contact Me
                <BsArrowRight
                  style={{ fill: "black" }}
                  className=" bg-transparent fill-current text-lg font-bold"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
