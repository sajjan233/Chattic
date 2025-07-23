import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="mb-4">Portfolio Dashboard</h2>
      <ul>
        <li><Link to="/dashboard/hero">Edit Hero Section</Link></li>
        <li><Link to="/dashboard/about">Edit About Section</Link></li>
        <li><Link to="/dashboard/projects">Manage Projects</Link></li>
        <li><Link to="/dashboard/contact">Edit Contact Info</Link></li>
        <li><Link to="/">← Back to Website</Link></li>
      </ul>
    </div>
  );
}
