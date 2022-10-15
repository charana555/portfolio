import profile from "../../images/profile.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="flex justify-around items-center py-20 ">
      <div>
        <p className="ml-2">My Self ,</p>
        <div>
          <h1 className="text-6xl text-[#effc04] ">Charana</h1>
          <h2 className="text-5xl ">Chandrashekar</h2>
        </div>
        <p className=" tracking-widest ">
          I am a <span className="text-[#effc04]"> Full-Stack Developer </span>
          Enthusiast and a{" "}
          <span className="text-[#effc04]"> passionate Developer .</span>
        </p>
      </div>
      <div className="shadow-2xl rounded-full">
        <Image src={profile} width={250} height={250} />
      </div>
    </section>
  );
};

export default Hero;
