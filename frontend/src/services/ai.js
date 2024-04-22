import { Form } from "react-router-dom";
import api from "./axiosClient.js";

export const ai = {
  async rewrite(rewriteSentence) {
    const  { data }  = await api.post("/ai/rewrite", rewriteSentence);  
    return data;
  },
}; 