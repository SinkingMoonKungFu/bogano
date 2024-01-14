import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";

const BASE_URL = process.env.ASSET_URL || "";
const plugins = [react()];

if (process.env.APP_ENV !== "development") {
  plugins.push(vike({ prerender: true }));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: plugins,
  base: `${BASE_URL}`,
  server: {
    host: true,
    port: 80,
    watch: {
      usePolling: true,
    },
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
});
