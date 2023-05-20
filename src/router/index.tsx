import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
import Dashboard from "../screens/dashboard";
import LoginPage from "../screens/login";
import Transactions from "../screens/transactions";
import { SideBar } from "../components/sideBar";

const Navigation = () => {
  const location = useLocation();

  const shouldRenderSidebar = location.pathname !== "/login";
  return (
    <>
      {shouldRenderSidebar && <SideBar location={location} />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default Navigation;
