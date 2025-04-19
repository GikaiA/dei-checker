import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [deiContent, setDeiContent] = useState("");
  const [error, setError] = useState("");

  const handleCheck = async () => {
    if (!url) return;

    setLoading(true);
    setError("");
    setDeiContent("");

    try {
      const res = await fetch("/api/extract-dei", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (res.ok) {
        setDeiContent(data.deiContent);
      } else {
        setError(data.error || "Failed to fetch DEI info");
      }
    } catch (err) {
      setError("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
    }
  };

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
          <input
            type="text"
            className="input-field"
            placeholder="Paste link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <button
            className="scan-button"
            disabled={loading}
            onClick={handleCheck}
          >
            Scan
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="results-section">
          <h1 className="results-title">The Results</h1>
          <p className="results">{deiContent}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
