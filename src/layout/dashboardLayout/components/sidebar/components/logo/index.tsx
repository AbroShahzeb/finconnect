import { Link } from "react-router-dom";
import ROUTES from "../../../../../../constants/routes";
import { Logo } from "../../../../../../assets/svgAssets";

export const LogoLink = () => {
  return (
    <Link to={ROUTES.DASHBOARD}>
      <span className="text-primary-text">
        <Logo />
      </span>
    </Link>
  );
};
