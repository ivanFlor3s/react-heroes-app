import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen/LoginScreen";

import { BrowserRouter } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <DashboardRoutes></DashboardRoutes>
            </PrivateRoutes>
          }
        ></Route>
        {/* <Route path="/*" element={<DashboardRoutes/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};
