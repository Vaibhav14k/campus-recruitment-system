import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", formData);
      setMessage("Registered successfully");
      setTimeout(() => navigate("/"), 1000);
    } catch {
      setMessage("Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-content">
          <h1>Factorial24</h1>
          <p>Admin & Student Registration Portal</p>
        </div>
      </div>

      <div className="auth-right">
        <form className="auth-box" onSubmit={handleSubmit}>
          <h2>Register</h2>

          <input name="name" placeholder="Full Name" required onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" required onChange={handleChange} />

          <select name="role" onChange={handleChange}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Register</button>

          {message && <p className="auth-message">{message}</p>}

          <p className="auth-switch">
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
