import { Form } from "react-router-dom";
import api from "./axiosClient.js";

export const msg = {
  async getAll() {
    const  { data }  = await api.get("/msgs");  
    return data;
  },
  async createOne(MessageObj) {
    // const formData = new FormData();
    // formData.append("user_id", MessageObj.user_id);
    // formData.append("username", MessageObj.username);
    // formData.append("filename", MessageObj.filename);
    // formData.append("msg", MessageObj.msg);
    const formData = {
      "user_id": MessageObj.user_id,
      "username": MessageObj.username,
      "filename": MessageObj.filename,
      "msg": MessageObj.msg
    }
    console.log(formData);
    const { data } = await api.post("/msgs/create", formData);
    return data;
  },
  async deleteOne(user_id,msg_id) {
    const { data } = await api.post("/msgs/delete", {user_id, msg_id});
    return data;
  }
}; 