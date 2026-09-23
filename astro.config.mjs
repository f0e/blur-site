// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://blur.sh",

  integrations: [mdx(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  trailingSlash: "never",

  markdown: {
    shikiConfig: {
      themes: {
        light: "kanagawa-lotus",
        dark: "kanagawa-dragon",
      },
    },
  },
});
