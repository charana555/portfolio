import Head from "next/head";

import Header from "../components/Header/Header";
import Hero from "../components/Main/Hero";
// import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
// import Skills from "../components/Skills/SkillSlide";
import Eduacation from "../components/Education/Eduacation";
import Skills from "../components/Skills/SkillBox";
import About from "../components/About/About";

const index = () => {
  return (
    <>
      <Head>
        <title>Portfolio-Charana</title>
        <link rel="icon" href="/cuttlefish.svg" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Eduacation />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default index;
