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
      className=" min-h-[80vh] w-[80%] mx-auto flex flex-wrap-reverse justify-around items-center   gap-4"
    >
      <div>
        <p className="ml-2 text-2xl font-slab">
          Hello <span className="text-[#fee400]">!</span>
        </p>
        <div>
          <h1 className="uppercase font-slab text-4xl md:text-6xl  ">I am</h1>
          <h2 className="uppercase font-slab text-4xl  md:text-6xl text-[#fee400]">
            Charana C
          </h2>
        </div>
        <p className=" tracking-wide md:tracking-widest text-xl">
          I am a <span className="text-[#fee400] font-slab">{text}</span>
          <span>
            <Cursor cursorColor="yellow" />
          </span>
        </p>
      </div>
      <div className="shadow-2xl rounded-full">
        <Image
          src={"/images/profile.png"}
          alt="profile"
          width={250}
          height={250}
        />
      </div>
    </section>
  );
};

export default Hero;
