import React from "react";
import axios from "axios";
import "./styles.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <Weather defaultCity="Kyiv"/>;
      <div className="footer">
        Coded by Dana Papirnyk and is{" "}
        <a
          href="https://github.com/danapapirnyk/weather-react"
          target="_blank"
          className="link-github"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub{" "}
        </a>
      </div>
      <div className="footer-icons">
        <a
          href="https://instagram.com/danapapirnyk?igshid=YmMyMTA2M2Y="
          className="inst-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram inst-icon"></i>
        </a>
        <a
          className="fb-link"
          target="_blank"
          href="https://github.com/danapapirnyk"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          className="lnk-link"
          target="_blank"
          href="https://www.linkedin.com/in/bohdana-papirnyk-216934226/"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin lnk-icon"></i>
        </a>
      </div>
    </div>
  );
 
  
}


