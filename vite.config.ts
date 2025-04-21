import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "finconnect.shahzebabro.com",
      "www.finconnect.shahzebabro.com",
      "https://finconnect.shahzebabro.com",
      "https://www.finconnect.shahzebabro.com",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
