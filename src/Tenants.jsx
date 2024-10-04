import { Link } from 'react-router-dom';
import React from 'react';
import {  FaHome,  FaBuilding, FaSearch, FaUserPlus, FaEye,FaUpload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tenants.css';

const Tenants = () => {
  return (
    <div className="tenants-container d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3">
      <h2 className="logo">Add Tenant</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
            <Link to="/Dashboard" className="nav-link">
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

      {/* Main Content */}
      <div className="content p-4">
        {/* Search Bar */}
        <div className="search-bar d-flex align-items-center mb-4">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Tenant"
            className="form-control"
          />
          <button className="btn add-new">Add New</button>
        </div>

        {/* Table */}
        <h2 className="tenants-title mb-4">Tenants</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Account Number</th>
                <th>House Number</th>
                <th>Name</th>
                <th>Package</th>
                <th>Amount</th>
                <th>Paid / Not Paid</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {/* Data rows can go here */}
              <tr>
                <td colSpan="8" className="empty-row"></td>
              </tr>
              {/* Additional rows can be added */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tenants;
