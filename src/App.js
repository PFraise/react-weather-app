import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        Weather App
        <footer>
          This project is created by Karen Gammarota and is{" "}
          <a
            href="https://github.com/PFraise/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
