import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <button onClick={handleLogout} style={{ marginTop: "16px" }}>
      Logout
    </button>
  );
};

export default LogoutButton;
