import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://https://midterm-backend-silk.vercel.app:8000",
        changeOrigin: true,
      },
    },
  },
});
