import React from "react";

import Dictionary from "./Dictionary";

import searching from "./Searching.svg";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={searching}
            className="App-logo img-fluid"
            alt="logo"
            width={200}
          />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
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
