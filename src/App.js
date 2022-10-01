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
            href="https://github.com/MirNO89/new-react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Miriam MK, hosted on{" "}
          <a
            href="https://amazing-sorbet-18c88b.netlify.app"
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
