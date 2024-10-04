import { Link } from 'react-router-dom';
import React from 'react';
import { FaHome, FaBuilding,FaUpload,  FaUserPlus, FaEye } from 'react-icons/fa';
import './viewProperty.css'; // Include updated CSS
import Apartment from "./img/apartment-building.png"; // Ensure the correct image path is used

const Properties = () => {
  const properties = [
    {
      name: "Bamburi New Heights",
      location: "Bamburi Mwisho, Next to Kenol",
      owner: "John Doe",
      tenants: 26,
      paid: 10,
      notPaid: 16,
    },
    // Duplicate property data for demo purposes
    {
      name: "Bamburi New Heights",
      location: "Bamburi Mwisho, Next to Kenol",
      owner: "John Doe",
      tenants: 26,
      paid: 10,
      notPaid: 16,
    },
    {
      name: "Bamburi New Heights",
      location: "Bamburi Mwisho, Next to Kenol",
      owner: "John Doe",
      tenants: 26,
      paid: 10,
      notPaid: 16,
    },
    {
      name: "Bamburi New Heights",
      location: "Bamburi Mwisho, Next to Kenol",
      owner: "John Doe",
      tenants: 26,
      paid: 10,
      notPaid: 16,
    },
    {
      name: "Bamburi New Heights",
      location: "Bamburi Mwisho, Next to Kenol",
      owner: "John Doe",
      tenants: 26,
      paid: 10,
      notPaid: 16,
    },
    {
      name: "Bamburi New Heights",
      location: "Bamburi Mwisho, Next to Kenol",
      owner: "John Doe",
      tenants: 26,
      paid: 10,
      notPaid: 16,
    }
  ];

  return (
    <div className="properties-container">
      {/* Sidebar */}
      <div className="sidebar">
      <h2 className="logo">View Property</h2>
        <ul className="list-unstyled">
          <li>
            <Link to="/" className="nav-link">
              <FaHome className="icon" /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/upload" className="nav-link text-white">
              <FaUpload className="icon" /> Upload Data
            </Link>
          </li>
          <li>
            <Link to="/addProperty" className="nav-link">
              <FaBuilding className="icon" /> Add Property
            </Link>
          </li>
          <li>
            <Link to="/viewProperty" className="nav-link active">
              <FaEye className="icon" /> View Property
            </Link>
          </li>
          <li>
            <Link to="/tenants" className="nav-link">
              <FaUserPlus className="icon" /> Add Tenant
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Property"
            className="search-input"
          />
        </div>

        {/* Properties List */}
        <h2 className="properties-title">Properties</h2>
        <div className="properties-grid">
          {properties.map((property, index) => (
            <div className="property-card" key={index}>
              <img
                src={Apartment} // Use your image path
                alt={property.name}
                className="property-image"
              />
              <h5 className="property-name">{property.name}</h5>
              <p className="property-location">{property.location}</p>
              <p className="property-owner">Owner: {property.owner}</p>
              <p className="tenant-info">
                {property.tenants} Tenants, {property.paid} Paid, {property.notPaid} Not Paid
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
