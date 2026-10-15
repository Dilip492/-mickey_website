
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated, loading, user } = useAuthContext();
  const location = useLocation();

  console.log("ProtectedRoute:", {
    isAuthenticated,
    loading,
    user,
    pathname: location.pathname,
  });

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}
