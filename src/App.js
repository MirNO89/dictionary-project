import React from "react";

import logo from "./logo-shecodes.png";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="shecodes-logo" />
        </header>
        <footer>
          <a
            href="https://github.com/MirNO89/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Miriam MK, hosted on{" "}
          <a
            href="https://moonlit-shortbread-3e7fc8.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
