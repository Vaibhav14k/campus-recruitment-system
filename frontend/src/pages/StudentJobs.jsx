import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../compoents/Navbar";
import "./StudentJobs.css";

const StudentJobs = () => {
  const [jobs, setJobs] = useState([]);
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    API.get("/admin/jobs")
      .then((res) => setJobs(res.data))
      .catch(() => alert("Failed to load jobs"));
  }, []);

  const applyJob = async (jobId) => {
    try {
      await API.post("/student/apply", {
        jobId,
        studentEmail: email,
      });
      alert("Applied successfully");
    } catch {
      alert("Already applied");
    }
  };

  return (
    <>
      <Navbar />
      <div className="jobs-page">
        <h2>Available Jobs</h2>

        <div className="jobs-grid">
          {jobs.map((job) => (
            <div className="job-card" key={job._id}>
              <h3>{job.companyName}</h3>
              <p><b>Role:</b> {job.jobRole}</p>
              <p><b>Branch:</b> {job.branch}</p>
              <p><b>Min CGPA:</b> {job.minCGPA}</p>
              <p><b>Package:</b> {job.package}</p>
              <p><b>Last Date:</b> {job.lastDate}</p>

              <button onClick={() => applyJob(job._id)}>Apply</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentJobs;
