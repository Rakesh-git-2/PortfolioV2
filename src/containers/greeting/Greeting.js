import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import HeroProjectSpotlight from "../../components/heroProjectSpotlight/HeroProjectSpotlight";
import { greeting } from "../../portfolio";
import { useHistory } from "react-router-dom";
import { Fade } from "react-reveal";
import { FaMapMarkerAlt, FaBriefcase, FaArrowRight } from "react-icons/fa";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();
  const isDark = theme.name === "dark";

  return (
    <section className="apple-hero-section" id="greeting">
      <div className="apple-hero-container">
        <Fade bottom duration={2000} distance="40px">
          <div className="apple-hero-content">
            {/* Apple Eyebrow Pills */}
            <div className="apple-eyebrow-row">
              <span
                className="apple-hero-pill"
                style={{
                  backgroundColor: theme.pillBg,
                  borderColor: theme.pillBorder,
                  color: theme.text,
                }}
              >
                <FaBriefcase
                  size={11}
                  style={{ marginRight: 6, color: theme.accentColor }}
                />
                {greeting.headline}
              </span>
              <span
                className="apple-hero-pill"
                style={{
                  backgroundColor: theme.pillBg,
                  borderColor: theme.pillBorder,
                  color: theme.secondaryText,
                }}
              >
                <FaMapMarkerAlt
                  size={11}
                  style={{ marginRight: 5, color: theme.accentColor }}
                />
                Dublin, Ireland
              </span>
            </div>

            {/* Apple Keynote Headline */}
            <h1 className="apple-hero-title" style={{ color: theme.text }}>
              {greeting.full_name}
            </h1>

            <p
              className="apple-hero-tagline"
              style={{ color: theme.accentColor }}
            >
              {greeting.tagline}
            </p>

            <p
              className="apple-hero-subtext"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>

            <div className="apple-social-wrapper">
              <SocialMedia />
            </div>

            {/* Apple Capsule CTAs */}
            <div className="apple-cta-group">
              <button
                className="apple-primary-btn"
                onClick={() => history.push("/contact")}
              >
                Get in Touch
                <FaArrowRight size={12} style={{ marginLeft: 8 }} />
              </button>
              <button
                className="apple-secondary-btn"
                onClick={() => history.push("/projects")}
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
                View Engineering Projects
              </button>
            </div>
          </div>
        </Fade>

        <Fade duration={900} delay={150}>
          <div className="apple-hero-slider-col">
            <HeroProjectSpotlight theme={theme} />
          </div>
        </Fade>
      </div>
    </section>
  );
}
