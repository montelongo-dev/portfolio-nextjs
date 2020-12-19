import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function About({ data }) {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    setPortfolioData(data[0]);
  }, []);

  return (
    <div id="about" className="about">
      <h4 className="about__title">About</h4>
      <ReactMarkdown>
        {portfolioData.about ? portfolioData.about : ""}
      </ReactMarkdown>
    </div>
  );
}
