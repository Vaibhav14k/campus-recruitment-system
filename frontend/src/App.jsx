import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./compoents/ProtectedRoute";
import StudentProfile from "./pages/StudentProfile";
import AdminPostJob from "./pages/AdminPostJob";
import StudentJobs from "./pages/StudentJobs";
import AdminApplicants from "./pages/AdminApplicants";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student-profile"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/post-job"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminPostJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/jobs"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/applicants"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminApplicants />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
