import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}/subscriptions`;

export const createSubscription = async (body: {
  name: string;
  price: string;
}) => {
  try {
    const response = await axios.post(`${baseUrl}/payment`, body, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};
