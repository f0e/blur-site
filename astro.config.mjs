// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://blur.sh",

  integrations: [
    mdx(),
    icon(),
    // skip the 404 and auto-download pages
    sitemap({
      filter: (page) => !/\/(404|download\/.*)$/.test(page),
    }),
  ],

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
