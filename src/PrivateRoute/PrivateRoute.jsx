import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Components/Authprovider/AuthContext";
import PropTypes from 'prop-types'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const location = useLocation();
    if (loading) {
        return <p className="text-red-600 text-center"><span className="loading h-screen loading-bars loading-lg"></span>
        </p>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

PrivateRoute.propTypes = {
    children : PropTypes.object
}
export default PrivateRoute;