import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Custom styles if needed
import Login from './login'; // Import your Login component
import Dashboard from './dashboard'; // Import your Dashboard component
import UploadData from "./UploadData";
import AddProperty from "./AddProperty";
import Properties from "./viewProperty";
import Tenants from "./Tenants";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<UploadData />} />
        <Route path="/addProperty" element={<AddProperty />} />        
        <Route path="/viewProperty" element={<Properties />} />        
        <Route path="/tenants" element={<Tenants />} />        
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);