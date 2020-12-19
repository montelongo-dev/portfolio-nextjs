import React, { useEffect, useState } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

export default function Home({ data }) {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    setPortfolioData(data[0]);
  }, []);

  const ParallaxHeader = () => (
    <Parallax y={[-125, 125]}>
      <hr />
      <h1 className="home__header">{portfolioData.header}</h1>
      <h2 className="home__subhead">{portfolioData.subhead}</h2>
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
