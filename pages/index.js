import Head from "next/head";

import Nav from "../components/Nav";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Portfolio({
  home,
  about,
  resume,
  categories,
  skills,
  contact,
}) {
  return (
    <div>
      <Head>
        <title>Sam Montelongo | Backend Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Home home={home} />
      <About about={about} />
      <Skills resume={resume} categories={categories} skills={skills} />
      <Contact contact={contact} />
    </div>
  );
}

export async function getStaticProps() {
  const resHome = await fetch("http://localhost:1337/home");
  const resAbout = await fetch("http://localhost:1337/about");

  const resResumes = await fetch("http://localhost:1337/resumes");
  const resCategories = await fetch("http://localhost:1337/categories");
  const resSkills = await fetch("http://localhost:1337/skills");

  const resContact = await fetch("http://localhost:1337/contact");

  const home = await resHome.json();
  const about = await resAbout.json();
  const resume = await resResumes.json();
  const categories = await resCategories.json();
  const skills = await resSkills.json();
  const contact = await resContact.json();

  return {
    props: { home, about, resume, categories, skills, contact },
  };
}
