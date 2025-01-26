import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LoadingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0); // Progress starts at 0
  const stats = location.state?.stats || {}; // File stats passed from ResumeAnalyzer
  const fileCount = location.state?.fileCount || 1; // Number of files uploaded
  const text = location.state?.text || ""; // Loading text
  const path = location.state?.path || ""; // Path to uploaded files
  useEffect(() => {
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += 5; // Increment progress
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressInterval); // Stop when progress reaches 100%
        if(path == "/confirmation") navigate("/confirmation", { state: { stats } }); // Pass stats to ConfirmationPage
        
        console.log(`${fileCount} file(s) analyzed successfully!`);
      }
    }, 300); // Update every 300ms for smooth transition

    return () => clearInterval(progressInterval); // Cleanup interval on unmount
  }, [navigate, stats]);

  return (
    
    <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
        >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h1 style={{ fontSize: "2rem" }}>{text}</h1>
        </div>
        <div style={{ width: "200px" }}>
            <CircularProgressbar
            value={progress}
            maxValue={100}
            text={`${progress}%`}
            circleRatio={0.5}
            styles={buildStyles({
                rotation: 0.75,
                strokeLinecap: "round",
                textSize: "18px",
                pathColor: "#28a745",
                textColor: "#000",
                trailColor: "#d6d6d6",
                backgroundColor: "#f8f9fa",
            })}
            strokeWidth={10}
            />
        </div>
    </div>

  );
};

export default LoadingPage;
