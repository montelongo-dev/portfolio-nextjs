import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

export default function Home({ home }) {
  const ParallaxHeader = () => (
    <Parallax y={[-125, 125]}>
      <hr />
      <h1 className="home__header">{home.header}</h1>
      <h2 className="home__subhead">{home.subhead}</h2>
      <hr />
    </Parallax>
  );

  return (
    <div id="home">
      <ParallaxBanner
        layers={[
          {
            image: "/images/bg_desktop.jpeg",
            amount: 0.2,
          },
        ]}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div className="home">
          <ParallaxHeader />
        </div>
      </ParallaxBanner>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:1337/home");
//   const home = await res.json();

//   return {
//     props: { home },
//   };
// }

// export function Test() {
//   async function getStaticProps() {
//     const res = await fetch("http://localhost:1337/home");
//     const home = await res.json();

//     console.log("TEST ---", test);

//     return {
//       props: { home },
//     };
//   }
// }
