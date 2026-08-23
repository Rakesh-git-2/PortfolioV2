import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github-btn"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub size={20} />
        </a>
      )}
      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin-btn"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedinIn size={20} />
        </a>
      )}
      {socialMediaLinks.leetcode && (
        <a
          href={socialMediaLinks.leetcode}
          className="icon-button leetcode-btn"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
        >
          <SiLeetcode size={19} />
        </a>
      )}
      {socialMediaLinks.gmail && (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button email-btn"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <FaEnvelope size={19} />
        </a>
      )}
      {socialMediaLinks.twitter && (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter-btn"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <FaTwitter size={19} />
        </a>
      )}
      {socialMediaLinks.instagram && (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram-btn"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram size={19} />
        </a>
      )}
    </div>
  );
}
