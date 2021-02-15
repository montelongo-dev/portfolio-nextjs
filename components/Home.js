import React, { useEffect, useState } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

export default function Home({ data }) {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    setPortfolioData(data[0]);
  }, []);

  const ParallaxHeader = () => (
    <Parallax y={[-125, 125]}>
      <h1 className="home__header">{portfolioData.header}</h1>
      <h2 className="home__subhead">{portfolioData.subhead}</h2>
    </Parallax>
  );

  return (
    <div id="home">
      <ParallaxBanner
        layers={[
          {
            image: "/images/red_bg.jpg",
            amount: 0.0,
          },
        ]}
        style={{
          height: "100%",
        }}
      >
        <div className="home">
          <ParallaxHeader />
        </div>
      </ParallaxBanner>
    </div>
  );
}
