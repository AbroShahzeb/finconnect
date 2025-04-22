import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../constants/routes";
import { useMutation } from "@tanstack/react-query";
import { getMe } from "../api/auth";
import { showErrorToast } from "../lib/toastUtils";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { mutate: getMyInfo, isPending } = useMutation({
    mutationFn: getMe,
    onSuccess: (res) => {
      if (res?.response?.data?.status === "fail") {
        return showErrorToast(res.response.data.message);
      }
    },
  });

  useEffect(() => {
    getMyInfo();
  }, []);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-0 dark:bg-neutral-950">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  // Render the children if authenticated
  return <>{children}</>;
};
