import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "../constants/routes";
import { Login, Register } from "../modules/public/auth";
import { Landing } from "../modules/public/landing";
import { Pricing } from "../modules/public/pricing";
import { DashboardLayout } from "../layout/dashboardLayout";
import { Balance, Dashboard, Invoice, Transfer } from "../modules/private";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.PRICING} element={<Pricing />} />

        {/* Protect the DashboardLayout */}
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="" element={<Dashboard />} />
          <Route path={"balance"} element={<Balance />} />
          <Route path={"transfer"} element={<Transfer />} />
          <Route path={"invoice"} element={<Invoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
