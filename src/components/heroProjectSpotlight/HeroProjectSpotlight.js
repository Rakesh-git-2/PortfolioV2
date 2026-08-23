import React, { useState, useEffect } from "react";
import "./HeroProjectSpotlight.css";
import { useHistory } from "react-router-dom";
import { projects } from "../../portfolio";
import { FaArrowRight } from "react-icons/fa";

const SLIDE_INTERVAL = 5000;

const PASTELS = [
  {
    text: "#A16207",
    bg: "rgba(250, 204, 21, 0.14)",
    glow: "rgba(250, 204, 21, 0.22)",
  },
  {
    text: "#15803D",
    bg: "rgba(74, 222, 128, 0.14)",
    glow: "rgba(74, 222, 128, 0.22)",
  },
  {
    text: "#BE185D",
    bg: "rgba(244, 114, 182, 0.14)",
    glow: "rgba(244, 114, 182, 0.22)",
  },
  {
    text: "#7E22CE",
    bg: "rgba(192, 132, 252, 0.14)",
    glow: "rgba(192, 132, 252, 0.22)",
  },
  {
    text: "#C2410C",
    bg: "rgba(251, 146, 60, 0.16)",
    glow: "rgba(251, 146, 60, 0.22)",
  },
  {
    text: "#0F766E",
    bg: "rgba(45, 212, 191, 0.16)",
    glow: "rgba(45, 212, 191, 0.22)",
  },
];

export default function HeroProjectSpotlight({ theme }) {
  const history = useHistory();
  const slides = projects.data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [slides.length, paused]);

  const project = slides[activeIndex];
  const accent = PASTELS[activeIndex % PASTELS.length];

  return (
    <div
      className="spotlight-card"
      style={{
        borderColor: theme.cardBorder,
        backgroundColor: theme.projectCard,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClick={() => history.push("/projects")}
    >
      <div
        className="spotlight-glow"
        style={{
          background: `radial-gradient(circle, ${accent.glow} 0%, rgba(0, 0, 0, 0) 70%)`,
        }}
      ></div>

      <div className="spotlight-top-row">
        <span
          className="spotlight-eyebrow"
          style={{ color: theme.secondaryText }}
        >
          Featured Work
        </span>
        <span
          className="spotlight-counter"
          style={{ color: theme.tertiaryText }}
        >
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="spotlight-content" key={activeIndex}>
        <span
          className="spotlight-category"
          style={{ backgroundColor: accent.bg, color: accent.text }}
        >
          {project.category}
        </span>

        <h3 className="spotlight-title" style={{ color: theme.text }}>
          {project.name}
        </h3>

        <p className="spotlight-tagline" style={{ color: theme.secondaryText }}>
          {project.tagline}
        </p>

        {project.highlights && project.highlights[0] && (
          <div className="spotlight-quote" style={{ borderColor: accent.text }}>
            <p style={{ color: theme.text }}>{project.highlights[0]}</p>
          </div>
        )}

        <div className="spotlight-tech-row">
          {project.languages.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="spotlight-tech-icon"
              title={tech.name}
              style={{
                backgroundColor: theme.badgeBg,
                borderColor: theme.cardBorder,
              }}
            >
              <span
                className="iconify"
                data-icon={tech.iconifyClass}
                data-inline="false"
                style={{ fontSize: "15px" }}
              ></span>
            </span>
          ))}
        </div>
      </div>

      <button
        className="spotlight-cta"
        style={{ backgroundColor: accent.text }}
        onClick={(e) => {
          e.stopPropagation();
          history.push("/projects");
        }}
      >
        Explore Engineering Projects
        <FaArrowRight size={12} style={{ marginLeft: 8 }} />
      </button>

      <div className="spotlight-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className="spotlight-dot"
            aria-label={`Show project ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(i);
            }}
            style={{
              backgroundColor:
                i === activeIndex
                  ? PASTELS[i % PASTELS.length].text
                  : theme.cardBorder,
              width: i === activeIndex ? "20px" : "6px",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
