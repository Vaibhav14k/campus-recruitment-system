import { useState } from "react";
import API from "../api/api";
import Navbar from "../compoents/Navbar";
import "./AdminPostJob.css";

const AdminPostJob = () => {
  const [job, setJob] = useState({
    companyName: "",
    jobRole: "",
    branch: "",
    minCGPA: "",
    package: "",
    lastDate: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/admin/jobs", job);
    alert("Job posted successfully");
  };

  return (
    <>
      <Navbar />
      <div className="admin-page">
        <div className="admin-card">
          <h2>Post New Job</h2>

          <form onSubmit={handleSubmit}>
            <div className="admin-group">
              <label>Company Name</label>
              <input name="companyName" onChange={handleChange} />
            </div>

            <div className="admin-group">
              <label>Job Role</label>
              <input name="jobRole" onChange={handleChange} />
            </div>

            <div className="admin-group">
              <label>Eligible Branch</label>
              <input name="branch" onChange={handleChange} />
            </div>

            <div className="admin-group">
              <label>Minimum CGPA</label>
              <input name="minCGPA" onChange={handleChange} />
            </div>

            <div className="admin-group">
              <label>Package (LPA)</label>
              <input name="package" onChange={handleChange} />
            </div>

            <div className="admin-group">
              <label>Last Date</label>
              <input type="date" name="lastDate" onChange={handleChange} />
            </div>

            <button className="admin-btn">Post Job</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPostJob;
