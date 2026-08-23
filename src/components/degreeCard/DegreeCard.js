import React from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  return (
    <div className="apple-degree-card-wrapper">
      <Fade bottom duration={800} distance="20px">
        <div
          className="apple-degree-card"
          style={{
            backgroundColor: theme.projectCard,
            borderColor: theme.cardBorder,
          }}
        >
          <div className="apple-degree-header">
            <div className="apple-degree-logo-box">
              <img
                className="apple-degree-logo"
                src={require(`../../assests/images/${degree.logo_path}`)}
                alt={degree.alt_name}
              />
            </div>

            <div className="apple-degree-meta">
              <div className="apple-degree-title-row">
                <h3
                  className="apple-degree-title"
                  style={{ color: theme.text }}
                >
                  {degree.title}
                </h3>
                <span
                  className="apple-degree-pill"
                  style={{
                    backgroundColor: theme.pillBg,
                    borderColor: theme.pillBorder,
                    color: theme.accentColor,
                  }}
                >
                  <FaCalendarAlt size={10} style={{ marginRight: 5 }} />
                  {degree.duration}
                </span>
              </div>

              <h4
                className="apple-degree-subtitle"
                style={{ color: theme.accentColor }}
              >
                {degree.subtitle}
              </h4>
            </div>
          </div>

          <div className="apple-degree-body">
            <ul className="apple-degree-bullets">
              {degree.descriptions.map((sentence, index) => {
                return (
                  <li
                    key={index}
                    className="apple-degree-bullet"
                    style={{ color: theme.secondaryText }}
                  >
                    <span
                      className="apple-bullet-dot"
                      style={{ backgroundColor: theme.accentColor }}
                    ></span>
                    <span>{sentence}</span>
                  </li>
                );
              })}
            </ul>

            {degree.website_link && (
              <div className="apple-degree-action-row">
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-degree-link"
                  style={{ color: theme.accentColor }}
                >
                  <span>Visit Institution Website</span>
                  <FaExternalLinkAlt size={10} style={{ marginLeft: 6 }} />
                </a>
              </div>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
