import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Manual login check
  const firebaseUser = JSON.parse(localStorage.getItem("firebaseUser")); // Firebase login check

  if (!token && !firebaseUser) {
    return <Navigate to="/account" replace />;
  }

  return children;
};

export default ProtectedRoute;
