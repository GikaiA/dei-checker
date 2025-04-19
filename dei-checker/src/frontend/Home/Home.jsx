import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="instructions">
        <h1 className="main-title">The DEI Checker</h1>
        <div className="paragraph">
          <p className="instructions-text">
            This website is designed to find DEI policies on any website. All
            you have to do is copy and paste the link and it will reveal the DEI
            policies. Very simple.
          </p>
        </div>
        <div className="chatgpt-section">
            <input type="text" className="input-field" placeholder="Paste link here..."></input>
            <button className="scan-button">Scan</button>
        </div>
        <div className="results-section">
            <p className="results">Where the results will be</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
