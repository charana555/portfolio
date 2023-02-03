import React from "react";

const Experience = () => {
  return (
    <section id="experience" className=" w-[80%] mx-auto py-16 ">
      <h2 className="py-4 font-[530] ml-2 text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 ">
        Experience
      </h2>
      <hr className=" mb-16" />
      <div className="mt-10">
        <div className="mt-6">
          <div className="md:w-1/4 w-full">
            <h3 className="text-xl text-center font-bold tracking-wide ">
              Software Development Intern
            </h3>
            <hr className=" my-2" />
          </div>
          <p className="text-gray-500">
            Group Cyber ID Technology, Bangalore (Aug ’22 – Nov ’22)
          </p>
          <ul className="list-disc pl-5 mt-2 tracking-wide">
            <li>Developed web applications using React and Node.js</li>
            <li>
              Developed backend for multiple web as well as mobile applications
              using Node js
            </li>
          </ul>
        </div>
        <div className="mt-16">
          <div className="md:w-1/4 w-full">
            <h3 className="text-xl text-center font-bold tracking-wide">
              Software Development Intern
            </h3>
            <hr className=" my-2" />
          </div>
          <p className="text-gray-500">
            Iotree Minds LLP, Bangalore (Sep ’22 – Jan ’23)
          </p>
          <ul className="list-disc pl-5 mt-2 tracking-wide">
            <li>Developed a Backend APIs using Node js.</li>
            <li>
              Contributed to the development of a scalable Application using
              Node.js and Stripe
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
