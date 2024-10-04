import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './addProperty.css';
import { FaHome, FaUpload, FaBuilding, FaEye, FaUserPlus, FaCloudUploadAlt } from 'react-icons/fa';

const AddProperty = () => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [additionalPhotos, setAdditionalPhotos] = useState([]);

  const handleMainPhotoChange = (event) => {
    setMainPhoto(event.target.files[0]);
  };

  const handleAdditionalPhotosChange = (event) => {
    setAdditionalPhotos([...event.target.files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here
    console.log('Main photo:', mainPhoto);
    console.log('Additional photos:', additionalPhotos);
  };

  return (
    <div className="add-property-container d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-light p-3">
        <h2 className="py-3 px-3">Add Property</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/Dashboard" className="nav-link text-white">
              <FaHome className="icon" /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/upload" className="nav-link text-white">
              <FaUpload className="icon" /> Upload Data
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addProperty" className="nav-link text-white">
              <FaBuilding className="icon" /> Add Property
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewProperty" className="nav-link text-white">
              <FaEye className="icon" /> View Property
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tenants" className="nav-link text-white">
              <FaUserPlus className="icon" /> Add Tenant
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content p-4">
        <h2 className="mb-4">Upload Property</h2>
        <form onSubmit={handleSubmit} className="property-upload-form">
          {/* Main Photo Upload */}
          <div className="photo-section">
            <label htmlFor="main-photo" className="photo-upload-area d-flex flex-column align-items-center justify-content-center">
              <FaCloudUploadAlt className="upload-icon mb-2" />
              <p className="text-center">Main Photo</p>
              <p className="text-center">Drop files or Click to upload</p>
              <input
                type="file"
                id="main-photo"
                className="photo-input"
                accept="image/*"
                onChange={handleMainPhotoChange}
              />
            </label>
          </div>

          {/* Additional Photos */}
          <div className="additional-photos mb-4">
            <p>Additional Photos</p>
            <div className="d-flex flex-wrap gap-3">
              {[...Array(4)].map((_, index) => (
                <label key={index} htmlFor={`photo-${index}`} className="add-photo-box d-flex align-items-center justify-content-center">
                  <span className="add-photo-text">+</span>
                  <input
                    type="file"
                    id={`photo-${index}`}
                    className="photo-input"
                    accept="image/*"
                    onChange={handleAdditionalPhotosChange}
                    multiple
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          <div className="input-fields mb-4">
            <input
              type="text"
              placeholder="Location - Town, Estate, Road"
              className="form-control mb-3"
            />
            <input type="text" placeholder="Landlord Name" className="form-control mb-3" />
            <input type="text" placeholder="Landlord Contact" className="form-control mb-3" />
            <input type="email" placeholder="Landlord Email" className="form-control mb-3" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Add Property</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
