import React, { useEffect, userEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faDatabase,
  faDownload,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Skills({ resume, categories, skills, links }) {
  const [resumeState, setResumeState] = useState([]);
  const [categoriesState, setCategoriesState] = useState([]);
  const [linksState, setLinksState] = useState([]);

  useEffect(() => {
    resume.map((data) => {
      setResumeState((resumeState) => [...resumeState, data]);
    });
    categories.map((data) => {
      setCategoriesState((categoriesState) => [...categoriesState, data]);
    });
    links.map((data) => {
      setLinksState((linksState) => [...linksState, data]);
    });
  }, []);

  // Workaround to remove "" from data from API endpoint
  const icon = (icon_name) => {
    return icon_name == "faDatabase"
      ? faDatabase
      : icon_name == "faFileCode"
      ? faFileCode
      : icon_name == "faCogs"
      ? faCogs
      : icon_name == "faDownload"
      ? faDownload
      : icon_name == "faLinkedin"
      ? faLinkedin
      : icon_name == "faGithub"
      ? faGithub
      : "";
  };

  return (
    <div id="skills" className="skills">
      <h4 className="skills__title">Skills</h4>

      <div className="skills__resume">
        {resumeState.map((data) => {
          return (
            <>
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                <h4>Download Resume</h4>
              </a>
              <FontAwesomeIcon
                icon={icon(data.fa_icon)}
                size="1x"
                className="skills__resume-download"
                color="#496d89"
              />
            </>
          );
        })}
      </div>
      <div className="skills__container">
        {categoriesState.map((data) => {
          return (
            <div className="skills__card">
              <FontAwesomeIcon
                size="2x"
                className="skills__icons"
                color="#496d89"
                icon={icon(data.fa_icon)}
              />
              <h3>{data.category}</h3>
              <hr />
              <>
                <ul className="skills__items">
                  {skills.map((skill, index) => {
                    if (data.category == skill.category.category)
                      return <li key={skill.id}>{skill.skill}</li>;
                  })}
                </ul>
              </>
            </div>
          );
        })}
      </div>

      <div className="contact__icon-container">
        {linksState.map((data) => {
          return (
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={icon(data.fa_icon)}
                size="2x"
                className="contact__icons"
                color="#496d89"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
