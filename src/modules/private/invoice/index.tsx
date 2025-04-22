import { PageHeader } from "../../../layout/dashboardLayout/components/pageHeader";

export const Invoice = () => {
  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="Invoice" />
      </div>
      <div className="flex-1 h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        <p>Invoice Page</p>
      </div>
    </main>
  );
};
