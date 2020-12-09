import Head from "next/head";

import Nav from "../components/Nav";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home2() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
