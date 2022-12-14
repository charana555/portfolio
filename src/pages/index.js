import Head from "next/head";

import Header from "../components/Header/Header";
import Hero from "../components/Main/Hero";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";

const index = () => {
  return (
    <>
      <Head>
        <title>Portfolio-Charana</title>
        <link rel="icon" href="/cuttlefish.svg" />
      </Head>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
};

export default index;
