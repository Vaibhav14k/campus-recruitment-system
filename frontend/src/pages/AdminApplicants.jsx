import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../compoents/Navbar";
import "./AdminApplicants.css";

const AdminApplicants = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        API.get("/admin/jobs-applicants")
            .then((res) => setJobs(res.data))
            .catch(() => alert("Failed to load applicants"));
    }, []);

    return (
        <>
            <Navbar />
            <div className="admin-applicants-page">
                <h2>Job Applicants</h2>

                <div className="admin-jobs-container">
                    {jobs.map((job) => (
                        <div className="admin-job-card" key={job.jobId}>
                            <h3>{job.companyName} – {job.jobRole}</h3>

                            <table className="applicants-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>CGPA</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {job.applications.map((app, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{app.name}</td>
                                            <td>{app.email}</td>
                                            <td>{app.cgpa}</td>
                                            <td>
                                                <span className={`status ${app.status}`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminApplicants;
