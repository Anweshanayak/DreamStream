import React, { useState } from "react";
import axios from "axios";
import Navbar from "./HR/NavBar";


const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setProgress(0);
      setAnalysisComplete(false);

      // Simulate analysis progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 20;
        });
      }, 500);

      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProjects(response.data.projects);
      setError("");
      setAnalysisComplete(true);
    } catch (err) {
      setError("Error uploading resume. Please try again.");
      console.error(err);
      setAnalysisComplete(false);
    }
  };

  return (
    <div>
      <Navbar/>
      <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Resume Analyzer</h2>
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileChange}
            required
            style={{ margin: "10px 0" }}
          />
          <button type="submit" className="btn btn-primary">
            Upload Resume
          </button>
        </form>

        {progress > 0 && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h3>Making analysis...</h3>
            <div
              style={{
                width: "50%",
                height: "20px",
                backgroundColor: "#e9ecef",
                margin: "10px auto",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#007BFF",
                  transition: "width 0.5s",
                }}
              ></div>
            </div>
            {progress === 100 && analysisComplete && <h4>Analysis Complete!</h4>}
          </div>
        )}

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        {projects.length > 0 && (
          <div style={{ marginTop: "30px" }}>
            <h3>Related Projects</h3>
            <ul>
              {projects.map((project) => (
                <li
                  key={project.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "10px",
                    margin: "10px 0",
                  }}
                >
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <p>
                    <strong>Skills:</strong> {project.skills.join(", ")}
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() => alert(`Enrolled in ${project.name}`)}
                  >
                    Enroll
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
