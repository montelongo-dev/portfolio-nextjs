import Head from "next/head";

import Nav from "../components/Nav";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Portfolio({ data }) {
  return (
    <div>
      <Head>
        <title>Sam Montelongo | Backend Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Home data={data} />
      <About data={data} />
      <Skills data={data} />
      {/* <Contact data={data} /> */}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/portfolios");
  const data = await res.json();

  return {
    props: { data },
  };
}
