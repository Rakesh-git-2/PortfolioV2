import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { FaGithub } from "react-icons/fa";

function Projects(props) {
  const theme = props.theme;

  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <Fade bottom duration={1200} distance="30px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader.description}
              </p>
            </div>
          </div>
        </Fade>

        {/* Project Cards Grid */}
        <div className="projects-cards-grid">
          {projects.data.map((repo) => {
            return <ProjectCard key={repo.id} repo={repo} theme={theme} />;
          })}
        </div>

        <div className="more-projects-div">
          <a
            className="more-projects-btn"
            href="https://github.com/Rakesh-git-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} style={{ marginRight: 8 }} />
            Explore More on GitHub
          </a>
        </div>
      </div>

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
