import React from 'react';
import './dashboard.css';
import { FaHome, FaUpload, FaBuilding, FaEye, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dash from "./dashboard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="logo">Dashboard</h2>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <FaHome className="icon" /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
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
        <div className="header">
          <h2>Welcome back, Kwote</h2>
        </div>
        <div className="statistics-container">
          <div className="stat-box">
            <h3>Property Total</h3>
            <p>115</p>
          </div>
          <div className="stat-box">
            <h3>Tenants Total</h3>
            <p>435</p>
          </div>
          <div className="stat-box">
            <h3>Landlords Total</h3>
            <p>67</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
