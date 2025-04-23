import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "../../../layout/dashboardLayout/components/pageHeader";
import { getBalanceAPI } from "../../../api/finconnect";

export const Balance = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["balance"],
    queryFn: getBalanceAPI,
  });

  console.log("Balance data", data);
  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="Balance" />
      </div>
      <div className="flex-1 px-4 h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        <div className="w-full sm:w-[291px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 px-4 lg:pl-8 pt-5">
          <p>Your current balance is</p>
          <p className="text-2xl font-bold text-primary-text dark:text-white">
            ${isLoading ? "Loading..." : data?.data?.balance}
          </p>
        </div>
      </div>
    </main>
  );
};
