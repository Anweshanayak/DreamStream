import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../NavBar'
import { FaLock, FaUpload } from 'react-icons/fa'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const ResumeAnalyzer = () => {
    const fileInputRef = useRef(null); // Create a ref for the file input
    const batchInputRef = useRef(null); // Ref for batch upload
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [progress, setProgress] = useState(0); // State for progress
    const [analyzing, setAnalyzing] = useState(false); 


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prevFiles) => [...prevFiles, file]);
      console.log("File uploaded:", file.name);

      // Start analysis
      setAnalyzing(true);
      let currentProgress = 0;

      // Simulate progress
      const progressInterval = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(progressInterval);
          setAnalyzing(false); // Stop analysis
        }
      }, 500);
    }
  };

  const handleBatchUpload = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to array
    if (files.length > 0) {
      setUploadedFiles((prevFiles) => [...prevFiles, ...files]); // Add all files to uploaded files
      files.forEach((file) => {
        console.log("Batch file uploaded:", file.name);
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click(); // Use the ref to trigger the click
  };

  const triggerBatchInput = () => {
    batchInputRef.current.click();
  };
  return (
    <div>
        <Navbar />
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", paddingLeft:'60px' }}>
            <div className="text-center">
                <h1 className="mb-4">Resume Analyzer</h1>
                <div
                    className="border rounded p-4"
                    style={{ borderStyle: "dashed", borderWidth: "2px", width: "300px" }}
                >
                    <FaUpload size={50} className="mb-3 text-secondary" />
                    <input
                        type="file"
                        ref={fileInputRef} // Attach the ref to the input
                        accept=".pdf,.doc,.docx"
                        style={{ display: "none" }}
                        onChange={handleFileUpload}
                    />
                    <button className="btn btn-success btn-block mb-3" onClick={triggerFileInput}>
                        Upload Your Resume
                    </button>
                    <input
                        type="file"
                        ref={batchInputRef}
                        accept=".pdf,.doc,.docx"
                        multiple // Allow multiple files
                        style={{ display: "none" }}
                        onChange={handleBatchUpload}
                    />
                    <button className="btn btn-outline-success btn-block mb-3" onClick={triggerBatchInput}>
                        Batch Upload
                    </button>
                    <div className="text-muted">
                        <FaLock className="mr-2" />
                        Privacy guaranteed
                    </div>
                </div>
            </div>
            {analyzing && (
          <div className="mt-4" style={{ width: "150px", margin: "0 auto" }}>
            <CircularProgressbar
              value={progress}
              maxValue={100}
              text={`${progress}%`}
              styles={buildStyles({
                rotation: 0.5, // For semicircle
                strokeLinecap: "round",
                textSize: "16px",
                pathColor: "#28a745", // Green color
                textColor: "#000",
                trailColor: "#d6d6d6",
                backgroundColor: "#f8f9fa",
              })}
              strokeWidth={10}
            />
          </div>
        )}
        </div>
    </div>
  )
}

export default ResumeAnalyzer