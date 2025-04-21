import { Link } from "react-router-dom";
import { Button } from "../../../../../generalComponents";
import ROUTES from "../../../../../constants/routes";

export const Hero = () => {
  return (
    <header className="h-[calc(100vh-250px)] flex items-center ">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-[40px] max-w-xl leading-[48px] font-semibold text-primary-text">
            Powerful Finance APIs for Modern Applications
          </h1>
          <p className="text-preset-3 max-w-sm text-secondary-text">
            Seamlessly integrate fund transfers, invoicing, balance tracking,
            and more with FinConnect — your all-in-one financial infrastructure.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button label="Documentation" variant="outlined" />
          <Link to={ROUTES.PRICING}>
            <Button label="Pricing" />
          </Link>
        </div>
      </div>
    </header>
  );
};
