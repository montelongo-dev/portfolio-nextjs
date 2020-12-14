import React from "react";
import ReactMarkdown from "react-markdown";

export default function About({ about }) {
  return (
    <div id="about" className="about">
      <h4 className="about__title">About</h4>
      <ReactMarkdown>{about.bio}</ReactMarkdown>
    </div>
  );
}
