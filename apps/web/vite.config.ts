import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { unwasm } from "unwasm/plugin";
import { defineConfig } from "vite-plus";

const prismaWasm =
  process.env.ALCHEMY_CLOUDFLARE_VITE_INJECTED === "1" ? null : unwasm({ esmImport: true });

export default defineConfig({
  server: {
    port: 3001,
  },
  build: {
    rollupOptions: {
      // resolved by workerd at runtime; node builds cannot bundle it
      external: ["cloudflare:workers"],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [prismaWasm, tailwindcss(), tanstackStart(), viteReact()],
});
