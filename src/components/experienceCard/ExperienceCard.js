import React from "react";
import "./ExperienceCard.css";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  const isDark = theme.name === "dark";

  return (
    <div
      className="apple-experience-card"
      style={{
        backgroundColor: theme.projectCard,
        borderColor: theme.cardBorder,
      }}
    >
      <div className="apple-exp-top-row">
        <div className="apple-exp-logo-wrapper">
          <img
            className="apple-exp-logo"
            src={require(`../../assests/images/${experience.logo_path}`)}
            alt={experience.company}
          />
        </div>

        <div className="apple-exp-header-info">
          <div className="apple-exp-title-row">
            <h3 className="apple-exp-role-title" style={{ color: theme.text }}>
              {experience.title}
            </h3>
            <div className="apple-exp-meta-pills">
              <span
                className="apple-meta-pill"
                style={{
                  backgroundColor: theme.pillBg,
                  borderColor: theme.pillBorder,
                  color: theme.accentColor,
                }}
              >
                <FaCalendarAlt size={10} style={{ marginRight: 5 }} />
                {experience.duration}
              </span>
              <span
                className="apple-meta-pill"
                style={{
                  backgroundColor: theme.pillBg,
                  borderColor: theme.pillBorder,
                  color: theme.secondaryText,
                }}
              >
                <FaMapMarkerAlt size={10} style={{ marginRight: 5 }} />
                {experience.location}
              </span>
            </div>
          </div>

          <p className="apple-exp-company">
            <a
              href={experience.company_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.accentColor }}
            >
              {experience.company}
              <FaExternalLinkAlt size={10} style={{ marginLeft: 6 }} />
            </a>
          </p>
        </div>
      </div>

      {/* Tech stack tags */}
      {experience.tags && experience.tags.length > 0 && (
        <div className="apple-exp-tags-row">
          {experience.tags.map((tag, i) => (
            <span
              key={i}
              className="apple-exp-tag-pill"
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
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Structured bullet points */}
      <div className="apple-exp-body">
        {experience.bullets && experience.bullets.length > 0 ? (
          <ul className="apple-exp-bullets-list">
            {experience.bullets.map((bullet, idx) => {
              const colonIndex = bullet.indexOf(":");
              if (colonIndex !== -1) {
                const prefix = bullet.substring(0, colonIndex);
                const rest = bullet.substring(colonIndex + 1);
                return (
                  <li
                    key={idx}
                    className="apple-exp-bullet-item"
                    style={{ color: theme.secondaryText }}
                  >
                    <span
                      className="apple-bullet-dot"
                      style={{ backgroundColor: theme.accentColor }}
                    ></span>
                    <div>
                      <strong style={{ color: theme.text }}>{prefix}:</strong>
                      {rest}
                    </div>
                  </li>
                );
              }
              return (
                <li
                  key={idx}
                  className="apple-exp-bullet-item"
                  style={{ color: theme.secondaryText }}
                >
                  <span
                    className="apple-bullet-dot"
                    style={{ backgroundColor: theme.accentColor }}
                  ></span>
                  <div>{bullet}</div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p
            className="apple-exp-description"
            style={{ color: theme.secondaryText }}
          >
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
