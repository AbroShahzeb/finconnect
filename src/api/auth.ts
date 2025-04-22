import axios from "axios";
import { LoginSchema } from "../schemas/loginSchema";
import { SignUpSchema } from "../schemas/signUpSchema";

const baseUrl = `${import.meta.env.VITE_API_URL}/auth`;

export const login = async (body: LoginSchema) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, body, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const register = async (body: SignUpSchema) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, body, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getMe = async () => {
  try {
    const response = await axios.post(
      `${baseUrl}/me`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
