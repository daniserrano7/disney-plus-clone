import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";

installGlobals();

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
    }),
  ],
});