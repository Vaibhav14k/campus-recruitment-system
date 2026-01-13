import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // ✅ useEffect INSIDE component
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role === "admin") navigate("/admin-dashboard");
    if (role === "student") navigate("/student-dashboard");
  }, [navigate]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);
      const { role, name } = res.data;

      localStorage.setItem("userRole", role);
      localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", formData.email);

      if (role === "admin") navigate("/admin-dashboard");
      else navigate("/student-dashboard");
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-content">
          <h1>Factorial24</h1>
          <p>Campus Recruitment Management System</p>
        </div>
      </div>

      <div className="auth-right">
        <form className="auth-box" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <button type="submit">Log in</button>

          {message && <p className="auth-message">{message}</p>}

          <p className="auth-switch">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
