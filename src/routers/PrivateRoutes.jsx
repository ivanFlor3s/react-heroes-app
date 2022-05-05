import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { useContext } from "react";


export const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
    const location = useLocation()

    localStorage.setItem('lastLocation', JSON.stringify(location))

  return user.logged ? children : <Navigate to={"/login"} />;
};
