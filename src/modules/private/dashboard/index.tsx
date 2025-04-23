import { PageHeader } from "../../../layout/dashboardLayout/components/pageHeader";

export const Dashboard = () => {
  const userName: string =
    JSON.parse(localStorage.getItem("user")!)?.name || "";
  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="Dashboard" />
      </div>
      <div className="flex-1 h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        <p className="text-preset-1 text-primary-text font-medium px-6 py-8">
          Hello {userName}! Welcome to User Dashboard
        </p>
      </div>
    </main>
  );
};
