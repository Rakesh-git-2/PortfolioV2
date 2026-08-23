import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import {
  FaEnvelope,
  FaFileAlt,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;
  const isDark = theme.name === "dark";

  return (
    <div className="apple-contact-main">
      <Header theme={theme} />
      <div className="apple-contact-container">
        <Fade bottom duration={800} distance="20px">
          <div
            className="apple-contact-card"
            style={{
              backgroundColor: theme.projectCard,
              borderColor: theme.cardBorder,
            }}
          >
            <div className="apple-contact-portrait-col">
              <div className="apple-contact-squircle">
                <img
                  className="apple-contact-pic"
                  src={require(`../../assests/images/${ContactData.profile_image_path}`)}
                  alt="Rakesh Srinivasan"
                />
              </div>
            </div>

            <div className="apple-contact-info-col">
              <span
                className="apple-category-label"
                style={{ color: theme.accentColor }}
              >
                Get in Touch · Dublin, Ireland
              </span>

              <h1
                className="apple-contact-headline"
                style={{ color: theme.text }}
              >
                Let's start a conversation.
              </h1>

              <p
                className="apple-contact-detail"
                style={{ color: theme.secondaryText }}
              >
                {ContactData.description}
              </p>

              {/* Direct Info Pills */}
              <div className="apple-contact-pills-list">
                <a
                  href={`mailto:${greeting.mail}`}
                  className="apple-info-pill"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.03)",
                    borderColor: theme.cardBorder,
                    color: theme.text,
                  }}
                >
                  <FaEnvelope size={13} style={{ color: theme.accentColor }} />
                  <span>{greeting.mail}</span>
                </a>

                <div
                  className="apple-info-pill"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.03)",
                    borderColor: theme.cardBorder,
                    color: theme.text,
                  }}
                >
                  <FaPhoneAlt size={13} style={{ color: theme.accentColor }} />
                  <span>{greeting.phone}</span>
                </div>

                <div
                  className="apple-info-pill"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.03)",
                    borderColor: theme.cardBorder,
                    color: theme.text,
                  }}
                >
                  <FaMapMarkerAlt
                    size={13}
                    style={{ color: theme.accentColor }}
                  />
                  <span>{greeting.location}</span>
                </div>
              </div>

              <div className="apple-social-row">
                <SocialMedia />
              </div>

              <div className="apple-contact-actions">
                <a
                  className="apple-action-primary apple-cta-btn"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileAlt size={14} style={{ marginRight: 6 }} />
                  View & Download Resume
                </a>
                <a
                  className="apple-action-secondary apple-cta-btn"
                  href={`mailto:${greeting.mail}`}
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
                  <FaEnvelope size={14} style={{ marginRight: 6 }} />
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </Fade>

        {/* Blog / Insights Section */}
        <Fade bottom duration={800} distance="20px">
          <div
            className="apple-insights-card"
            style={{
              backgroundColor: theme.projectCard,
              borderColor: theme.cardBorder,
            }}
          >
            <div className="apple-insights-text">
              <span
                className="apple-category-label"
                style={{ color: theme.accentPurple }}
              >
                Engineering Insights & Publications
              </span>
              <h2
                className="apple-insights-title"
                style={{ color: theme.text }}
              >
                {blogSection.title}
              </h2>
              <p
                className="apple-insights-desc"
                style={{ color: theme.secondaryText }}
              >
                {blogSection.subtitle}
              </p>
              <div className="apple-insights-btn-row">
                <a
                  className="apple-action-primary apple-cta-btn"
                  style={{ background: "#0A66C2" }}
                  href={blogSection.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={16} style={{ marginRight: 6 }} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="apple-insights-img">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
