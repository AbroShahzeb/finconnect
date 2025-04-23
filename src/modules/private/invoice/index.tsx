import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "../../../generalComponents";
import { PageHeader } from "../../../layout/dashboardLayout/components/pageHeader";
import {
  InvoiceRequestBody,
  invoiceRequestBodySchema,
} from "../../../schemas/invoiceRequestBody";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { generateInvoice } from "../../../api/finconnect";
import { showErrorToast } from "../../../lib/toastUtils";
import { InvoiceCard } from "./components";
import { useState } from "react";
import { Invoice as InvoiceType } from "./components/invoiceCard";

export const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceRequestBody>({
    resolver: zodResolver(invoiceRequestBodySchema),

    defaultValues: {
      startDate: new Date().toISOString().split("T")[0], // returns YYYY-MM-DD
      endDate: new Date().toISOString().split("T")[0],
    },
  });

  console.log("invoiceData", invoiceData);
  const { mutate: invoice, isPending } = useMutation({
    mutationFn: generateInvoice,
    onSuccess: (res) => {
      if (res?.response?.data?.status === "fail") {
        setInvoiceData(null);
        return showErrorToast(res.response.data.message);
      }
      console.log(res);
      setInvoiceData(res.data.invoice!);
    },
  });

  const onSubmit = (data: InvoiceRequestBody) => {
    invoice(data);
  };

  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="Invoice" />
      </div>
      <div className="flex-1 flex h-[calc(100vh-81px-44px)] overflow-y-auto sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        <div className="px-4 lg:w-[291px] flex flex-col gap-4 lg:h-[calc(100vh-81px)] overflow-y-auto lg:pl-8  pt-5 lg:border-r border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col gap-6">
            <p className="text-preset-3 text-primary-text font-medium">
              Enter Start and End Date to Generate your invoice
            </p>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                registerProps={register("startDate")}
                type="date"
                placeholder="Start Date"
                label="Start Date"
                error={errors.startDate?.message}
              />
              <Input
                registerProps={register("endDate")}
                type="date"
                placeholder="End Date"
                label="End Date"
                error={errors.endDate?.message}
              />
              <Button
                type="submit"
                label={isPending ? "Loading..." : "Generate Invoice"}
              />
            </form>
          </div>
        </div>
        {invoiceData && (
          <div className="p-6">
            <InvoiceCard {...(invoiceData as InvoiceType)} />
          </div>
        )}
      </div>
    </main>
  );
};
