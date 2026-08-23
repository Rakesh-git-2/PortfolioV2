import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";

function Header(props) {
  const theme = props.theme;
  const link = settings.isSplash ? "/splash" : "/home";

  return (
    <header
      className="apple-nav-wrapper"
      style={{
        backgroundColor: theme.headerBg,
        borderBottom: `1px solid ${theme.cardBorder}`,
      }}
    >
      <div className="apple-nav-container">
        <NavLink to={link} tag={Link} className="apple-logo-link">
          <span className="apple-logo-title" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
        </NavLink>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span
            className="navicon"
            style={{ backgroundColor: theme.text }}
          ></span>
        </label>

        <ul className="apple-nav-list">
          <li>
            <NavLink
              className="apple-nav-item"
              to="/home"
              tag={Link}
              activeClassName="apple-nav-active"
              style={{ color: theme.secondaryText }}
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              className="apple-nav-item"
              to="/experience"
              tag={Link}
              activeClassName="apple-nav-active"
              style={{ color: theme.secondaryText }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className="apple-nav-item"
              to="/projects"
              tag={Link}
              activeClassName="apple-nav-active"
              style={{ color: theme.secondaryText }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="apple-nav-item"
              to="/education"
              tag={Link}
              activeClassName="apple-nav-active"
              style={{ color: theme.secondaryText }}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              className="apple-nav-item"
              to="/contact"
              tag={Link}
              activeClassName="apple-nav-active"
              style={{ color: theme.secondaryText }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
