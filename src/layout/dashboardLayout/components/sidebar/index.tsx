import { Links } from "./components";
import { LogoLink } from "./components/logo";

export const Sidebar = () => {
  return (
    <aside className="max-w-[272px] min-w-[272px] w-full h-dvh py-3 px-4 bg-surface-2 border-neutral-200 flex flex-col gap-4 border-r dark:border-neutral-800">
      <div className="py-3 px-4">
        <LogoLink />
      </div>

      <Links />
    </aside>
  );
};
