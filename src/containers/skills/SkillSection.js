import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <FullStackImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;
  const isDark = theme.name === "dark";

  return (
    <div className="skills-container-wrapper">
      {skills.data.map((skill, index) => {
        const isEven = index % 2 === 0;
        return (
          <Fade bottom duration={1000} distance="20px" key={skill.title}>
            <div
              className={`skills-main-div ${
                isEven ? "" : "skills-main-div-reverse"
              }`}
              style={{
                backgroundColor: isDark
                  ? "rgba(17, 24, 39, 0.6)"
                  : "rgba(255, 255, 255, 0.8)",
                borderColor: isDark
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>

              <div className="skills-text-div">
                <h2 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h2>

                <SoftwareSkill logos={skill.softwareSkills} />

                <div className="skills-bullets-list">
                  {skill.skills.map((skillSentence, i) => {
                    return (
                      <div key={i} className="skill-bullet-item">
                        <p
                          className="skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
}

export default SkillSection;
