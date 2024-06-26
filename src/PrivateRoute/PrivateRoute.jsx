import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Components/Authprovider/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const location = useLocation();
    if (loading) {
        return <p className="text-red-600 text-center"><span className="loading loading-infinity loading-lg"></span></p>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default PrivateRoute;