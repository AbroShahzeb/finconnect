import { z } from "zod";

export const invoiceRequestBodySchema = z.object({
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Start Date must be in YYYY-MM-DD format"),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "End Date must be in YYYY-MM-DD format"),
});

export type InvoiceRequestBody = z.infer<typeof invoiceRequestBodySchema>;
