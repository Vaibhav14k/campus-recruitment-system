import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Factorial24
      </div>

      <div className="navbar-links">
        {role === "student" && (
          <>
            <Link to="/student-dashboard">Dashboard</Link>
            <Link to="/student-profile">Profile</Link>
            <Link to="/student/jobs">Jobs</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin-dashboard">Dashboard</Link>
            <Link to="/admin/post-job">Post Job</Link>
            <Link to="/admin/applicants">Applicants</Link>
          </>
        )}

        {role && (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
