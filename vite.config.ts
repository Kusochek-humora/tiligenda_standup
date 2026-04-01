import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/",
  plugins: [vue(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/_vars.scss" as *;
          @use "@/assets/styles/_mixins.scss" as *;
        `,
      },
    },
  },
});
