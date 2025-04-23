import axios from "axios";
import { InvoiceRequestBody } from "../schemas/invoiceRequestBody";
import { TransferFunds } from "../schemas/transferFundsSchema";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const generateInvoice = async (body: InvoiceRequestBody) => {
  try {
    const response = await axios.get(
      `${baseUrl}/invoice?start=${body.startDate}&end=${body.endDate}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error generating invoice:", error);
    return error;
  }
};

export const transferFundsAPI = async (body: TransferFunds) => {
  try {
    const response = await axios.post(`${baseUrl}/transfer`, body, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error transferring funds:", error);
    return error;
  }
};
