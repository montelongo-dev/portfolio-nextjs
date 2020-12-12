import Head from "next/head";

import Nav from "../components/Nav";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Sam Montelongo | Backend Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
