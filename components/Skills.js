import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faDatabase,
  faDownload,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

const skillsList = () => {
  return (
    <>
      <div className="skills__card">
        <FontAwesomeIcon
          icon={faDatabase}
          size="xs"
          className="skills__icons"
          color="#496d89"
        />
        <h3>Backend</h3>
        <hr />
        <ul className="skills__items">
          <li>Python</li>
          <li>Django</li>
          <li>Wagtail</li>
          <li>REST APIs</li>
          <li>Postgres</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="skills__card">
        <FontAwesomeIcon
          icon={faFileCode}
          size="xs"
          className="skills__icons"
          color="#496d89"
        />
        <h3>Frontend</h3>
        <hr />
        <ul className="skills__items">
          <li>Javascript</li>
          <li>React Native</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className="skills__card">
        <FontAwesomeIcon
          icon={faCogs}
          size="xs"
          className="skills__icons"
          color="#496d89"
        />
        <h3>Devops</h3>
        <hr />
        <ul className="skills__items">
          <li>Linux CLI</li>
          <li>Bash Scripting</li>
          <li>Docker</li>
          <li>Heroku</li>
          <li>AWS</li>
          <li>Git</li>
        </ul>
      </div>
    </>
  );
};

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <h4 className="skills__title">Skills</h4>
      <div className="skills__resume">
        <a
          href="https://docs.google.com/document/d/1BICUnFTkCIH9-R1BilRKAlT4PCI128aKCA1UUGcn7Ps/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Download Resume</h4>
        </a>
        <FontAwesomeIcon
          icon={faDownload}
          size="xs"
          transform="shrink-15"
          className="skills__resume-download"
          color="#496d89"
        />
      </div>
      <div className="skills__container">{skillsList()}</div>
    </div>
  );
}
