import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://projeto-aos-2023-1.onrender.com",
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Erro ao adicionar o token à requisição: ", error);

      return Promise.reject(error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
