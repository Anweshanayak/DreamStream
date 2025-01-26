import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheck, FaFileAlt, FaFileVideo, FaFileImage, FaFilePdf } from "react-icons/fa";

const Confirmation = () => {
  const location = useLocation();
  const stats = location.state?.stats || {}; // File stats passed from LoadingPage
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the next page or perform next action
    navigate('/'); // Replace with your desired route
  };
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      {/* Left Section */}
      <div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>You have upload</h1>
        <FaCheck size={50} color="black" />
      </div>

      {/* Vertical Divider */}
      <div style={{ width: "2px", backgroundColor: "#ddd", height: "70%" }} />

      {/* Right Section */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>You have upload</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <FaFilePdf size={20} style={{ marginRight: "10px" }} />
            <span style={{ flex: 1 }}>PDF</span>
            <span>{stats.pdf || 0} files</span>
            
          </li>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <FaFileAlt size={20} style={{ marginRight: "10px" }} />
            <span style={{ flex: 1 }}>Documents</span>
            <span>{stats.documents || 0} files</span>
            
          </li>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <FaFileVideo size={20} style={{ marginRight: "10px" }} />
            <span style={{ flex: 1 }}>Video</span>
            <span>{stats.video || 0} files</span>
            
          </li>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <FaFileImage size={20} style={{ marginRight: "10px" }} />
            <span style={{ flex: 1 }}>Pictures</span>
            <span>{stats.pictures || 0} files</span>
            
          </li>
        </ul>

        <button 
        onClick={handleNext}
        style={{
          backgroundColor: '#28a745', // Green color
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Next
      </button>
      </div>
    </div>
  );
};

export default Confirmation;
