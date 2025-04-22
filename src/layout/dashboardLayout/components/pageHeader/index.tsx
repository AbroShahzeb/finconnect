import { ThemeToggle } from "../../../../generalComponents";
import { LogoLink } from "../sidebar/components/logo";

interface Props {
  title?: string;
  isLargeHidden?: boolean;
}

export const PageHeader = ({ title, isLargeHidden = false }: Props) => {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800">
      <div className="lg:hidden py-3 px-4 h-11 md:py-4 md:px-8 md:h-[74px] dark:bg-neutral-800 text-primary-text bg-neutral-100 flex items-center">
        <LogoLink />
      </div>
      <div className="flex rounded-t-2xl lg:rounded-none bg-surface-2 items-center justify-between lg:h-[81px]  p-4 pb-0 lg:py-8 lg:px-8 lg:border-b border-neutral-200 dark:border-neutral-800">
        <h1
          className={`text-2xl font-bold text-primary-text dark:text-white ${
            isLargeHidden && "hidden lg:block"
          }`}
        >
          {title}
        </h1>

        <div className=" items-center gap-4 ">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
