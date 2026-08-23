import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ repo, theme }) {
  const isDark = theme.name === "dark";
  const isFeatured = repo.featured;

  return (
    <div
      className={`apple-project-card-container ${
        isFeatured ? "apple-featured-card" : ""
      }`}
    >
      <Fade bottom duration={800} distance="20px">
        <div
          className="apple-project-card"
          style={{
            backgroundColor: theme.projectCard,
            borderColor: isFeatured
              ? isDark
                ? "rgba(41, 151, 255, 0.45)"
                : "rgba(0, 113, 227, 0.4)"
              : theme.cardBorder,
          }}
        >
          {/* Top category & actions */}
          <div className="apple-project-top">
            <div className="apple-project-meta">
              {repo.category && (
                <span
                  className="apple-category-label"
                  style={{
                    color: isFeatured ? theme.accentColor : theme.secondaryText,
                  }}
                >
                  {isFeatured && (
                    <span className="apple-featured-star">★ </span>
                  )}
                  {repo.category}
                </span>
              )}
              <h3 className="apple-project-title" style={{ color: theme.text }}>
                {repo.name}
              </h3>
              {repo.tagline && (
                <p
                  className="apple-project-tagline"
                  style={{ color: theme.accentColor }}
                >
                  {repo.tagline}
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div className="apple-project-actions">
              {repo.demo_url && (
                <a
                  href={repo.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-action-btn apple-action-primary"
                >
                  <span>Launch App</span>
                  <FaExternalLinkAlt size={11} />
                </a>
              )}
              {repo.github_url && (
                <a
                  href={repo.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-action-btn apple-action-secondary"
                  style={{
                    color: theme.text,
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.06)"
                      : "rgba(0, 0, 0, 0.04)",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.12)"
                      : "rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <FaGithub size={13} />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p
            className="apple-project-desc"
            style={{ color: theme.secondaryText }}
          >
            {repo.description}
          </p>

          {/* Highlights */}
          {repo.highlights && repo.highlights.length > 0 && (
            <ul className="apple-project-bullets">
              {repo.highlights.map((item, i) => (
                <li
                  key={i}
                  className="apple-bullet-item"
                  style={{ color: theme.secondaryText }}
                >
                  <span
                    className="apple-bullet-dot"
                    style={{ backgroundColor: theme.accentColor }}
                  ></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Pills */}
          {repo.languages && repo.languages.length > 0 && (
            <div className="apple-tech-pills-row">
              {repo.languages.map((tech, i) => (
                <span
                  key={i}
                  className="apple-tech-pill"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.03)",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(0, 0, 0, 0.06)",
                    color: theme.text,
                  }}
                >
                  {tech.iconifyClass && (
                    <span
                      className="iconify"
                      data-icon={tech.iconifyClass}
                      data-inline="false"
                      style={{ marginRight: 6, fontSize: "14px" }}
                    ></span>
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
}
