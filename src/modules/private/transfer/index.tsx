import { useForm } from "react-hook-form";
import { PageHeader } from "../../../layout/dashboardLayout/components/pageHeader";
import {
  TransferFunds,
  transferFundsSchema,
} from "../../../schemas/transferFundsSchema";
import { Button, Input } from "../../../generalComponents";
import { useMutation } from "@tanstack/react-query";
import { transferFundsAPI } from "../../../api/finconnect";
import { showErrorToast, showSuccessToast } from "../../../lib/toastUtils";
import { zodResolver } from "@hookform/resolvers/zod";

export const Transfer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TransferFunds>({
    defaultValues: {
      to: "",
      from: JSON.parse(localStorage.getItem("user")!)?._id || "",
      title: "",
      description: "",
      amount: "",
    },
    resolver: zodResolver(transferFundsSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: transferFundsAPI,
    onSuccess: (res) => {
      if (res?.response?.data?.status === "fail") {
        return showErrorToast(res.response.data.message);
      }
      showSuccessToast("Funds transferred successfully!");
      reset();
    },
  });

  const onSubmit = (data: TransferFunds) => {
    console.log("Transfer data", data);
    mutate(data);
  };
  return (
    <main className="w-full flex-1 max-h-dvh h-full  bg-surface-2  min-h-dvh">
      <div>
        <PageHeader title="Transfer" />
      </div>
      <div className="flex-1 h-[calc(100vh-81px-100px)] overflow-y-auto sm:h-[calc(100vh-81px-74px-100px)] lg:h-[calc(100vh-81px)]">
        <div className="w-full sm:w-[291px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 px-4 lg:pl-8 pt-5">
          <div className="flex flex-col gap-6">
            <p className="text-preset-3 text-primary-text font-medium">
              Enter details below to transfer funds
            </p>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                registerProps={register("to")}
                placeholder="To Account"
                label="To Accound ID"
                error={errors.to?.message}
              />
              <Input
                registerProps={register("from")}
                placeholder="From Account"
                label="From Account ID"
                error={errors.from?.message}
                disabled
              />
              <Input
                registerProps={register("title")}
                label="Title"
                error={errors.title?.message}
              />
              <Input
                registerProps={register("description")}
                label="Description"
                error={errors.description?.message}
              />
              <Input
                registerProps={register("amount")}
                label="Amount"
                error={errors.amount?.message}
              />
              <Button
                type="submit"
                label={isPending ? "Loading..." : "Transfer"}
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
