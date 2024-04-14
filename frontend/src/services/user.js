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
    const {data} = await api.post("/users/login", formData).catch((error) => {
      alert("login fail");
      console.error(error);
    });
    return data;
  },

  async getMe(){
    // 從 localStorage 拿取 token
    const token = getAuthToken();

    return api.get("/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      // 处理错误
      console.error('获取用户信息时出错:', error);
      throw error; // 可以选择继续向上传播错误
    });
  },
};
