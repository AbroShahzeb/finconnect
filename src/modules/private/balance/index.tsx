import CodeBlock from "../../../generalComponents/codeBlock";
import { PageHeader } from "../../../layout/dashboardLayout/components/pageHeader";

export const Balance = () => {
  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="Balance" />
      </div>
      <div className="flex-1 px-4 h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        <p className="text-preset-2 font-medium text-primary-text mt-2">
          Documentation
        </p>

        {/* Endpoint  */}
        <div>
          <CodeBlock
            code={`GET https://finconnect-api.shahzebabro.com/api/balance`}
          />
        </div>
        <CodeBlock
          code={`console.log("hello world")`}
          language="js"
          fileName="response"
        />
      </div>
    </main>
  );
};
