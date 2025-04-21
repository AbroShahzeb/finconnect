import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "../constants/routes";
import { Login, Register } from "../modules/public/auth";
import { Landing } from "../modules/public/landing";
import { Pricing } from "../modules/public/pricing";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.PRICING} element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};
