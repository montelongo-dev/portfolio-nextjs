import Head from "next/head";

import Nav from "../components/Nav";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import IndexHead from "../components/IndexHead";

export default function Portfolio({ data }) {
  return (
    <div>
      {/* <Head>
        <title>Sam Montelongo | Backend Web Developer</title>
      </Head> */}
      <IndexHead />

      <Nav />
      <Home data={data} />
      <About data={data} />
      <Skills data={data} />
      <Contact data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.STRAPI_API_URL);
  const data = await res.json();

  return {
    props: { data },
  };
}
