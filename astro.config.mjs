import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://energy-i.ai",
  integrations: [react()],
  redirects: {
    "/join-pilot": "https://my.energy-i.ai/sign-up",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
