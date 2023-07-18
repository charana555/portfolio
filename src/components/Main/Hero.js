import profile from "../../images/profile.png";
import Image from "next/image";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full-Stack Enthusiast .",
      "Freelencer .",
      "Passionate Developer .",
    ],
    loop: 0,
  });

  return (
    <section
      id="hero"
      className=" w-[80%] mx-auto flex flex-wrap-reverse justify-around items-center py-24  gap-4"
    >
      <div>
        <p className="ml-2 font-slab">I am ,</p>
        <div>
          <h1 className="uppercase font-slab text-4xl md:text-6xl text-[#fee400] ">
            Charana
          </h1>
          <h2 className="uppercase font-slab text-3xl  md:text-5xl ">
            Chandrashekar
          </h2>
        </div>
        <p className=" tracking-wide md:tracking-widest text-lg">
          I am a <span className="text-[#fee400] font-slab">{text}</span>
          <span>
            <Cursor cursorColor="yellow" />
          </span>
        </p>
      </div>
      <div className="shadow-2xl rounded-full">
        <Image src={profile} alt="profile" width={250} height={250} />
      </div>
    </section>
  );
};

export default Hero;
