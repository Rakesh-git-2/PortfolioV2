import React from "react";
import "./Footer.css";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  const isDark = props.theme && props.theme.name === "dark";
  return (
    <footer
      className="footer-div"
      style={{
        borderTop: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)"
        }`,
      }}
    >
      <p
        className="footer-text"
        style={{ color: props.theme ? props.theme.secondaryText : "#888" }}
      >
        © {new Date().getFullYear()} {greeting.full_name} · Built with React
      </p>
    </footer>
  );
}
