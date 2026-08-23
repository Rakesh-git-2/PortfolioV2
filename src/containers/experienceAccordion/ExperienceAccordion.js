import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Fade } from "react-reveal";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord-container">
      {props.sections.map((section, sIndex) => {
        return (
          <div key={sIndex} className="experience-section-wrapper">
            <h2
              className="experience-section-title"
              style={{ color: theme.text }}
            >
              {section.title}
            </h2>
            <div className="experience-cards-list">
              {section.experiences.map((exp, eIndex) => {
                return (
                  <Fade bottom duration={1000} distance="20px" key={eIndex}>
                    <ExperienceCard experience={exp} theme={theme} />
                  </Fade>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceAccordion;
