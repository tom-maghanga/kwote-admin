import React, { useState } from 'react';
import './UploadData.css'; // Updated CSS file
import { FaHome, FaUpload, FaBuilding, FaEye, FaUserPlus } from 'react-icons/fa';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UploadData = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here
    if (selectedFile) {
      console.log("Uploading file: ", selectedFile);
    }
  };

  return (
    <div className="upload-container">
      <div className="sidebar">
      <h2 className="logo">Upload Data</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/Dashboard" className="nav-link">
              <FaHome className="icon" /> Dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/upload" className="nav-link">
              <FaUpload className="icon" /> Upload Data
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addProperty" className="nav-link">
              <FaBuilding className="icon" /> Add Property
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewProperty" className="nav-link">
              <FaEye className="icon" /> View Property
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tenants" className="nav-link">
              <FaUserPlus className="icon" /> Add Tenant
            </Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="upload-section">
          <h2>Upload new tenant data</h2>
          <p>Upload XLS file</p>

          <form onSubmit={handleSubmit} className="file-upload-form">
            <label htmlFor="file-upload" className="file-drop-area">
              <FaCloudUploadAlt className="upload-icon" />
              <p className="drop-text">Drag and Drop files to upload or</p>
              <button type="button" className="browse-btn">
                Browse
              </button>
              <input
                type="file"
                id="file-upload"
                className="file-input"
                accept=".xls, .xlsx"
                onChange={handleFileChange}
              />
            </label>
            {selectedFile && <p className="file-name">Selected File: {selectedFile.name}</p>}
            <button type="submit" className="upload-btn">
              Upload File
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadData;
