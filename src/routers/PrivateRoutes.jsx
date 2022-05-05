import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { useContext } from "react";
export const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user.logged ? children : <Navigate to={"/login"} />;
};
