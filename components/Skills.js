import React, { useEffect, userEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faDatabase,
  faDownload,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function Skills({ resume, categories, skills }) {
  const [resumeState, setResumeState] = useState([]);
  const [categoriesState, setCategoriesState] = useState([]);

  useEffect(() => {
    resume.map((data) => {
      setResumeState((resumeState) => [...resumeState, data]);
    });
    categories.map((data) => {
      setCategoriesState((categoriesState) => [...categoriesState, data]);
    });
  }, []);

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
                icon={data.fa_icon}
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
                icon={data.fa_icon} // TODO this is adding double quotes. Need to remove them.
              />
              <h3>{data.category}</h3>
              <hr />
              <ul className="skills__items">
                {skills.map((skill) => {
                  if (data.category == skill.category.category)
                    return <li key={skill.id}>{skill.skill}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
