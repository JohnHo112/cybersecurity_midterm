import api from "./axiosClient";
import { getAuthToken } from "./utils";

export const user = {
  async getAll() {
    const { data } = await api.get("/users");
    return data;
  },
  async createOne(formData) {
    const { data } = await api.post("/users", formData);
    return data;
  },
  async login(formData) {
    const {data} = await api.post("/users/login", formData);
    return data;
  },
};
