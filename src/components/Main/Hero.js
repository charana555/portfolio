import profile from "../../images/profile.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" w-[80%] mx-auto flex flex-wrap-reverse justify-around items-center py-20 gap-4"
    >
      <div>
        <p className="ml-2">I am ,</p>
        <div>
          <h1 className="text-4xl md:text-6xl text-[#fee400] ">Charana</h1>
          <h2 className="text-3xl  md:text-5xl ">Chandrashekar</h2>
        </div>
        <p className=" tracking-wide md:tracking-widest ">
          I am a
          <span className="text-[#fee400]"> Full-Stack Developement </span>
          Enthusiast and a
          <span className="text-[#fee400]"> passionate Developer .</span>
        </p>
      </div>
      <div className="shadow-2xl rounded-full">
        <Image src={profile} alt="profile" width={250} height={250} />
      </div>
    </section>
  );
};

export default Hero;
