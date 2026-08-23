import React from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { FaExternalLinkAlt } from "react-icons/fa";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;

  return (
    <Fade bottom duration={800} distance="15px">
      <div
        className="apple-cert-card"
        style={{
          backgroundColor: theme.projectCard,
          borderColor: theme.cardBorder,
        }}
      >
        <div
          className="apple-cert-logo-header"
          style={{
            backgroundColor: theme.pillBg,
            borderBottom: `1px solid ${theme.cardBorder}`,
          }}
        >
          <img
            className="apple-cert-img"
            src={require(`../../assests/images/${certificate.logo_path}`)}
            alt={certificate.alt_name}
          />
        </div>

        <div className="apple-cert-body">
          <h3 className="apple-cert-title" style={{ color: theme.text }}>
            {certificate.title}
          </h3>
          <h4
            className="apple-cert-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h4>

          {certificate.certificate_link && (
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-cert-link"
              style={{ color: theme.accentColor }}
            >
              <span>Verify Credential</span>
              <FaExternalLinkAlt size={10} style={{ marginLeft: 5 }} />
            </a>
          )}
        </div>
      </div>
    </Fade>
  );
}

export default CertificationCard;
