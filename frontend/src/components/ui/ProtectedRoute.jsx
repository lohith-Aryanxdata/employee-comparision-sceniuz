import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { PageLoader } from "@/components/ui";

export function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) return <PageLoader />;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // Redirect to appropriate home based on actual role
    const home = user?.role === "ADMIN" ? "/admin/dashboard" : "/dashboard";
    return <Navigate to={home} replace />;
  }

  return children;
}

export function GuestRoute({ children }) {
  const { isAuthenticated, isLoading, user } = useAuth();
  if (isLoading) return <PageLoader />;
  if (isAuthenticated) {
    const home = user?.role === "ADMIN" ? "/admin/dashboard" : "/dashboard";
    return <Navigate to={home} replace />;
  }
  return children;
}
