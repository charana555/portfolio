import React from "react";
import Image from "next/image";
import { projects } from "../../data/projectdata";
import { BiCodeAlt } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import styles from "../../styles/projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className=" w-[95%] md:w-[80%] mx-auto pt-8 ">
      <h2 className="font-slab py-4 font-[530] ml-2 text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 md:text-left text-center ">
        PROJECTS
      </h2>
      <hr className=" mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 place-items-center">
        {projects.map((item, i) => {
          return (
            <div key={i} className={styles.work}>
              <Image
                className={styles.work_img}
                src={item.image}
                alt="work"
                height={"330"}
                width={"300"}
              />
              <div className={styles.layer}>
                <h3 className={styles.layer_head}>{item.title}</h3>
                <p className={styles.layer_para}>{item.desc}</p>
                <div className="w-full flex justify-evenly items-center bg-transparent">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-black p-4 mt-8 bg-black rounded-[50%]"
                    href={item.sourceLink}
                  >
                    <BiCodeAlt className=" bg-transparent text-2xl " />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-black p-4 mt-8 bg-black rounded-[50%]"
                    href={item.webLink}
                  >
                    <BiLinkExternal className=" bg-transparent text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
