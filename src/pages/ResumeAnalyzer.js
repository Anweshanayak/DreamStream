import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Navbar from "../NavBar";
import { FaUpload, FaLock } from "react-icons/fa";

const ResumeAnalyzer = () => {
  const fileInputRef = useRef(null); // Ref for single file input
  const batchInputRef = useRef(null); // Ref for batch file input
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate(); // Navigation hook

  // Handle single file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prevFiles) => [...prevFiles, file]);
      console.log("Single file uploaded:", file.name);
      const stats = {
        pdf: file.type === "application/pdf" ? 1 : 0,
        documents: ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)
          ? 1
          : 0,
        video: file.type.startsWith("video/") ? 1 : 0,
        pictures: file.type.startsWith("image/") ? 1 : 0,
      };
      // Navigate to the loading page
      navigate("/loading", {
        state: {
          files: [file], // Pass the file as an array
          stats, 
          progress: 0,
          fileCount: 1, // Single file upload
          text: "Uploading Your Files",
          path: "/confirmation", // Path to navigate after completion
        },
      });
    }
  };

  // Handle batch file upload
  const handleBatchUpload = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to array
    if (files.length > 0) {
      setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
      files.forEach((file) => console.log("Batch file uploaded:", file.name));

      const stats = {
        pdf: files.filter((file) => file.type === "application/pdf").length,
        documents: files.filter((file) =>
          ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)
        ).length,
        video: files.filter((file) => file.type.startsWith("video/")).length,
        pictures: files.filter((file) => file.type.startsWith("image/")).length,
      };
      // Navigate to the loading page
      navigate("/loading", {
        state: {
          progress: 0,
          files,
          stats,
          fileCount: files.length, // Number of files in the batch
          text: "Uploading Your Files",
          path: "confirmation", // Path to navigate after completion
        },
      });
    }
  };

  // Trigger single file input
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Trigger batch file input
  const triggerBatchInput = () => {
    batchInputRef.current.click();
  };

  return (
    <div>
      <Navbar />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", paddingLeft: "60px" }}
      >
        <div className="text-center">
          <h1 className="mb-4">Resume Analyzer</h1>
          <div
            className="border rounded p-4"
            style={{ borderStyle: "dashed", borderWidth: "2px", width: "300px" }}
          >
            <FaUpload size={50} className="mb-3 text-secondary" />
            {/* Single file input */}
            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <button
              className="btn btn-success btn-block mb-3"
              onClick={triggerFileInput}
            >
              Upload Your Resume
            </button>

            {/* Batch file input */}
            <input
              type="file"
              ref={batchInputRef}
              accept=".pdf,.doc,.docx"
              multiple
              style={{ display: "none" }}
              onChange={handleBatchUpload}
            />
            <button
              className="btn btn-outline-success btn-block mb-3"
              onClick={triggerBatchInput}
            >
              Batch Upload
            </button>

            <div className="text-muted">
              <FaLock className="mr-2" />
              Privacy guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
