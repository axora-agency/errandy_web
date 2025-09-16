import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 3000,
  },
  server: {
    host: true, // Enable listening on all hosts
    proxy: {
      // Match all subdomains dynamically
      "^.+\\.localhost": {
        target: "http://localhost:5173", // Main backend
        rewrite: (path) => path, // Forward the full path as-is
        changeOrigin: true,
      },
    },
  },
});
