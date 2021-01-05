import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faDatabase,
  faDownload,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Skills({ data }) {
  const [resume, setResume] = useState([]);
  const [links, setLinks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setResume(data[0].resume);
    setLinks(data[0].links);
    setCategories(data[0].category);
  }, []);

  // Hack to remove DOUBLE QUOTES from API endpoint data when entering icon name into FA props
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

  const resumeCheck = () => {
    if (resume.resumeUrl) {
      return (
        <div className="skills__resume">
          <a href={resume.resumeUrl} target="_blank" rel="noopener noreferrer">
            <h4>Download Resume</h4>
          </a>
          <FontAwesomeIcon
            icon={icon(resume.fa_icon)}
            size="1x"
            className="skills__resume-download"
            color="grey"
          />
        </div>
      );
    }
  };

  const linkCheck = () => {
    if (links) {
      return (
        <div className="contact__icon-container">
          {links.map((data) => {
            return (
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={icon(data.fa_icon)}
                  size="2x"
                  className="contact__icons"
                  color="grey"
                />
              </a>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div id="skills" className="skills">
      <h4 className="skills__title">Skills</h4>
      {resumeCheck()}
      <div className="skills__container">
        {categories.map((data) => {
          return (
            <div className="skills__card">
              <FontAwesomeIcon
                size="2x"
                className="skills__icons"
                color="grey"
                icon={icon(data.fa_icon)}
              />
              <h3>{data.category}</h3>
              <hr />
              <>
                <ul className="skills__items">
                  {data.skills.map((skill) => {
                    return <li key={skill.id}>{skill.skill}</li>;
                  })}
                </ul>
              </>
            </div>
          );
        })}
      </div>
      {linkCheck()}
    </div>
  );
}
