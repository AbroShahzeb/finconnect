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

export const getSubscription = async () => {
  const userId = JSON.parse(localStorage.getItem("user")!)._id;
  try {
    const response = await axios.get(`${baseUrl}/${userId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};
