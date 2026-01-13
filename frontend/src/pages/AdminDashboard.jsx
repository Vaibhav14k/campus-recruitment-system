import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../compoents/Navbar";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalJobs: 0,
    totalApplications: 0,
  });

  useEffect(() => {
    API.get("/admin/stats")
      .then((res) => setStats(res.data))
      .catch(() => alert("Failed to load dashboard stats"));
  }, []);

  return (
    <>
      <Navbar />
      <div className="admin-dashboard-page">
        <h2>Admin Dashboard</h2>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Total Students</h3>
            <p>{stats.totalStudents}</p>
          </div>

          <div className="dashboard-card">
            <h3>Total Jobs</h3>
            <p>{stats.totalJobs}</p>
          </div>

          <div className="dashboard-card clickable">
            <h3>Total Applications</h3>
            <p>{stats.totalApplications}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
