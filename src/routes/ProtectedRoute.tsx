import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../constants/routes";
import { useMutation } from "@tanstack/react-query";
import { getMe } from "../api/auth";
import { showErrorToast } from "../lib/toastUtils";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  const { mutate: getMyInfo } = useMutation({
    mutationFn: getMe,
    onSuccess: (res) => {
      if (res.status === "success") {
        setAuthenticated(true);
      }

      if (res?.response?.data?.status === "fail") {
        setIsLoading(false);
        return showErrorToast(res.response.data.message);
      }
      setIsLoading(false);
    },
  });

  useEffect(() => {
    getMyInfo();
  }, [getMyInfo]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-0 dark:bg-neutral-950">
        <div className="loader">Loading...</div>
      </div>
    );
  } else {
    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      return <Navigate to={ROUTES.LOGIN} replace />;
    }

    // Render the children if authenticated
    return <>{children}</>;
  }
};
