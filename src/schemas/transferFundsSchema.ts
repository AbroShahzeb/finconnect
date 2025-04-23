import { z } from "zod";

export const transferFundsSchema = z.object({
  to: z.string().min(1, "Recipient ID is required"),
  from: z.string().min(1, "Sender ID is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  amount: z.string().regex(/^[1-9]\d*$/, "Amount must be a positive integer"),
});

export type TransferFunds = z.infer<typeof transferFundsSchema>;
