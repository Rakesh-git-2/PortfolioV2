import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { Fade } from "react-reveal";
function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <div>
          {props.sections.map((section) => {
            return (
              <Fade
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Fade>
            );
          })}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
