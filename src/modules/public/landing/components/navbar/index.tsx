import { Link } from "react-router-dom";
import { Logo } from "../../../../../assets/svgAssets";
import { Button, ThemeToggle } from "../../../../../generalComponents";
import ROUTES from "../../../../../constants/routes";

export const Navbar = () => {
  return (
    <div className="py-4 md:py-8 flex items-center gap-4 justify-between">
      <Logo />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link to={ROUTES.LOGIN}>
          <Button label="Get Started" />
        </Link>
      </div>
    </div>
  );
};
