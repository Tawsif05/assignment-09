import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Show a loading spinner while checking auth status
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    // If user is logged in, render the children (protected component)
    if (user) {
        return children;
    }

    // If user is not logged in, redirect to login page and pass the intended route via state
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
