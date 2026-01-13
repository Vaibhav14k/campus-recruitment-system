import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../compoents/Navbar";
import "./StudentProfile.css";

const StudentProfile = () => {
  const email = localStorage.getItem("userEmail");

  const [profile, setProfile] = useState({
    branch: "",
    year: "",
    cgpa: "",
    skills: "",
  });

  useEffect(() => {
    API.get(`/student/profile?email=${email}`)
      .then((res) => setProfile(res.data))
      .catch(() => alert("Failed to load profile"));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/student/profile?email=${email}`, profile);
    alert("Profile updated");
  };

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-card">
          <h2>Student Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className="profile-group">
              <label>Branch</label>
              <input name="branch" value={profile.branch} onChange={handleChange} />
            </div>

            <div className="profile-group">
              <label>Graduation Year</label>
              <input name="year" value={profile.year} onChange={handleChange} />
            </div>

            <div className="profile-group">
              <label>CGPA</label>
              <input name="cgpa" value={profile.cgpa} onChange={handleChange} />
            </div>

            <div className="profile-group">
              <label>Skills</label>
              <input name="skills" value={profile.skills} onChange={handleChange} />
            </div>

            <button className="profile-btn">Save Profile</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
