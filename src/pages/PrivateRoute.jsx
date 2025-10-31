import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If user is authenticated, render the children (protected component),
  // else redirect to login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
